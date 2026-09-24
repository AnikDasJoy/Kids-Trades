export type ProductCategory =
  | "Girls"
  | "Boys"
  | "Baby"
  | "Dresses"
  | "T-Shirts"
  | "Sets";
export type Gender = "Girls" | "Boys" | "Unisex" | "Baby";
export type AgeGroup = "0–2 Years" | "3–5 Years" | "6–8 Years" | "9–12 Years";

export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  gender: Gender;
  ageGroup: AgeGroup;
  price: number;
  originalPrice: number;
  discount: number;
  images: string[];
  thumbnail: string;
  sizes: string[];
  colors: ProductColor[];
  rating: number;
  reviewCount: number;
  description: string;
  material: string;
  careInstructions: string;
  stock: number;
  badge: string;
  tags: string[];
  isNew: boolean;
  isBestSeller: boolean;
  isSale: boolean;
}

export interface ProductListFilter {
  category?: ProductCategory | "All";
  gender?: Gender | "All";
  ageGroup?: AgeGroup | "All";
  size?: string;
  color?: string;
  priceMax?: number;
  minRating?: number;
  inStockOnly?: boolean;
}
