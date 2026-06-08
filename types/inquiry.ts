import type { Locale } from './locale';
import type { AudiencePath } from './brand';

export type InquiryType = AudiencePath; // 'stay' | 'dine' | 'pool' | 'events' | 'partners'

export type Inquiry = {
  type: InquiryType;
  brandSlug?: string;
  name: string;
  whatsapp: string;
  email?: string;
  dates?: string;
  guests?: number;
  preferredTime?: string;
  partySize?: number;
  eventType?: string;
  poolOption?: string;
  partnerInfo?: {
    serviceArea?: string;
    orderSize?: string;
    deliveryTiming?: string;
    businessName?: string;
  };
  message?: string;
  consent: boolean;
  preferredLanguage: Locale;
  source: string;
  locale: Locale;
  createdAt: string;
};
