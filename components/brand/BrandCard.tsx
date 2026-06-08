import Image from 'next/image';
import Link from 'next/link';
import type { Brand } from '@/types/brand';
import type { Locale } from '@/types/locale';
import { localize, t } from '@/lib/i18n';
import { LuxuryCard } from '@/components/ui/LuxuryCard';
import { VerificationBadge } from './VerificationBadge';
import { fieldText } from './fieldText';
import { PremiumButton } from '@/components/ui/PremiumButton';
import type { TranslationKey } from '@/data/translations';
import { getBrandHeroAsset } from '@/data/brand-assets';
import { isSafePublicUrl } from '@/lib/security/url';

const pathHue: Record<Brand['audiencePath'], number> = {
  stay: 28,
  dine: 16,
  pool: 190,
  events: 280,
  partners: 210,
};

const pathLabelKey: Record<Brand['audiencePath'], TranslationKey> = {
  stay: 'path.stay',
  dine: 'path.dine',
  pool: 'path.pool',
  events: 'path.events',
  partners: 'path.partners',
};

export function BrandCard({ brand, locale }: { brand: Brand; locale: Locale }) {
  const href = `/${locale}/brands/${brand.slug}`;
  const heroAsset = getBrandHeroAsset(brand.id);
  const heroSrc = heroAsset && isSafePublicUrl(heroAsset.url) ? heroAsset.url : brand.heroImage;

  return (
    <LuxuryCard interactive className="flex flex-col h-full group">
      <Link href={href} className="relative block aspect-[4/3] overflow-hidden">
        <Image
          src={heroSrc}
          alt={localize(locale, brand.subtitle)}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
        <span className="absolute left-3 top-3 rounded-full bg-black/60 px-2 py-0.5 text-xs text-sand border border-white/10 backdrop-blur-md">
          {t(locale, pathLabelKey[brand.audiencePath])}
        </span>
        {brand.categoryGroups.includes('coming_soon') && (
          <span className="absolute right-3 top-3 rounded-full bg-gold-soft px-2 py-0.5 text-xs text-gold">
            {t(locale, 'common.comingSoon')}
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-lg">{brand.name}</h3>
          <VerificationBadge status={brand.verificationStatus} locale={locale} />
        </div>
        <p className="text-sm text-muted">{localize(locale, brand.subtitle)}</p>
        <p className="text-xs text-muted">
          {brand.location.area} · {fieldText(brand.priceLabel, locale)}
        </p>
        <div className="mt-auto flex items-center gap-3 pt-4">
          <PremiumButton href={href} className="px-4 py-2 text-xs">
            {t(locale, brand.primaryCta.labelKey as TranslationKey)}
          </PremiumButton>
          <Link href={href} className="text-sm text-sand underline-offset-4 hover:text-gold hover:underline transition-colors">
            {t(locale, 'common.viewDetails')}
          </Link>
        </div>
      </div>
    </LuxuryCard>
  );
}
