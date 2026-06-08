import type { Locale } from '@/types/locale';
import { t } from '@/lib/i18n';
import { getBrandsByGroup } from '@/lib/data-access/brands';
import { BrandCard } from '@/components/brand/BrandCard';
import { SectionHeading } from '@/components/sections/SectionHeading';
import type { CategoryGroup } from '@/types/brand';
import type { TranslationKey } from '@/data/translations';

const groups: { group: CategoryGroup; key: TranslationKey }[] = [
  { group: 'stay', key: 'section.stay' },
  { group: 'dine', key: 'section.dine' },
  { group: 'beach', key: 'section.beach' },
  { group: 'pool', key: 'section.pool' },
  { group: 'nightlife', key: 'section.nightlife' },
  { group: 'events', key: 'section.events' },
  { group: 'coming_soon', key: 'section.comingSoon' },
  { group: 'partners', key: 'nav.partners' },
];

export default function ExperiencesPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  return (
    <div className="container-content py-16">
      <h1 className="mb-10 text-3xl sm:text-4xl">{t(locale, 'nav.experiences')}</h1>
      {groups.map((g) => {
        const brands = getBrandsByGroup(g.group);
        if (brands.length === 0) return null;
        return (
          <section key={g.group} className="mb-14">
            <SectionHeading title={t(locale, g.key)} />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {brands.map((b) => (
                <BrandCard key={b.id} brand={b} locale={locale} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
