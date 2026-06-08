import { z } from 'zod';
import { LOCALES } from '@/types/locale';
import { HONEYPOT_FIELD } from './security';

const phone = z
  .string()
  .transform((s) => s.replace(/\D/g, ''))
  .refine((s) => s.length >= 10 && s.length <= 15, { message: 'invalidPhone' });

export const inquirySchema = z.object({
  type: z.enum(['stay', 'dine', 'pool', 'events', 'partners']),
  brandSlug: z.string().max(80).optional(),
  name: z.string().trim().min(2).max(120),
  whatsapp: phone,
  email: z.string().email().max(320).optional().or(z.literal('')),
  dates: z.string().max(120).optional(),
  guests: z.coerce.number().int().min(1).max(99).optional(),
  preferredTime: z.string().max(120).optional(),
  partySize: z.coerce.number().int().min(1).max(99).optional(),
  eventType: z.string().max(120).optional(),
  poolOption: z.string().max(120).optional(),
  partnerInfo: z
    .object({
      serviceArea: z.string().max(160).optional(),
      orderSize: z.string().max(160).optional(),
      deliveryTiming: z.string().max(160).optional(),
      businessName: z.string().max(160).optional(),
    })
    .optional(),
  message: z.string().max(2000).optional(),
  consent: z.literal(true, { errorMap: () => ({ message: 'consentRequired' }) }),
  preferredLanguage: z.enum(LOCALES),
  source: z.string().max(120),
  locale: z.enum(LOCALES),
  // Honeypot: must be empty.
  [HONEYPOT_FIELD]: z.string().max(0).optional().or(z.literal('')),
});

export type InquiryInput = z.infer<typeof inquirySchema>;
