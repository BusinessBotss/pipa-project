import type { LocalizedText } from './locale';

export type BrandAsset = {
  id: string;
  brandId: string;
  type:
    | "logo"
    | "hero_image"
    | "gallery_image"
    | "menu_pdf"
    | "menu_image"
    | "video"
    | "reel"
    | "qr"
    | "flipbook"
    | "map"
    | "other";
  title: LocalizedText;
  url: string;
  alt?: LocalizedText;
  status: "verified" | "needs_review" | "placeholder";
  source?: string;
  isPublic: boolean;
  sortOrder: number;
  updatedAt: string;
};

export type BrandMenu = {
  id: string;
  brandId: string;
  menuType:
    | "food"
    | "drinks"
    | "breakfast"
    | "brunch"
    | "delivery"
    | "day_use"
    | "bottle_service"
    | "events"
    | "stay_rates"
    | "other";
  title: LocalizedText;
  assetId?: string;
  url?: string;
  status: "verified" | "needs_review" | "placeholder";
  isPublic: boolean;
  updatedAt: string;
};
