/**
 * PUBLIC Supabase env only. This module is safe to import from client code:
 * it never references the service-role key.
 * Supports both NEXT_PUBLIC_SUPABASE_ANON_KEY and the newer publishable name.
 */
export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';

export const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
  '';

/** Public reads (brands etc.) possible when URL + anon key exist. */
export const SUPABASE_PUBLIC_READY = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

// NOTE: the service-role key is intentionally NOT read here. It lives only in
// lib/supabase/admin.ts (guarded by `import 'server-only'`).
