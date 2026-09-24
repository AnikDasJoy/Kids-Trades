import { products } from "@/data/products";
import { ProductGrid } from "@/components/product/ProductGrid";

export default function GirlsPage() {
  const items = products.filter(
    (product) => product.gender === "Girls" || product.category === "Girls",
  );

  return (
    <main className="container-shell py-12">
      <div className="mb-8">
        <p className="eyebrow">Girls</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-charcoal">
          Girls collection
        </h1>
      </div>
      <ProductGrid products={items} />
    </main>
  );
}
