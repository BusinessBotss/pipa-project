/**
 * Central contact routing — single source of truth for live WhatsApp CTAs and
 * Instagram links. Brands reference these via `contactKey` in data/brands.ts.
 *
 * Rules:
 *  - "PENDING" → no confirmed number → DO NOT render a direct wa.me link.
 *    Show a "Consultar / Request details" CTA instead. Never show "PENDING".
 *  - Messages are always encodeURIComponent-ed (see lib/whatsapp.ts).
 *  - No PII in the URL unless the user explicitly acts.
 */

export const WHATSAPP_NUMBERS = {
  casaPalmeira: '5584991328102',
  recantoIbiza: '5584992216112',
  umi: 'PENDING', // research had 5584996162007 (official site) — flagged needs_review, awaiting reconfirmation
  makai: '5584994196079',
  makaiClub: '5584994196079',
  nami: 'PENDING',
  tao: 'PENDING', // research had 5571996362261 — kept as source note in brands.ts, awaiting reconfirmation
  newRestaurant: 'PENDING',
  ice: 'PENDING',
  general: '5584994196079',
} as const;

export type ContactKey = keyof typeof WHATSAPP_NUMBERS;

export const INSTAGRAM_LINKS = {
  casaPalmeira: 'https://www.instagram.com/casapalmeirapipa',
  recantoIbiza: 'https://www.instagram.com/recantodeibiza',
  umi: 'https://www.instagram.com/umifunkitchen',
  makai: 'https://www.instagram.com/makaipipapoolclub',
  makaiClub: 'https://www.instagram.com/makaipipaclub',
  nami: 'https://www.instagram.com/namimadeiro',
  tao: 'https://www.instagram.com/taopipa',
} as const;

/** Returns a usable WhatsApp number, or null when PENDING/unknown. */
export function resolveWhatsapp(key: ContactKey | undefined): string | null {
  if (!key) return null;
  const n = WHATSAPP_NUMBERS[key];
  return n && n !== 'PENDING' ? n : null;
}

export function resolveInstagram(key: ContactKey | undefined): string | null {
  if (!key) return null;
  return (INSTAGRAM_LINKS as Record<string, string>)[key] ?? null;
}
