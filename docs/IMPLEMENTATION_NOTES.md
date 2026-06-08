# Pipa Group — Implementation Notes

Multi-brand conversion platform for **Pipa Group** (Praia da Pipa, Tibau do Sul, RN, Brazil).
Built from the 5 prompts in `PROMPTS_PIPA.md`, aligned with `CONTEXT/deep-research-report2.md`.

## 1. Architecture

- **Next.js 14 App Router** + **TypeScript (strict)** + **Tailwind** + **Framer Motion** + **zod**.
- Locale routing via `middleware.ts` → `/[locale]/…` (pt-BR | en | es), default & fallback `pt-BR`.
- Server components by default; client only where interactive (`'use client'`).
- Data lives in `/data` behind a **repository layer** (`lib/data-access/*`) → swappable to Supabase without touching pages.

## 2. Conversion model (report2)

- **Quick-path switcher** (`components/layout/QuickPathSwitcher.tsx`): Stay · Dine · Pool · Events · Partners, contextual CTA, persisted (non-PII) in localStorage.
- Each path has a journey reachable in **≤3 interactions** (path/brand → short form → submit / WhatsApp).
- The concierge is **not** the spine; it would live as an optional, skippable enrichment inside Events (not yet built — see TODO).

## 3. Components used (Component Canvas as visual system only)

Built & accessible: `BlurText`, `MagneticButton`, `GradualBlur`, `GlowCard`, `Dialog`, `Checkbox`, `AnimatedToggle`, plus `BrandCard`, `VerificationBadge`.
All honour `prefers-reduced-motion` via `lib/useReducedMotion.ts` + a global CSS kill-switch in `globals.css`. Magnetic/tilt also disabled on touch.
Not yet wired (available to add): InteractiveImageSelector, InfiniteSlider, TiltedCard, Dock, AnimatedStepper, AppleInvites, ExposureSlider, ImageMetadataPreview, Stepper, RevealText, ScrollRevealParagraph.

## 4. Data veracity model (`types/common.ts`)

`Field<T> = { value, status, source? }`, status ∈ `verified | needs_review | placeholder`.
- `fieldText()` renders the value or the localized **“A confirmar / To be confirmed”** fallback.
- `VerificationBadge` shows **only** when `verificationStatus === 'verified'`.
- **No `aggregateRating`.** Reviews are text excerpts with a cited source (`reviewExcerpts`).

### Current brand statuses (`data/brands.ts`)

| Brand | Path / groups | Card status | Notes |
|---|---|---|---|
| Umi Fun Kitchen | dine, events | verified | hours 08–00 (needs_review), cap 70 (needs_review), WA pending-reconfirm |
| TĀO Pipa | dine | verified | hours/price needs_review; WA pending-reconfirm |
| Makai Pool Club | pool, beach, events | needs_review | WA + Maps **verified**; hours/cap 300 needs_review |
| Makai The Club | nightlife, events | needs_review | NEW; WA verified; hours/cap 400 needs_review |
| Nami Madeiro | dine, pool, events | needs_review | WA/email placeholder |
| Casa Palmeira Pipa | stay | needs_review | addr + WA **verified**, 5 quartos/2 apts verified; rest placeholder |
| Recanto de Ibiza | stay | needs_review | addr + WA + email **verified**, 5 quartos/4 apts; rest placeholder |
| Novo Restaurante Bar 2026 | dine, coming_soon | placeholder | NEW; all TODO_CONTENT |
| PIPA Ice Supply | partners | placeholder | TODO_CONTENT |

Contact routing: live WhatsApp/Instagram CTAs resolve through
`lib/config/contact-routing.ts` via each brand's `contactKey`. Numbers marked
`PENDING` (umi, tao, nami, newRestaurant, ice) render a **"Consultar"** CTA — no
direct `wa.me` link. Known-but-unconfirmed numbers are preserved as source notes
in `data/brands.ts` (status `needs_review`) so they can be promoted later.

## 5. How to add a brand

Add an entry to `data/brands.ts`. Use `field(value, status, source)` for any sensitive field and `placeholder()` for unknown ones. Set the overall `verificationStatus`. Routes (`/brands/[slug]`, `/book/[slug]`, sitemap) are generated automatically.

## 6. How to add translations

Add keys to `data/translations.ts` (pt-BR required). Use `t(locale, key)` in components and `localize(locale, localizedText)` for brand content. Missing keys warn in dev and fall back to pt-BR.

## 7. Leads → Supabase / n8n (CONNECTED)

Full setup guide: **`docs/SUPABASE_SETUP.md`**.

- **SQL**: `supabase/schema.sql` (tables + enums + RLS + `updated_at` trigger) and `supabase/seed.sql` (5 paths, 7 brands, contacts, journey fields — veracity-preserving).
- **Clients**: `lib/supabase/env.ts` (env resolution, supports anon **and** publishable key names), `client.ts` (browser, anon, RLS), `server.ts` (server reads, anon, RLS), `admin.ts` (service role, `server-only`, RLS bypass — lead writes).
- **Endpoint** `app/api/inquiries/route.ts`: zod + honeypot + consent + IP **hash** (daily salt, never raw) + UA; returns `{ok,persisted,reason?}`.
- **Repository** `lib/data-access/inquiries.ts`: inserts into `inquiries`, writes `inquiry_events` (`created` → `n8n_dispatched`/`n8n_failed`), dispatches n8n (non-blocking).
- **n8n** `lib/integrations/n8n.ts`: optional webhook, optional `X-Pipa-Signature`, 4s timeout, **safe summary only** (no name/phone/email/message), never breaks the response.
- **Fallback**: with no service role key → `{ok:true, persisted:false, reason:"SUPABASE_NOT_CONFIGURED"}`. App never crashes.
- **Tables** — public: `quick_paths, brands, brand_contacts, brand_events, journey_fields, offers, menus`; private (service role only): `inquiries, inquiry_events, staff_notes`.
- **Pending**: service role key (to persist), TODO_AUTH staff policies + dashboard UI, TODO_SECURITY rate limiting.

## 8. Security (done / pending)

Done: no secrets in client, zod server validation, honeypot, consent, no PII in localStorage (`SAFE_STORAGE_KEYS`), `rel="noopener noreferrer"`, WhatsApp via `encodeURIComponent` + validated config, no `dangerouslySetInnerHTML` on user input (only on our own JSON-LD).
Pending: **TODO_SECURITY** real rate limiting; Supabase **RLS** policies per table; **TODO_LEGAL** privacy/terms (LGPD) review.

## 9. Accessibility / reduced motion

Visible focus, ≥44px targets, labelled inputs (labels above field), `role="tablist"` switcher, Dialog focus trap + return + Escape, global reduced-motion kill-switch. Pending: full keyboard QA pass + Lighthouse a11y audit.

## 10. SEO

Metadata per page/locale, Organization JSON-LD (home), per-brand JSON-LD with the most specific type (Restaurant/Lodging/LocalBusiness/Organization), `openingHours` only when verified, sitemap + robots. No FAQ rich-result dependency.

## 11. Deployment checklist

1. `cp .env.example .env.local` and fill values.
2. `npm run lint` · `npm run typecheck` · `npm run build`.
3. Replace Unsplash placeholder images with owned media; update `next.config.mjs` `remotePatterns`.
4. Connect Supabase + RLS, wire `lib/data-access/inquiries.ts`, set n8n webhook.
5. Legal review of `/privacy` and `/terms` (LGPD).
