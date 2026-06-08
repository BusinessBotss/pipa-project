export const LOCALES = ['pt-BR', 'en', 'es'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'pt-BR';

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/**
 * Localized text. pt-BR is always required (primary + fallback).
 * Other locales are optional and fall back automatically.
 */
export type LocalizedText = Partial<Record<Locale, string>> & { 'pt-BR': string };
