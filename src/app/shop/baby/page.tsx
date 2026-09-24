import { products } from "@/data/products";
import { ProductGrid } from "@/components/product/ProductGrid";

export default function BabyPage() {
  const items = products.filter(
    (product) => product.gender === "Baby" || product.category === "Baby",
  );

  return (
    <main className="container-shell py-12">
      <div className="mb-8">
        <p className="eyebrow">Baby</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-charcoal">
          Baby collection
        </h1>
      </div>
      <ProductGrid products={items} />
    </main>
  );
}
