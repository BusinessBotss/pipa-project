import type { Locale } from '@/types/locale';
import type { AudiencePath } from '@/types/brand';
import { t } from '@/lib/i18n';
import { getBrandsByPath } from '@/lib/data-access/brands';
import { BrandCard } from '@/components/brand/BrandCard';
import { InquiryForm } from '@/components/forms/InquiryForm';
import type { TranslationKey } from '@/data/translations';

const titleKey: Record<AudiencePath, TranslationKey> = {
  stay: 'section.stay',
  dine: 'section.dine',
  pool: 'section.pool',
  events: 'section.events',
  partners: 'nav.partners',
};

/** Reusable audience-path hub. Events & Partners show an inline enquiry form. */
export function PathHub({ locale, path }: { locale: Locale; path: AudiencePath }) {
  const brands = getBrandsByPath(path);
  const showForm = path === 'events' || path === 'partners';

  return (
    <div className="container-content py-16">
      <h1 className="mb-3 text-3xl sm:text-4xl">{t(locale, titleKey[path])}</h1>
      <p className="mb-10 max-w-prose text-sm text-muted">{t(locale, 'success.disclaimer')}</p>

      {brands.length > 0 && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {brands.map((b) => (
            <BrandCard key={b.id} brand={b} locale={locale} />
          ))}
        </div>
      )}

      {showForm && (
        <div className="mx-auto mt-14 max-w-prose">
          <h2 className="mb-6 text-2xl">{t(locale, path === 'events' ? 'cta.enquire' : 'cta.quote')}</h2>
          <InquiryForm locale={locale} type={path} source={`hub_${path}`} />
        </div>
      )}
    </div>
  );
}
