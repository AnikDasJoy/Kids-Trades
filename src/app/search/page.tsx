import { ProductGrid } from "@/components/product/ProductGrid";
import { products } from "@/data/products";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;
  const normalized = q.trim().toLowerCase();

  const results = !normalized
    ? products
    : products.filter((product) =>
        [product.name, product.category, product.tags.join(" ")]
          .join(" ")
          .toLowerCase()
          .includes(normalized),
      );

  return (
    <main className="container-shell py-12">
      <div className="mb-8">
        <p className="eyebrow">Search</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-charcoal">
          Search products
        </h1>
        <p className="mt-2 text-base text-muted">
          {q ? `Results for “${q}”` : "Browse all items"} · {results.length}{" "}
          results
        </p>
      </div>

      {results.length ? (
        <ProductGrid products={results} />
      ) : (
        <div className="rounded-[2rem] border border-dashed border-charcoal/15 bg-white p-10 text-center shadow-sm">
          <h2 className="text-2xl font-semibold text-charcoal">
            No search results
          </h2>
          <p className="mt-3 text-base text-muted">
            Try a different keyword like “dress”, “boys”, or “summer”.
          </p>
        </div>
      )}
    </main>
  );
}
