import type { AudiencePath } from '@/types/brand';
import type { TranslationKey } from './translations';

export type NavItem = { key: TranslationKey; href: string };

// Landing-page navigation: in-page anchors + contact.
export const mainNav: NavItem[] = [
  { key: 'nav.beaches', href: '#beaches' },
  { key: 'nav.activities', href: '#activities' },
  { key: 'nav.gallery', href: '#gallery' },
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
