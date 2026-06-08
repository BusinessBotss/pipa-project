import type { AudiencePath } from '@/types/brand';
import type { TranslationKey } from './translations';

export type NavItem = { key: TranslationKey; href: string };

export const mainNav: NavItem[] = [
  { key: 'nav.experiences', href: '/experiences' },
  { key: 'nav.stay', href: '/stay' },
  { key: 'nav.dine', href: '/dine' },
  { key: 'nav.pool', href: '/pool' },
  { key: 'nav.events', href: '/events' },
  { key: 'nav.contact', href: '/contact' },
];

export const pathTabs: {
  path: AudiencePath;
  labelKey: TranslationKey;
  ctaKey: TranslationKey;
  href: string;
}[] = [
  { path: 'stay', labelKey: 'path.stay', ctaKey: 'cta.book', href: '/stay' },
  { path: 'dine', labelKey: 'path.dine', ctaKey: 'cta.reserve', href: '/dine' },
  { path: 'pool', labelKey: 'path.pool', ctaKey: 'cta.explore', href: '/pool' },
  { path: 'events', labelKey: 'path.events', ctaKey: 'cta.enquire', href: '/events' },
  { path: 'partners', labelKey: 'path.partners', ctaKey: 'cta.quote', href: '/partners' },
];
