import 'server-only';
import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { SUPABASE_URL } from './env';

/**
 * Admin Supabase client — SERVICE ROLE key, bypasses RLS. SERVER-ONLY.
 *
 * The service-role key is read ONLY in this file, and `import 'server-only'`
 * makes the build fail if this module is ever imported into client code — so
 * the key can never reach the browser bundle. Used to insert leads
 * (`inquiries` / `inquiry_events`), which have no public RLS policy.
 */
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY ?? '';

/** Lead persistence possible only with URL + service role (RLS bypass). */
export const SUPABASE_WRITE_READY = Boolean(SUPABASE_URL && SERVICE_ROLE_KEY);

let _admin: SupabaseClient | null = null;

export function getSupabaseAdmin(): SupabaseClient | null {
  if (!SUPABASE_WRITE_READY) return null;
  if (_admin) return _admin;
  _admin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return _admin;
}
