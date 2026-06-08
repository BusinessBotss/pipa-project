import type { Field } from '@/types/common';
import type { Locale, LocalizedText } from '@/types/locale';
import { localize } from '@/lib/i18n';
import { translations } from '@/data/translations';

/**
 * Render a Field<LocalizedText|string> honouring verification status.
 * - verified / needs_review with a value → show the value.
 * - placeholder or no value → show the localized "to be confirmed" fallback.
 * Never presents needs_review/placeholder as a verified fact (no badge here).
 */
export function fieldText(
  field: Field<LocalizedText> | Field<string> | undefined,
  locale: Locale,
  fallbackKey: keyof typeof translations = 'common.toBeConfirmed',
): string {
  const fallback = translations[fallbackKey][locale];
  if (!field || field.value == null) return fallback;
  if (typeof field.value === 'string') return field.value;
  return localize(locale, field.value) || fallback;
}

export function isMissing(field: Field<unknown> | undefined): boolean {
  return !field || field.value == null || field.status === 'placeholder';
}
