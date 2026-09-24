"use client";

import { Heart } from "lucide-react";
import { useWishlist } from "@/context/wishlist-context";
import type { Product } from "@/types/product";

interface WishlistButtonProps {
  product: Product;
  className?: string;
}

export function WishlistButton({
  product,
  className = "",
}: WishlistButtonProps) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const active = isInWishlist(product.id);

  return (
    <button
      type="button"
      aria-label={
        active
          ? `Remove ${product.name} from wishlist`
          : `Add ${product.name} to wishlist`
      }
      onClick={() => toggleWishlist(product)}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition ${
        active
          ? "border-coral bg-coral text-white"
          : "border-charcoal/10 bg-white text-charcoal hover:border-coral hover:text-coral"
      } ${className}`}
    >
      <Heart className={`h-4 w-4 ${active ? "fill-current" : ""}`} />
    </button>
  );
}
