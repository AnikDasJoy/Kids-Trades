import { products } from "@/data/products";
import { ProductGrid } from "@/components/product/ProductGrid";

export default function BoysPage() {
  const items = products.filter(
    (product) => product.gender === "Boys" || product.category === "Boys",
  );

  return (
    <main className="container-shell py-12">
      <div className="mb-8">
        <p className="eyebrow">Boys</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-charcoal">
          Boys collection
        </h1>
      </div>
      <ProductGrid products={items} />
    </main>
  );
}
