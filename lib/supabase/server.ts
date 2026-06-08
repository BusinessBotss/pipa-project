import 'server-only';
import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_ANON_KEY, SUPABASE_PUBLIC_READY } from './env';

/**
 * Server-side client using the ANON key — for public reads (brands, offers…)
 * that are protected by RLS. Returns null when not configured (mock mode).
 */
export function getSupabaseServer(): SupabaseClient | null {
  if (!SUPABASE_PUBLIC_READY) return null;
  return createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: { persistSession: false },
  });
}

export { SUPABASE_PUBLIC_READY };
