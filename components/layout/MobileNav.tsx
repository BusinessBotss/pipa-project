import Link from 'next/link';
import { pathTabs } from '@/data/navigation';
import { t } from '@/lib/i18n';
import type { Locale } from '@/types/locale';

/** Standard bottom nav for mobile (no dock magnification). */
export function MobileNav({ locale }: { locale: Locale }) {
  return (
    <nav
      aria-label="Bottom navigation"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bg/95 backdrop-blur md:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <ul className="flex items-stretch justify-around">
        {pathTabs.map((tab) => (
          <li key={tab.path} className="flex-1">
            <Link
              href={`/${locale}${tab.href}`}
              className="flex h-14 flex-col items-center justify-center gap-0.5 text-[11px] text-muted hover:text-text"
            >
              {t(locale, tab.labelKey)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
