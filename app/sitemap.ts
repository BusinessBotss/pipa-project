import type { MetadataRoute } from 'next';
import { LOCALES } from '@/types/locale';
import { getBrands } from '@/lib/data-access/brands';

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
const staticPaths = ['', '/experiences', '/stay', '/dine', '/pool', '/events', '/partners', '/offers', '/gallery', '/contact', '/faq', '/privacy', '/terms'];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  for (const locale of LOCALES) {
    for (const p of staticPaths) {
      entries.push({ url: `${SITE}/${locale}${p}`, changeFrequency: 'weekly', priority: p === '' ? 1 : 0.7 });
    }
    for (const b of getBrands()) {
      entries.push({ url: `${SITE}/${locale}/brands/${b.slug}`, changeFrequency: 'monthly', priority: 0.6 });
    }
  }
  return entries;
}
