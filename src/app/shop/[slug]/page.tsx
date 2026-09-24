import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { ProductGrid } from "@/components/product/ProductGrid";
import { ProductFilters } from "@/components/shop/ProductFilters";

const slugMap: Record<string, string> = {
  girls: "Girls",
  boys: "Boys",
  baby: "Baby",
  dresses: "Dresses",
  "t-shirts": "T-Shirts",
  sets: "Sets",
  sale: "sale",
};

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const categoryName = slugMap[slug] ?? "Shop";
    return {
      title: `${categoryName} | Little & Lovely`,
      description: `Explore ${categoryName.toLowerCase()} styles from Little & Lovely.`,
    };
  });
}

export default async function ShopCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const categoryName = slugMap[slug];

  if (!categoryName) {
    notFound();
  }

  const visibleProducts =
    categoryName === "sale"
      ? products.filter((product) => product.isSale)
      : products.filter(
          (product) =>
            product.category === categoryName ||
            product.gender === categoryName,
        );

  return (
    <main className="container-shell py-12">
      <div className="mb-8 text-sm text-muted">
        <span>Home</span>
        <span className="mx-2">/</span>
        <span className="font-medium text-charcoal">
          {categoryName === "sale" ? "Sale" : categoryName}
        </span>
      </div>

      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow">Shop by collection</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-charcoal">
            {categoryName === "sale"
              ? "Little Looks. Lovely Prices."
              : categoryName}
          </h1>
        </div>
        <p className="text-base text-muted">
          {visibleProducts.length} curated finds
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
        <ProductFilters />
        <ProductGrid products={visibleProducts} />
      </div>
    </main>
  );
}
