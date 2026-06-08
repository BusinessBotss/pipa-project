import type { Brand } from '@/types/brand';
import { localize } from './i18n';
import { DEFAULT_LOCALE } from '@/types/locale';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

/** Group-level Organization schema for the home page. */
export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Pipa Group',
    url: SITE_URL,
    areaServed: 'Praia da Pipa, Tibau do Sul, RN, Brazil',
  };
}

/**
 * Map a brand to its most specific schema.org type.
 * IMPORTANT: never emit aggregateRating from third-party data.
 * openingHours only when hours are verified.
 */
export function brandJsonLd(brand: Brand) {
  const typeMap: Record<Brand['category'], string> = {
    restaurant: 'Restaurant',
    cocktail_bar: 'BarOrPub',
    cafe: 'CafeOrCoffeeShop',
    beach_club: 'LocalBusiness',
    club: 'NightClub',
    stay: 'LodgingBusiness',
    b2b: 'Organization',
  };

  const base: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': typeMap[brand.category],
    name: brand.name,
    description: localize(DEFAULT_LOCALE, brand.description),
    url: `${SITE_URL}/${DEFAULT_LOCALE}/brands/${brand.slug}`,
  };

  if (brand.location.address?.status === 'verified' && brand.location.address.value) {
    base.address = brand.location.address.value;
  }
  if (brand.hours?.status === 'verified' && brand.hours.value) {
    base.openingHours = localize(DEFAULT_LOCALE, brand.hours.value);
  }

  return base;
}
