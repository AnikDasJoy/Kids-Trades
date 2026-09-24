import { products } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";

export function NewArrivals() {
  const items = products.filter((product) => product.isNew).slice(0, 4);

  return (
    <section className="container-shell py-16">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow">New arrivals</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
            New Arrivals
          </h2>
        </div>
        <p className="text-base text-muted">
          Fresh styles for their next adventure.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
