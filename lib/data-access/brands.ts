import { brands } from '@/data/brands';
import type { AudiencePath, Brand, CategoryGroup } from '@/types/brand';

/**
 * Brand repository. Today reads from /data; tomorrow swaps to Supabase
 * without changing the pages that consume it.
 *
 * PUBLIC vs INTERNAL: brands with `publicReady === false` are concepts not
 * built yet (e.g. Novo Restaurante Bar 2026, PIPA Ice Supply). They stay in
 * internal data but are hidden from every public listing, route and sitemap.
 */
export function isPublicReady(b: Brand): boolean {
  return b.publicReady !== false;
}

/** ALL brands incl. non-public concepts. For internal/admin use only. */
export function getAllBrands(): Brand[] {
  return brands;
}

/** Public-ready brands only. Use this for anything user-facing. */
export function getBrands(): Brand[] {
  return brands.filter(isPublicReady);
}

/** Internal lookup (any brand). Public pages must guard with isPublicReady. */
export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}

/** Listing by display group — public-ready only. */
export function getBrandsByGroup(group: CategoryGroup): Brand[] {
  return brands.filter((b) => isPublicReady(b) && b.categoryGroups.includes(group));
}

/** Quick-path tabs map to category groups of the same name (public-ready only). */
export function getBrandsByPath(path: AudiencePath): Brand[] {
  return getBrandsByGroup(path as CategoryGroup);
}

/** Similar brands — public-ready only, same audience path. */
export function getSimilarBrands(brand: Brand, limit = 3): Brand[] {
  return brands
    .filter((b) => isPublicReady(b) && b.id !== brand.id && b.audiencePath === brand.audiencePath)
    .slice(0, limit);
}
