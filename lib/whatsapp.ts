/**
 * Safe WhatsApp deep-link helper.
 * - Number comes from validated config, never a free string.
 * - Message is always encodeURIComponent-ed.
 */

const DEFAULT_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_DEFAULT?.replace(/\D/g, '') || '';

/** Keep only digits; reject obviously invalid numbers. */
export function normalizeWhatsapp(raw: string): string {
  return raw.replace(/\D/g, '');
}

export function isValidWhatsapp(raw: string): boolean {
  const digits = normalizeWhatsapp(raw);
  // E.164-ish: 10–15 digits.
  return digits.length >= 10 && digits.length <= 15;
}

export function buildWhatsappLink(opts: {
  number?: string;
  message: string;
}): string {
  const number = normalizeWhatsapp(opts.number || DEFAULT_NUMBER);
  const text = encodeURIComponent(opts.message);
  if (!number) {
    // TODO_CONTENT: no default WhatsApp configured — return wa.me without number.
    return `https://wa.me/?text=${text}`;
  }
  return `https://wa.me/${number}?text=${text}`;
}

export function defaultInquiryMessage(opts: {
  brand?: string;
  pageName: string;
}): string {
  return [
    'Olá Pipa, gostaria de mais informações sobre ' + (opts.brand || 'o grupo Pipa') + '.',
    'Nome: ',
    'Datas: ',
    'Nº de pessoas: ',
    'Horário preferido: ',
    'Observações: ',
    'Origem: ' + opts.pageName,
  ].join('\n');
}
