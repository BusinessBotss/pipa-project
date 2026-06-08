'use client';

import { useState } from 'react';
import type { Locale } from '@/types/locale';
import type { AudiencePath } from '@/types/brand';
import { t } from '@/lib/i18n';
import { Checkbox } from '@/components/ui/Checkbox';
import { HONEYPOT_FIELD, isValidEmail } from '@/lib/security';
import { isValidWhatsapp, buildWhatsappLink } from '@/lib/whatsapp';

type Props = {
  locale: Locale;
  type: AudiencePath;
  brandSlug?: string;
  brandName?: string;
  brandWhatsapp?: string;
  source: string;
};

type Errors = Record<string, string>;

export function InquiryForm({
  locale,
  type,
  brandSlug,
  brandName,
  brandWhatsapp,
  source,
}: Props) {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [waLink, setWaLink] = useState('');
  const [consent, setConsent] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const get = (k: string) => (fd.get(k)?.toString() ?? '').trim();

    const next: Errors = {};
    const name = get('name');
    const whatsapp = get('whatsapp');
    const email = get('email');

    if (name.length < 2) next.name = t(locale, 'form.required');
    if (!isValidWhatsapp(whatsapp)) next.whatsapp = t(locale, 'form.invalidPhone');
    if (email && !isValidEmail(email)) next.email = t(locale, 'form.invalidEmail');
    if (!consent) next.consent = t(locale, 'form.consentRequired');

    setErrors(next);
    if (Object.keys(next).length > 0) {
      const first = form.querySelector<HTMLElement>('[aria-invalid="true"]');
      first?.focus();
      return;
    }

    const payload = {
      type,
      brandSlug,
      name,
      whatsapp,
      email: email || undefined,
      dates: get('dates') || undefined,
      guests: get('guests') ? Number(get('guests')) : undefined,
      preferredTime: get('preferredTime') || undefined,
      eventType: get('eventType') || undefined,
      message: get('message') || undefined,
      consent: true as const,
      preferredLanguage: locale,
      source,
      locale,
      [HONEYPOT_FIELD]: get(HONEYPOT_FIELD),
    };

    setSubmitting(true);
    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('failed');
      // WhatsApp fallback link (user-initiated action only).
      const msg = [
        `Olá Pipa, sobre ${brandName || 'o grupo Pipa'}:`,
        `Nome: ${name}`,
        payload.dates ? `Datas: ${payload.dates}` : '',
        payload.guests ? `Nº de pessoas: ${payload.guests}` : '',
        `Origem: ${source}`,
      ]
        .filter(Boolean)
        .join('\n');
      setWaLink(buildWhatsappLink({ number: brandWhatsapp, message: msg }));
      setDone(true);
    } catch {
      setErrors({ form: t(locale, 'form.error') });
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="rounded-2xl border border-line-strong bg-card p-6">
        <h3 className="text-lg">{t(locale, 'success.title')}</h3>
        <p className="mt-2 text-sm text-muted">{t(locale, 'success.disclaimer')}</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-whatsapp px-5 py-2 text-sm font-medium text-black"
          >
            {t(locale, 'success.whatsapp')}
          </a>
          <a href={`/${locale}/experiences`} className="rounded-full border border-line px-5 py-2 text-sm">
            {t(locale, 'success.explore')}
          </a>
        </div>
        {/* TODO_BACKEND: this enquiry was validated but not yet persisted (no Supabase). */}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4">
      {errors.form && (
        <p role="alert" className="rounded bg-danger/10 p-3 text-sm text-danger">
          {errors.form}
        </p>
      )}

      <Labeled id="name" label={t(locale, 'form.name')} error={errors.name}>
        <input id="name" name="name" required aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-err' : undefined} className={inputCls} />
      </Labeled>

      <Labeled id="whatsapp" label={t(locale, 'form.whatsapp')} error={errors.whatsapp}>
        <input id="whatsapp" name="whatsapp" inputMode="tel" required aria-invalid={!!errors.whatsapp}
          aria-describedby={errors.whatsapp ? 'whatsapp-err' : undefined} placeholder="+55" className={inputCls} />
      </Labeled>

      <Labeled id="email" label={t(locale, 'form.email')} error={errors.email}>
        <input id="email" name="email" type="email" aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-err' : undefined} className={inputCls} />
      </Labeled>

      {(type === 'stay' || type === 'pool' || type === 'events') && (
        <div className="grid gap-4 sm:grid-cols-2">
          <Labeled id="dates" label={t(locale, 'form.dates')}>
            <input id="dates" name="dates" className={inputCls} />
          </Labeled>
          <Labeled id="guests" label={t(locale, 'form.guests')}>
            <input id="guests" name="guests" type="number" min={1} max={99} className={inputCls} />
          </Labeled>
        </div>
      )}

      {type === 'dine' && (
        <div className="grid gap-4 sm:grid-cols-2">
          <Labeled id="preferredTime" label={t(locale, 'form.time')}>
            <input id="preferredTime" name="preferredTime" className={inputCls} />
          </Labeled>
          <Labeled id="guests" label={t(locale, 'form.guests')}>
            <input id="guests" name="guests" type="number" min={1} max={99} className={inputCls} />
          </Labeled>
        </div>
      )}

      {type === 'events' && (
        <Labeled id="eventType" label={t(locale, 'form.eventType')}>
          <input id="eventType" name="eventType" className={inputCls} />
        </Labeled>
      )}

      {type === 'partners' && (
        <Labeled id="message" label={t(locale, 'form.serviceArea')}>
          <input id="message" name="message" className={inputCls} />
        </Labeled>
      )}

      {type !== 'partners' && (
        <Labeled id="message" label={t(locale, 'form.message')}>
          <textarea id="message" name="message" rows={3} className={inputCls} />
        </Labeled>
      )}

      {/* Honeypot — visually hidden, not aria-hidden so bots fill it */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor={HONEYPOT_FIELD}>Company website</label>
        <input id={HONEYPOT_FIELD} name={HONEYPOT_FIELD} tabIndex={-1} autoComplete="off" />
      </div>

      <Checkbox id="consent" label={t(locale, 'form.consent')} checked={consent}
        onChange={setConsent} required />
      {errors.consent && (
        <p id="consent-err" role="alert" className="text-sm text-danger">{errors.consent}</p>
      )}

      <button type="submit" disabled={submitting}
        className="rounded-full bg-gold px-6 py-3 text-sm font-medium text-black hover:brightness-110 disabled:opacity-50">
        {submitting ? '…' : t(locale, 'form.submit')}
      </button>
    </form>
  );
}

const inputCls =
  'w-full rounded-lg border border-line-strong bg-card px-3 py-2 text-sm text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold';

function Labeled({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-1.5">
      <label htmlFor={id} className="text-sm text-muted">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-err`} role="alert" className="text-xs text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
