import type { Locale } from '@/types/locale';

const INTL_LOCALE: Record<Locale, string> = {
  'pt-BR': 'pt-BR',
  en: 'en-US',
  es: 'es-ES',
};

/** Format a BRL amount for the given app locale. */
export function formatBRL(amount: number, locale: Locale): string {
  return new Intl.NumberFormat(INTL_LOCALE[locale], {
    style: 'currency',
    currency: 'BRL',
  }).format(amount);
}

export function formatDate(iso: string, locale: Locale): string {
  return new Intl.DateTimeFormat(INTL_LOCALE[locale], {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(iso));
}

export function priceLevelLabel(level: 1 | 2 | 3 | 4): string {
  return '$'.repeat(level);
}
