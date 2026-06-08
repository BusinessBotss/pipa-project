import { brands } from '@/data/brands';
import type { AudiencePath, Brand, CategoryGroup } from '@/types/brand';

/**
 * Brand repository. Today reads from /data; tomorrow swaps to Supabase
 * without changing the pages that consume it.
 */
export function getBrands(): Brand[] {
  return brands;
}

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}

/** Listing by display group (a brand can belong to several). */
export function getBrandsByGroup(group: CategoryGroup): Brand[] {
  return brands.filter((b) => b.categoryGroups.includes(group));
}

/** Quick-path tabs map to category groups of the same name. */
export function getBrandsByPath(path: AudiencePath): Brand[] {
  return getBrandsByGroup(path as CategoryGroup);
}

export function getSimilarBrands(brand: Brand, limit = 3): Brand[] {
  return brands
    .filter((b) => b.id !== brand.id && b.audiencePath === brand.audiencePath)
    .slice(0, limit);
}
