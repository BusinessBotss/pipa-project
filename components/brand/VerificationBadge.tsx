import type { VerificationStatus } from '@/types/common';
import type { Locale } from '@/types/locale';
import { t } from '@/lib/i18n';

/** Shows the "Verified" badge ONLY when status === 'verified'. */
export function VerificationBadge({
  status,
  locale,
}: {
  status: VerificationStatus;
  locale: Locale;
}) {
  if (status !== 'verified') return null;
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-gold/40 bg-gold-soft px-2 py-0.5 text-xs text-gold">
      ✓ {t(locale, 'common.verified')}
    </span>
  );
}
