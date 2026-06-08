import Link from 'next/link';
import { mainNav } from '@/data/navigation';
import { t } from '@/lib/i18n';
import type { Locale } from '@/types/locale';
import { LocaleSwitcher } from './LocaleSwitcher';

export function Header({ locale }: { locale: Locale }) {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/80 backdrop-blur">
      <div className="container-content flex h-16 items-center justify-between gap-4">
        <Link href={`/${locale}`} className="font-serif text-xl tracking-tight text-text">
          Pipa<span className="text-gold">.</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={`/${locale}${item.href}`}
              className="text-sm text-muted transition hover:text-text"
            >
              {t(locale, item.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LocaleSwitcher locale={locale} />
          <Link
            href={`/${locale}/contact`}
            className="hidden rounded-full bg-gold px-4 py-2 text-sm font-medium text-black hover:brightness-110 sm:inline-flex"
          >
            {t(locale, 'cta.startBooking')}
          </Link>
        </div>
      </div>
    </header>
  );
}
