export const LOCALES = ['en', 'pt-BR', 'es', 'de', 'fr'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/**
 * Localized text. English is the new default fallback.
 * Other locales are optional and fall back automatically.
 */
export type LocalizedText = Partial<Record<Locale, string>> & { [key in Locale]?: string };
