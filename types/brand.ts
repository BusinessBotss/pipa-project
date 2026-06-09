import type { Field, VerificationStatus } from './common';
import type { LocalizedText } from './locale';
import type { ContactKey } from '@/lib/config/contact-routing';

export type AudiencePath = 'stay' | 'dine' | 'pool' | 'events' | 'partners';

/**
 * Display groups a brand belongs to. A brand can appear in several (e.g. Makai
 * Pool Club → pool + events). Drives the experiences/home listings.
 */
export type CategoryGroup =
  | 'stay'
  | 'dine'
  | 'pool'
  | 'beach'
  | 'events'
  | 'nightlife'
  | 'coming_soon'
  | 'partners';

export type BrandCategory =
  | 'restaurant'
  | 'cocktail_bar'
  | 'beach_club'
  | 'club'
  | 'cafe'
  | 'stay'
  | 'b2b';

export type CtaAction =
  | 'book' // stay
  | 'reserve' // dine
  | 'explore' // pool
  | 'enquire' // events
  | 'quote' // partners
  | 'menu';

export type BrandImage = {
  src: string;
  alt: LocalizedText;
  meta?: Record<string, string>;
};

export type ReviewExcerpt = {
  // TEXT only, with a clearly cited source. Never a numeric rating injected as data.
  text: LocalizedText;
  source: string;
};

export type BrandEvent = {
  date: string; // ISO. TODO_CONTENT where approximate.
  title: LocalizedText;
};

export type Brand = {
  id: string;
  slug: string;
  name: string;
  audiencePath: AudiencePath;
  categoryGroups: CategoryGroup[];
  /**
   * Whether this is a real, built, public-ready brand. `false` = concept not
   * built yet (kept in internal data, hidden from all public listings/routes).
   * Undefined is treated as public.
   */
  publicReady?: boolean;
  category: BrandCategory;
  /** Key into lib/config/contact-routing (WhatsApp/Instagram). */
  contactKey?: ContactKey;
  subtitle: LocalizedText; // short positioning line
  description: LocalizedText;
  heroImage: string;
  gallery: BrandImage[];
  location: {
    area: string;
    address?: Field<string>;
    mapUrl?: string;
    coords?: { lat: number; lng: number };
  };
  hours?: Field<LocalizedText>;
  capacity?: Field<LocalizedText>;
  followersLabel?: Field<string>;
  priceLevel?: Field<1 | 2 | 3 | 4>;
  priceLabel?: Field<LocalizedText>;
  signature?: Field<LocalizedText>;
  facilities: Field<LocalizedText>[];
  bestFor: string[]; // i18n keys
  moodTags: string[];
  peakTimes?: Field<LocalizedText>;
  contact?: {
    whatsapp?: Field<string>;
    instagram?: Field<string>;
    website?: Field<string>;
    email?: Field<string>;
  };
  services?: LocalizedText[];
  reviewExcerpts?: ReviewExcerpt[];
  recentEvents?: BrandEvent[];
  primaryCta: { labelKey: string; action: CtaAction };
  secondaryCta?: { labelKey: string; action: CtaAction };
  /** Overall card status. Verified only when the core profile is confirmed. */
  verificationStatus: VerificationStatus;
  updatedAt: string;
};
