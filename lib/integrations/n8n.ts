import 'server-only';
import { createHmac } from 'crypto';
import type { Inquiry } from '@/types/inquiry';

const WEBHOOK_URL = process.env.N8N_WEBHOOK_URL ?? '';
const WEBHOOK_SECRET = process.env.N8N_WEBHOOK_SECRET ?? '';

export const N8N_READY = Boolean(WEBHOOK_URL);

export type N8nResult = { dispatched: boolean; reason?: string };

/**
 * Fire-and-(almost)-forget dispatch to n8n. NEVER blocks the user response on
 * failure, NEVER logs full PII. Sends only a minimal, safe summary.
 */
export async function dispatchInquiryToN8n(
  inquiryId: string,
  inquiry: Inquiry,
): Promise<N8nResult> {
  if (!N8N_READY) return { dispatched: false, reason: 'N8N_NOT_CONFIGURED' };

  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const payload = {
    event: 'inquiry.created',
    inquiryId,
    type: inquiry.type,
    brandSlug: inquiry.brandSlug ?? null,
    locale: inquiry.locale,
    preferredLanguage: inquiry.preferredLanguage || inquiry.locale,
    source: inquiry.source,
    createdAt: inquiry.createdAt,
    safeContact: {
      hasWhatsapp: Boolean(inquiry.whatsapp),
      whatsappLast4: inquiry.whatsapp ? inquiry.whatsapp.slice(-4) : undefined,
      hasEmail: Boolean(inquiry.email),
    },
    summary: {
      nameInitials: inquiry.name ? inquiry.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() : undefined,
      guests: inquiry.guests ?? inquiry.partySize ?? undefined,
      date: inquiry.dates ?? undefined,
      messagePreview: inquiry.message ? inquiry.message.substring(0, 50) + '...' : undefined,
    },
    dashboardUrl: `${SITE_URL}/${inquiry.locale}/staff/${inquiryId}`
  };

  const bodyString = JSON.stringify(payload);
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (WEBHOOK_SECRET) {
    const signature = createHmac('sha256', WEBHOOK_SECRET)
      .update(bodyString)
      .digest('hex');
    headers['x-pipa-signature'] = signature;
  }

  try {
    const res = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers,
      body: bodyString,
      // Don't hang the request if n8n is slow. Max 4 seconds.
      signal: AbortSignal.timeout(4000),
    });
    
    if (!res.ok) {
      // Server-side log only, no PII.
      console.warn(`[n8n] dispatch failed: HTTP ${res.status} for inquiry ${inquiryId}`);
      return { dispatched: false, reason: `HTTP_${res.status}` };
    }
    
    return { dispatched: true };
  } catch (err) {
    console.warn(`[n8n] dispatch error for inquiry ${inquiryId}:`, (err as Error).name);
    return { dispatched: false, reason: 'FETCH_ERROR' };
  }
}
