import { NextResponse } from 'next/server';
import { createHash } from 'node:crypto';
import { inquirySchema } from '@/lib/validation';
import { isLikelySpam } from '@/lib/security';
import { createInquiry } from '@/lib/data-access/inquiries';
import type { Inquiry } from '@/types/inquiry';

export const runtime = 'nodejs';

// TODO_SECURITY: add real rate limiting (e.g. Upstash) before production.

/** Hash the IP with a daily salt — we never store the raw IP. */
function hashIp(ip: string | null): string | undefined {
  if (!ip) return undefined;
  const salt = new Date().toISOString().slice(0, 10); // rotates daily
  return createHash('sha256').update(`${salt}:${ip}`).digest('hex').slice(0, 32);
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'bad_request' }, { status: 400 });
  }

  // Honeypot — silently accept but drop.
  if (isLikelySpam(body as Record<string, unknown>)) {
    return NextResponse.json({ ok: true, persisted: false, id: 'dropped', reason: 'HONEYPOT' });
  }

  const parsed = inquirySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: 'validation', issues: parsed.error.flatten() },
      { status: 422 },
    );
  }

  const data = parsed.data;
  const inquiry: Inquiry = {
    type: data.type,
    brandSlug: data.brandSlug,
    name: data.name,
    whatsapp: data.whatsapp,
    email: data.email || undefined,
    dates: data.dates,
    guests: data.guests,
    preferredTime: data.preferredTime,
    partySize: data.partySize,
    eventType: data.eventType,
    poolOption: data.poolOption,
    partnerInfo: data.partnerInfo,
    message: data.message,
    consent: data.consent,
    preferredLanguage: data.preferredLanguage,
    source: data.source,
    locale: data.locale,
    createdAt: new Date().toISOString(),
  };

  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    null;

  try {
    const result = await createInquiry(inquiry, {
      ipHash: hashIp(ip),
      userAgent: request.headers.get('user-agent')?.slice(0, 255) ?? undefined,
    });
    return NextResponse.json(result);
  } catch {
    // Generic error — never leak internals or PII.
    return NextResponse.json({ ok: false, error: 'server_error' }, { status: 500 });
  }
}
