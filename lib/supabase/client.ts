'use client';

import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_ANON_KEY, SUPABASE_PUBLIC_READY } from './env';

/**
 * Browser Supabase client — anon/publishable key ONLY, always behind RLS.
 * Returns null when not configured so the app keeps working in local/mock mode.
 */
let _client: SupabaseClient | null = null;

export function getSupabaseBrowser(): SupabaseClient | null {
  if (!SUPABASE_PUBLIC_READY) return null;
  if (_client) return _client;
  _client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: { persistSession: false },
  });
  return _client;
}

export { SUPABASE_PUBLIC_READY };
