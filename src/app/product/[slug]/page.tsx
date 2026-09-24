import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Heart,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingBag,
  Star,
  Truck,
} from "lucide-react";
import { products } from "@/data/products";
import { Button } from "@/components/ui/Button";

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const product = products.find((item) => item.slug === slug);
    if (!product) {
      return { title: "Product not found" };
    }
    return {
      title: `${product.name} | Little & Lovely`,
      description: product.description,
      openGraph: {
        title: product.name,
        description: product.description,
        images: [{ url: product.thumbnail, width: 1200, height: 1200 }],
      },
    };
  });
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="container-shell py-10">
      <div className="mb-8 text-sm text-muted">
        <Link href="/">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/shop">Shop</Link>
        <span className="mx-2">/</span>
        <span className="font-medium text-charcoal">{product.name}</span>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="overflow-hidden rounded-[2rem] border border-charcoal/10 bg-white p-4 shadow-soft">
            <Image
              src={product.thumbnail}
              alt={product.name}
              width={800}
              height={800}
              className="h-[480px] w-full rounded-[1.5rem] object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {product.images.map((image, index) => (
              <button
                key={`${image}-${index}`}
                type="button"
                className="overflow-hidden rounded-2xl border border-charcoal/10 bg-white p-2 shadow-sm"
              >
                <Image
                  src={image}
                  alt={`${product.name} view ${index + 1}`}
                  width={240}
                  height={240}
                  className="h-28 w-full rounded-xl object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow">{product.category}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-charcoal">
            {product.name}
          </h1>

          <div className="mt-4 flex items-center gap-4 text-sm text-muted">
            <div className="flex items-center gap-1 text-amber-500">
              <Star className="h-4 w-4 fill-current" />
              <span className="font-semibold text-charcoal">
                {product.rating}
              </span>
            </div>
            <span>{product.reviewCount} reviews</span>
          </div>

          <div className="mt-6 flex items-end gap-3">
            <span className="text-3xl font-semibold text-charcoal">
              ৳{product.price}
            </span>
            <span className="text-lg text-muted line-through">
              ৳{product.originalPrice}
            </span>
            <span className="rounded-full bg-coral/15 px-3 py-1 text-sm font-medium text-coral">
              -{product.discount}%
            </span>
          </div>

          <p className="mt-6 max-w-xl text-base leading-7 text-muted">
            {product.description}
          </p>

          <div className="mt-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-charcoal">
              Color
            </p>
            <div className="flex flex-wrap gap-3">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  type="button"
                  aria-label={color.name}
                  className="flex items-center gap-2 rounded-full border border-charcoal/10 bg-white px-3 py-2 text-sm text-charcoal"
                >
                  <span
                    className="h-4 w-4 rounded-full border border-charcoal/20"
                    style={{ backgroundColor: color.hex }}
                  />
                  {color.name}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-charcoal">
              Size
            </p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  className="rounded-full border border-charcoal/10 bg-white px-3 py-2 text-sm font-medium text-charcoal transition hover:border-coral hover:text-coral"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <div className="flex items-center rounded-full border border-charcoal/10 bg-white px-3 py-2">
              <button
                type="button"
                aria-label="Decrease quantity"
                className="p-2 text-charcoal"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="min-w-8 text-center text-sm font-medium">1</span>
              <button
                type="button"
                aria-label="Increase quantity"
                className="p-2 text-charcoal"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <Button className="flex-1 min-w-[180px]">Add to Cart</Button>
            <Button variant="secondary" className="min-w-[130px]">
              Buy Now
            </Button>
            <button
              type="button"
              aria-label="Add to wishlist"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-charcoal/10 bg-white text-charcoal"
            >
              <Heart className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-charcoal/10 bg-white p-4">
              <Truck className="h-5 w-5 text-coral" />
              <p className="mt-3 text-sm font-semibold text-charcoal">
                Fast delivery
              </p>
              <p className="mt-1 text-xs text-muted">
                2–4 days across Bangladesh
              </p>
            </div>
            <div className="rounded-2xl border border-charcoal/10 bg-white p-4">
              <ShieldCheck className="h-5 w-5 text-coral" />
              <p className="mt-3 text-sm font-semibold text-charcoal">
                Easy returns
              </p>
              <p className="mt-1 text-xs text-muted">
                Hassle-free within 7 days
              </p>
            </div>
            <div className="rounded-2xl border border-charcoal/10 bg-white p-4">
              <ShoppingBag className="h-5 w-5 text-coral" />
              <p className="mt-3 text-sm font-semibold text-charcoal">
                Premium quality
              </p>
              <p className="mt-1 text-xs text-muted">
                Made for everyday comfort
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
        <section className="rounded-[2rem] border border-charcoal/10 bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-semibold text-charcoal">
            Product details
          </h2>
          <div className="mt-6 space-y-6 text-base leading-7 text-muted">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-charcoal">
                Description
              </p>
              <p>{product.description}</p>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-charcoal">
                Material
              </p>
              <p>{product.material}</p>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-charcoal">
                Care instructions
              </p>
              <p>{product.careInstructions}</p>
            </div>
          </div>
        </section>

        <aside className="rounded-[2rem] border border-charcoal/10 bg-white p-6 shadow-soft">
          <h3 className="text-xl font-semibold text-charcoal">
            Shipping & returns
          </h3>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-muted">
            <li>• Free delivery above ৳2000</li>
            <li>• Easy size guide available</li>
            <li>• 7-day return window</li>
            <li>• Safe packaging for children’s wear</li>
          </ul>
        </aside>
      </div>
    </main>
  );
}
