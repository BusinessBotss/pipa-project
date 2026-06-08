-- ════════════════════════════════════════════════════════════════════
-- Pipa Group — Supabase schema
-- Run this in the Supabase SQL editor (or `supabase db push`).
-- Idempotent-ish: safe to re-run in a fresh project.
-- ════════════════════════════════════════════════════════════════════

create extension if not exists "pgcrypto"; -- gen_random_uuid()

-- ── Enums ────────────────────────────────────────────────────────────
do $$ begin
  create type verification_status as enum ('verified', 'needs_review', 'placeholder');
exception when duplicate_object then null; end $$;

do $$ begin
  create type inquiry_status as enum (
    'new', 'contacted', 'qualified', 'converted', 'lost', 'spam', 'archived'
  );
exception when duplicate_object then null; end $$;

-- ════════════════════════════════════════════════════════════════════
-- CONTENT TABLES (text PKs to match app slugs, e.g. 'umi-fun-kitchen')
-- ════════════════════════════════════════════════════════════════════

-- Audience paths: stay / dine / pool / events / partners
create table if not exists public.quick_paths (
  id           text primary key,            -- 'stay' | 'dine' | 'pool' | 'events' | 'partners'
  label        jsonb not null default '{}'::jsonb,  -- LocalizedText
  cta_label    jsonb not null default '{}'::jsonb,
  sort_order   int  not null default 0,
  is_public    boolean not null default true,
  created_at   timestamptz not null default now()
);

create table if not exists public.brands (
  id                   text primary key,    -- slug, e.g. 'umi-fun-kitchen'
  name                 text not null,
  path_id              text not null references public.quick_paths(id),
  category             text not null,
  subtitle             jsonb not null default '{}'::jsonb,
  description          jsonb not null default '{}'::jsonb,
  hero_image           text,
  area                 text,
  address              jsonb,               -- { value, status, source }
  hours                jsonb,
  price_label          jsonb,
  price_level          int,
  signature            jsonb,
  best_for             text[] default '{}',
  mood_tags            text[] default '{}',
  verification_status  verification_status not null default 'placeholder',
  is_public            boolean not null default true,
  updated_at           timestamptz not null default now(),
  created_at           timestamptz not null default now()
);

create table if not exists public.brand_contacts (
  id          uuid primary key default gen_random_uuid(),
  brand_id    text not null references public.brands(id) on delete cascade,
  channel     text not null,               -- 'whatsapp' | 'instagram' | 'website' | 'email'
  value       text,
  status      verification_status not null default 'placeholder',
  is_public   boolean not null default true,
  created_at  timestamptz not null default now()
);

create table if not exists public.brand_events (
  id          uuid primary key default gen_random_uuid(),
  brand_id    text not null references public.brands(id) on delete cascade,
  title       jsonb not null default '{}'::jsonb,
  event_date  date,                         -- nullable: TODO_CONTENT where unconfirmed
  status      verification_status not null default 'needs_review',
  is_public   boolean not null default true,
  created_at  timestamptz not null default now()
);

-- Which fields each journey/path collects (drives the inquiry forms).
create table if not exists public.journey_fields (
  id          uuid primary key default gen_random_uuid(),
  path_id     text not null references public.quick_paths(id) on delete cascade,
  field_key   text not null,               -- 'dates' | 'guests' | 'eventType' ...
  required    boolean not null default false,
  sort_order  int not null default 0,
  is_public   boolean not null default true,
  created_at  timestamptz not null default now(),
  unique (path_id, field_key)
);

-- Optional content tables (structure ready; app may keep them in /data for now).
create table if not exists public.offers (
  id          text primary key,
  cadence     text not null,               -- weekly | monthly | yearly | seasonal
  title       jsonb not null default '{}'::jsonb,
  description jsonb not null default '{}'::jsonb,
  brand_id    text references public.brands(id) on delete set null,
  offer_date  date,
  status      verification_status not null default 'needs_review',
  is_public   boolean not null default true,
  created_at  timestamptz not null default now()
);

create table if not exists public.menus (
  id          uuid primary key default gen_random_uuid(),
  brand_id    text not null references public.brands(id) on delete cascade,
  title       jsonb not null default '{}'::jsonb,
  sections    jsonb not null default '[]'::jsonb,
  menu_url    text,
  flipbook_url text,
  pdf_url     text,
  is_public   boolean not null default true,
  created_at  timestamptz not null default now()
);

-- Brand media assets (logos, gallery images, menus, videos, reels, maps, QR, flipbooks)
create table if not exists public.brand_assets (
  id          text primary key,
  brand_id    text not null references public.brands(id) on delete cascade,
  asset_type  text not null,              -- 'logo' | 'hero_image' | 'gallery_image' | 'menu_pdf' | 'menu_image' | 'video' | 'reel' | 'qr' | 'flipbook' | 'map' | 'other'
  title       jsonb not null default '{}'::jsonb,
  url         text not null default '',
  alt         jsonb,
  status      text not null default 'placeholder', -- 'verified' | 'needs_review' | 'placeholder'
  source      text,
  is_public   boolean not null default true,
  sort_order  int not null default 0,
  updated_at  timestamptz not null default now()
);

-- ── brands: extra columns (idempotent; safe to re-run) ──────────────
-- DECISION: a few typed columns for the new content + one `details` jsonb
-- bucket for the rest (cleaned IG url, inventory summary, etc.). WhatsApp /
-- Instagram + their status stay in `brand_contacts`.
alter table public.brands add column if not exists category_groups text[] not null default '{}';
alter table public.brands add column if not exists capacity jsonb;            -- { value, status }
alter table public.brands add column if not exists followers_label text;       -- e.g. "14,3K"
alter table public.brands add column if not exists followers_status verification_status default 'needs_review';
alter table public.brands add column if not exists details jsonb not null default '{}'::jsonb; -- inventory, cleaned urls, services...

-- brand_contacts already carries whatsapp/instagram + status; expose helpers:
alter table public.brand_contacts add column if not exists is_pending boolean not null default false;

-- ════════════════════════════════════════════════════════════════════
-- LEAD TABLES (private — never publicly readable)
-- ════════════════════════════════════════════════════════════════════

create table if not exists public.inquiries (
  id          uuid primary key default gen_random_uuid(),
  path_id     text not null,
  brand_id    text,
  status      inquiry_status not null default 'new',
  locale      text not null default 'pt-BR',
  name        text not null,
  whatsapp    text not null,
  email       text,
  message     text,
  payload     jsonb not null default '{}'::jsonb,
  consent     boolean not null default false,
  source      text not null default 'website',
  ip_hash     text,                         -- hashed only; never raw IP
  user_agent  text,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create index if not exists inquiries_created_at_idx on public.inquiries (created_at desc);
create index if not exists inquiries_status_idx on public.inquiries (status);

create table if not exists public.inquiry_events (
  id          uuid primary key default gen_random_uuid(),
  inquiry_id  uuid not null references public.inquiries(id) on delete cascade,
  type        text not null,               -- 'created' | 'n8n_dispatched' | 'n8n_failed' | 'status_changed'
  detail      jsonb not null default '{}'::jsonb,
  created_at  timestamptz not null default now()
);

-- Optional, prepared but not required in UI yet.
create table if not exists public.staff_notes (
  id          uuid primary key default gen_random_uuid(),
  inquiry_id  uuid not null references public.inquiries(id) on delete cascade,
  author      text,                         -- TODO_AUTH: link to staff user once auth exists
  note        text not null,
  created_at  timestamptz not null default now()
);

-- ── updated_at trigger for inquiries ────────────────────────────────
create or replace function public.touch_updated_at()
returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end $$;

drop trigger if exists trg_inquiries_touch on public.inquiries;
create trigger trg_inquiries_touch
  before update on public.inquiries
  for each row execute function public.touch_updated_at();

-- ════════════════════════════════════════════════════════════════════
-- ROW LEVEL SECURITY
-- ════════════════════════════════════════════════════════════════════

-- Content tables: public READ for public rows; writes via service role only.
alter table public.quick_paths     enable row level security;
alter table public.brands          enable row level security;
alter table public.brand_contacts  enable row level security;
alter table public.brand_events    enable row level security;
alter table public.journey_fields  enable row level security;
alter table public.offers          enable row level security;
alter table public.menus           enable row level security;
alter table public.brand_assets    enable row level security;

drop policy if exists "public read quick_paths" on public.quick_paths;
create policy "public read quick_paths" on public.quick_paths
  for select using (is_public = true);

drop policy if exists "public read brands" on public.brands;
create policy "public read brands" on public.brands
  for select using (is_public = true);

drop policy if exists "public read brand_contacts" on public.brand_contacts;
create policy "public read brand_contacts" on public.brand_contacts
  for select using (is_public = true);

drop policy if exists "public read brand_events" on public.brand_events;
create policy "public read brand_events" on public.brand_events
  for select using (is_public = true);

drop policy if exists "public read journey_fields" on public.journey_fields;
create policy "public read journey_fields" on public.journey_fields
  for select using (is_public = true);

drop policy if exists "public read offers" on public.offers;
create policy "public read offers" on public.offers
  for select using (is_public = true);

drop policy if exists "public read menus" on public.menus;
create policy "public read menus" on public.menus
  for select using (is_public = true);

drop policy if exists "public read brand_assets" on public.brand_assets;
create policy "public read brand_assets" on public.brand_assets
  for select using (is_public = true);
  -- Writes only via service role (bypasses RLS).

-- Lead tables: RLS on, NO public policies → only the service role
-- (which bypasses RLS) can read/write. The anon/publishable key cannot
-- select, insert, update or delete these rows.
alter table public.inquiries      enable row level security;
alter table public.inquiry_events enable row level security;
alter table public.staff_notes    enable row level security;

-- TODO_AUTH: once staff auth exists, add policies like:
--   create policy "staff read inquiries" on public.inquiries
--     for select using (auth.jwt() ->> 'role' = 'staff');
-- Until then, inquiries remain readable/writable ONLY via the service role.
