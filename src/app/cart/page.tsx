"use client";

import Link from "next/link";
import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/context/cart-context";

export default function CartPage() {
  const {
    items,
    subtotal,
    discount,
    delivery,
    total,
    updateQuantity,
    removeItem,
  } = useCart();

  if (!items.length) {
    return (
      <main className="container-shell py-16">
        <div className="mx-auto max-w-xl rounded-[2rem] border border-charcoal/10 bg-white p-10 text-center shadow-soft">
          <p className="eyebrow">Your bag</p>
          <h1 className="mt-4 text-4xl font-semibold text-charcoal">
            Your cart is empty
          </h1>
          <p className="mt-4 text-base text-muted">
            Add a few little essentials to get started.
          </p>
          <div className="mt-6">
            <Link href="/shop">
              <Button>Continue shopping</Button>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="container-shell py-12">
      <div className="mb-8">
        <p className="eyebrow">Your bag</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-charcoal">
          Cart
        </h1>
      </div>

      <div className="grid gap-8 xl:grid-cols-[1.4fr_0.6fr]">
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={`${item.productId}-${item.size}-${item.color}`}
              className="flex flex-col gap-4 rounded-[1.75rem] border border-charcoal/10 bg-white p-4 shadow-sm sm:flex-row sm:items-center"
            >
              <div className="relative h-28 w-24 overflow-hidden rounded-[1.2rem] bg-[#f5f0ea]">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={200}
                  height={200}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex-1">
                <Link
                  href={`/product/${item.slug}`}
                  className="text-lg font-semibold text-charcoal hover:text-coral"
                >
                  {item.name}
                </Link>
                <p className="mt-2 text-sm text-muted">
                  Size: {item.size} · Color: {item.color}
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <span className="text-xl font-semibold text-charcoal">
                    ৳{item.price}
                  </span>
                  <span className="text-sm text-muted line-through">
                    ৳{item.originalPrice}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 sm:justify-end">
                <div className="flex items-center rounded-full border border-charcoal/10 bg-[#f8f5f2] px-2 py-1">
                  <button
                    type="button"
                    aria-label={`Decrease quantity for ${item.name}`}
                    onClick={() =>
                      updateQuantity(item.productId, item.size, item.color, -1)
                    }
                    className="p-2 text-charcoal"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="min-w-8 text-center text-sm font-medium">
                    {item.quantity}
                  </span>
                  <button
                    type="button"
                    aria-label={`Increase quantity for ${item.name}`}
                    onClick={() =>
                      updateQuantity(item.productId, item.size, item.color, 1)
                    }
                    className="p-2 text-charcoal"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                <button
                  type="button"
                  aria-label={`Remove ${item.name} from cart`}
                  onClick={() =>
                    removeItem(item.productId, item.size, item.color)
                  }
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/10 bg-white text-charcoal hover:border-red-300 hover:text-red-500"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <aside className="rounded-[2rem] border border-charcoal/10 bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-semibold text-charcoal">
            Order summary
          </h2>
          <div className="mt-6 space-y-3 text-sm text-muted">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="text-charcoal">৳{subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span className="text-charcoal">-৳{discount}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery</span>
              <span className="text-charcoal">৳{delivery}</span>
            </div>
            <div className="flex justify-between border-t border-charcoal/10 pt-3 text-base font-semibold text-charcoal">
              <span>Total</span>
              <span>৳{total}</span>
            </div>
          </div>

          <div className="mt-8 space-y-3">
            <Link href="/shop">
              <Button variant="secondary" className="w-full">
                Continue Shopping
              </Button>
            </Link>
            <Button className="w-full">Proceed to Checkout</Button>
          </div>
        </aside>
      </div>
    </main>
  );
}
