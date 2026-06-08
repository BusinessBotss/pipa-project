import type { Locale } from '@/types/locale';
import { t, localize } from '@/lib/i18n';
import { getBrands, getBrandsByPath } from '@/lib/data-access/brands';
import { offers } from '@/data/offers';
import { HeroSection } from '@/components/sections/HeroSection';
import { QuickPathSwitcher } from '@/components/layout/QuickPathSwitcher';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { BrandCard } from '@/components/brand/BrandCard';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { organizationJsonLd } from '@/lib/schema';

export default function HomePage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const featured = getBrands().filter(
    (b) => b.audiencePath !== 'partners' && !b.categoryGroups.includes('coming_soon'),
  );
  const stay = getBrandsByPath('stay');
  const dine = getBrandsByPath('dine');
  const pool = getBrandsByPath('pool');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
      />
      <HeroSection locale={locale} />
      <QuickPathSwitcher locale={locale} />

      <section className="container-content py-20">
        <SectionHeading title={t(locale, 'section.featured')} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((b) => (
            <BrandCard key={b.id} brand={b} locale={locale} />
          ))}
        </div>
      </section>

      <section className="container-content py-12">
        <SectionHeading title={t(locale, 'section.stay')} />
        <div className="grid gap-6 sm:grid-cols-2">
          {stay.map((b) => (
            <BrandCard key={b.id} brand={b} locale={locale} />
          ))}
        </div>
      </section>

      <section className="container-content py-12">
        <SectionHeading title={t(locale, 'section.dine')} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dine.map((b) => (
            <BrandCard key={b.id} brand={b} locale={locale} />
          ))}
        </div>
      </section>

      <section className="container-content py-12">
        <SectionHeading title={t(locale, 'section.pool')} />
        <div className="grid gap-6 sm:grid-cols-2">
          {pool.map((b) => (
            <BrandCard key={b.id} brand={b} locale={locale} />
          ))}
        </div>
      </section>

      <section className="container-content py-12">
        <SectionHeading title={t(locale, 'section.offers')} />
        <ul className="grid gap-4 sm:grid-cols-3">
          {offers.map((o) => (
            <li key={o.id} className="rounded-2xl border border-line bg-card p-5">
              <h3 className="text-base">{localize(locale, o.title)}</h3>
              <p className="mt-2 text-sm text-muted">{localize(locale, o.description)}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="container-content py-16">
        <div className="rounded-3xl border border-line-strong bg-bg-soft p-10 text-center">
          <h2 className="text-2xl sm:text-3xl">{t(locale, 'section.contact')}</h2>
          <p className="mx-auto mt-3 max-w-prose text-sm text-muted">
            {t(locale, 'footer.note')}
          </p>
          <div className="mt-6 flex justify-center">
            <MagneticButton href={`/${locale}/contact`}>
              {t(locale, 'cta.startBooking')}
            </MagneticButton>
          </div>
        </div>
      </section>
    </>
  );
}
