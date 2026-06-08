import { DEFAULT_LOCALE, type Locale, type LocalizedText, LOCALES } from '@/types/locale';
import { translations, type TranslationKey } from '@/data/translations';

/** Resolve a translation key for a locale, falling back to pt-BR then key. */
export function t(locale: Locale, key: TranslationKey): string {
  const entry = translations[key];
  if (!entry) {
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.warn(`[i18n] Missing translation key: ${key}`);
    }
    return key;
  }
  return entry[locale] ?? entry[DEFAULT_LOCALE] ?? key;
}

/** Resolve a LocalizedText with automatic fallback chain. */
export function localize(locale: Locale, text: LocalizedText | undefined | null): string {
  if (!text) return '';
  return (
    text[locale] ??
    text[DEFAULT_LOCALE] ??
    Object.values(text).find(Boolean) ??
    ''
  );
}

export function makeT(locale: Locale) {
  return (key: TranslationKey) => t(locale, key);
}

export { LOCALES, DEFAULT_LOCALE };
export type { Locale };
