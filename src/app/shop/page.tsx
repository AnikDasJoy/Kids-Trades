import type { Metadata } from "next";
import { products } from "@/data/products";
import { ProductGrid } from "@/components/product/ProductGrid";
import { ProductFilters } from "@/components/shop/ProductFilters";

export const metadata: Metadata = {
  title: "Shop | Little & Lovely",
  description: "Curated kids fashion essentials for little adventures.",
};

export default function ShopPage() {
  return (
    <main className="container-shell py-12">
      <div className="mb-8 text-sm text-muted">
        <span>Home</span>
        <span className="mx-2">/</span>
        <span className="font-medium text-charcoal">Shop</span>
      </div>

      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow">Curated collection</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-charcoal">
            Shop all styles
          </h1>
        </div>
        <p className="text-base text-muted">
          {products.length} pieces ready for play and celebration
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
        <ProductFilters />
        <ProductGrid products={products} />
      </div>
    </main>
  );
}
