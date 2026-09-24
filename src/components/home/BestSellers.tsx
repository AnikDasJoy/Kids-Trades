import { products } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";

export function BestSellers() {
  const items = products.filter((product) => product.isBestSeller).slice(0, 4);

  return (
    <section className="container-shell py-16">
      <div className="mb-8">
        <p className="eyebrow">Best sellers</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
          Best Sellers
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
