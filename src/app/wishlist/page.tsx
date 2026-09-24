"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingBag, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useWishlist } from "@/context/wishlist-context";

export default function WishlistPage() {
  const { items, removeFromWishlist } = useWishlist();

  if (!items.length) {
    return (
      <main className="container-shell py-16">
        <div className="mx-auto max-w-xl rounded-[2rem] border border-charcoal/10 bg-white p-10 text-center shadow-soft">
          <p className="eyebrow">Wishlist</p>
          <h1 className="mt-4 text-4xl font-semibold text-charcoal">
            Your wishlist is empty
          </h1>
          <p className="mt-4 text-base text-muted">
            Save the pieces you love for later.
          </p>
          <div className="mt-6">
            <Link href="/shop">
              <Button>Shop the collection</Button>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="container-shell py-12">
      <div className="mb-8">
        <p className="eyebrow">Saved picks</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-charcoal">
          Wishlist
        </h1>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((product) => (
          <article
            key={product.id}
            className="overflow-hidden rounded-[1.75rem] border border-charcoal/10 bg-white shadow-sm"
          >
            <div className="relative">
              <Link href={`/product/${product.slug}`}>
                <Image
                  src={product.thumbnail}
                  alt={product.name}
                  width={600}
                  height={700}
                  className="h-72 w-full object-cover"
                />
              </Link>
              <button
                type="button"
                aria-label={`Remove ${product.name} from wishlist`}
                onClick={() => removeFromWishlist(product.id)}
                className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/10 bg-white text-charcoal"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
            <div className="p-5">
              <Link
                href={`/product/${product.slug}`}
                className="text-xl font-semibold text-charcoal hover:text-coral"
              >
                {product.name}
              </Link>
              <p className="mt-2 text-sm text-muted">{product.category}</p>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <span className="text-xl font-semibold text-charcoal">
                    ৳{product.price}
                  </span>
                  <span className="ml-2 text-sm text-muted line-through">
                    ৳{product.originalPrice}
                  </span>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full bg-coral px-3 py-2 text-xs font-semibold text-white"
                >
                  <ShoppingBag className="h-3.5 w-3.5" />
                  Move to cart
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
