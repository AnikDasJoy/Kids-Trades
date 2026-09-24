import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag, Star } from "lucide-react";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-charcoal/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <div className="relative overflow-hidden bg-[#f5f1ea]">
        <Link
          href={`/product/${product.slug}`}
          className="block"
          aria-label={product.name}
        >
          <Image
            src={product.thumbnail}
            alt={product.name}
            width={600}
            height={700}
            className="h-[300px] w-full object-cover transition duration-300 group-hover:scale-105"
          />
        </Link>

        <button
          type="button"
          aria-label={`Add ${product.name} to wishlist`}
          className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/10 bg-white/90 text-charcoal shadow-sm transition hover:bg-white"
        >
          <Heart className="h-4 w-4" />
        </button>

        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-charcoal">
            {product.badge}
          </span>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between gap-3 text-xs text-muted">
          <span>{product.category}</span>
          <div className="flex items-center gap-1 text-amber-500">
            <Star className="h-3.5 w-3.5 fill-current" />
            <span className="font-medium text-charcoal">{product.rating}</span>
          </div>
        </div>

        <Link
          href={`/product/${product.slug}`}
          className="mt-3 block text-lg font-semibold text-charcoal hover:text-coral"
        >
          {product.name}
        </Link>

        <div className="mt-4 flex items-end gap-2">
          <span className="text-xl font-semibold text-charcoal">
            ৳{product.price}
          </span>
          <span className="text-sm text-muted line-through">
            ৳{product.originalPrice}
          </span>
          <span className="text-xs font-medium text-coral">
            -{product.discount}%
          </span>
        </div>

        <div className="mt-5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {product.colors.slice(0, 3).map((color) => (
              <span
                key={`${product.id}-${color.name}`}
                className="h-3.5 w-3.5 rounded-full border border-charcoal/10"
                style={{ backgroundColor: color.hex }}
                aria-label={color.name}
              />
            ))}
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full bg-coral px-3 py-2 text-xs font-semibold text-white transition hover:bg-[#eb8d81]"
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            Quick Add
          </button>
        </div>
      </div>
    </article>
  );
}
