import { products } from "@/data/products";
import { ProductGrid } from "@/components/product/ProductGrid";

export default function SalePage() {
  const items = products.filter((product) => product.isSale);

  return (
    <main className="container-shell py-12">
      <div className="mb-8">
        <p className="eyebrow">Sale</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-charcoal">
          Little Looks. Lovely Prices.
        </h1>
      </div>
      <ProductGrid products={items} />
    </main>
  );
}
