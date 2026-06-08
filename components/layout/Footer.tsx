import Link from 'next/link';
import { t } from '@/lib/i18n';
import type { Locale } from '@/types/locale';
import { mainNav } from '@/data/navigation';

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="mt-24 border-t border-line bg-bg-soft">
      <div className="container-content grid gap-8 py-12 sm:grid-cols-3">
        <div>
          <p className="font-serif text-lg">Pipa<span className="text-gold">.</span></p>
          <p className="mt-2 max-w-xs text-sm text-muted">{t(locale, 'footer.note')}</p>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-2">
          {mainNav.map((item) => (
            <Link key={item.href} href={`/${locale}${item.href}`} className="text-sm text-muted hover:text-text">
              {t(locale, item.key)}
            </Link>
          ))}
          <Link href={`/${locale}/partners`} className="text-sm text-muted hover:text-text">
            {t(locale, 'nav.partners')}
          </Link>
        </nav>

        <nav aria-label="Legal" className="flex flex-col gap-2">
          <Link href={`/${locale}/faq`} className="text-sm text-muted hover:text-text">
            {t(locale, 'footer.faq')}
          </Link>
          <Link href={`/${locale}/privacy`} className="text-sm text-muted hover:text-text">
            {t(locale, 'footer.privacy')}
          </Link>
          <Link href={`/${locale}/terms`} className="text-sm text-muted hover:text-text">
            {t(locale, 'footer.terms')}
          </Link>
        </nav>
      </div>
      <div className="container-content border-t border-line py-4 text-xs text-muted">
        © {new Date().getFullYear()} Pipa Group · Praia da Pipa, Tibau do Sul, RN
      </div>
    </footer>
  );
}
