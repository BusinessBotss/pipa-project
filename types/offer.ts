import type { LocalizedText } from './locale';
import type { VerificationStatus } from './common';

export type OfferCadence = 'weekly' | 'monthly' | 'yearly' | 'seasonal';

export type Offer = {
  id: string;
  cadence: OfferCadence;
  title: LocalizedText;
  description: LocalizedText;
  brandSlug?: string;
  date?: string; // TODO_CONTENT where not confirmed
  status: VerificationStatus;
};

export type Menu = {
  brandSlug: string;
  title: LocalizedText;
  // HTML-first: a readable summary list of sections/items.
  sections: { name: LocalizedText; items: { name: LocalizedText; price?: string }[] }[];
  flipbookUrl?: string; // secondary
  pdfUrl?: string; // last resort
  menuUrl: string; // canonical URL used in JSON-LD
};

export type QrDestination = {
  id: string;
  brandSlug: string;
  target: string; // route or menu URL
};
