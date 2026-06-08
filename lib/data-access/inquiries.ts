import 'server-only';
import type { Inquiry } from '@/types/inquiry';
import { getSupabaseAdmin, SUPABASE_WRITE_READY } from '@/lib/supabase/admin';
import { dispatchInquiryToN8n } from '@/lib/integrations/n8n';

export type CreateInquiryResult =
  | { ok: true; persisted: true; id: string }
  | { ok: true; persisted: false; id: string; reason: string };

/**
 * Persist a lead.
 *  - Supabase configured (service role) → insert into `inquiries`,
 *    log an `inquiry_events` row, dispatch to n8n (non-blocking).
 *  - Not configured → safe fallback, never crashes.
 */
export async function createInquiry(
  inquiry: Inquiry,
  meta?: { ipHash?: string; userAgent?: string },
): Promise<CreateInquiryResult> {
  const admin = getSupabaseAdmin();

  if (!admin || !SUPABASE_WRITE_READY) {
    if (process.env.NODE_ENV === 'development') {
      console.info('[inquiry] received (mock, not persisted)', {
        type: inquiry.type,
        brandSlug: inquiry.brandSlug,
        source: inquiry.source,
        locale: inquiry.locale,
      });
    }
    return {
      ok: true,
      persisted: false,
      id: `local_${Date.now().toString(36)}`,
      reason: 'SUPABASE_NOT_CONFIGURED',
    };
  }

  // Build the row. PII goes only into dedicated columns; payload holds the
  // structured journey extras (no raw IP — hash only, see route handler).
  const { whatsapp, name, email, message, ...rest } = inquiry;
  const row = {
    path_id: inquiry.type,
    brand_id: inquiry.brandSlug ?? null,
    status: 'new' as const,
    locale: inquiry.locale,
    name,
    whatsapp,
    email: email ?? null,
    message: message ?? null,
    consent: inquiry.consent,
    source: inquiry.source,
    ip_hash: meta?.ipHash ?? null, // hashed only, never raw IP
    user_agent: meta?.userAgent ?? null,
    payload: {
      dates: rest.dates ?? null,
      guests: rest.guests ?? null,
      preferredTime: rest.preferredTime ?? null,
      partySize: rest.partySize ?? null,
      eventType: rest.eventType ?? null,
      poolOption: rest.poolOption ?? null,
      partnerInfo: rest.partnerInfo ?? null,
      preferredLanguage: rest.preferredLanguage,
    },
  };

  const { data, error } = await admin
    .from('inquiries')
    .insert(row)
    .select('id')
    .single();

  if (error || !data) {
    // Generic server-side log; never leak details to the client.
    console.error('[inquiry] insert failed:', error?.code ?? 'unknown');
    return {
      ok: true,
      persisted: false,
      id: `local_${Date.now().toString(36)}`,
      reason: 'DB_INSERT_FAILED',
    };
  }

  const id = data.id as string;

  // Audit event: created.
  await admin.from('inquiry_events').insert({ inquiry_id: id, type: 'created' });

  // n8n dispatch — never blocks/breaks the user flow.
  const n8n = await dispatchInquiryToN8n(id, inquiry);
  await admin.from('inquiry_events').insert({
    inquiry_id: id,
    type: n8n.dispatched ? 'n8n_dispatched' : 'n8n_failed',
    detail: n8n.reason ? { reason: n8n.reason } : {},
  });

  return { ok: true, persisted: true, id };
}
