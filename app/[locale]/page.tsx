import type { Locale } from '@/types/locale';
import { t, localize } from '@/lib/i18n';
import { getBrands, getBrandsByPath } from '@/lib/data-access/brands';
import { offers } from '@/data/offers';
import { HeroSection } from '@/components/sections/HeroSection';
import { QuickPathSwitcher } from '@/components/layout/QuickPathSwitcher';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { BrandCard } from '@/components/brand/BrandCard';
import { PremiumButton } from '@/components/ui/PremiumButton';
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
            <li key={o.id} className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur p-6 transition-all hover:bg-white/[0.04]">
              <h3 className="text-base text-sand">{localize(locale, o.title)}</h3>
              <p className="mt-2 text-sm text-muted/80">{localize(locale, o.description)}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="container-content py-16">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-10 text-center shadow-2xl backdrop-blur">
          <div className="absolute inset-0 bg-gold/5 blur-3xl rounded-full" />
          <h2 className="relative text-2xl sm:text-3xl text-sand">{t(locale, 'section.contact')}</h2>
          <p className="relative mx-auto mt-3 max-w-prose text-sm text-muted">
            {t(locale, 'footer.note')}
          </p>
          <div className="relative mt-8 flex justify-center">
            <PremiumButton href={`/${locale}/contact`}>
              {t(locale, 'cta.startBooking')}
            </PremiumButton>
          </div>
        </div>
      </section>
    </>
  );
}
