"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Product } from "@/types/product";

interface WishlistContextValue {
  items: Product[];
  isInWishlist: (productId: string) => boolean;
  toggleWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  clearWishlist: () => void;
}

const WishlistContext = createContext<WishlistContextValue | undefined>(
  undefined,
);
const STORAGE_KEY = "little-lovely-wishlist";

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setItems(JSON.parse(saved) as Product[]);
      } catch {
        setItems([]);
      }
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const isInWishlist = (productId: string) =>
    items.some((item) => item.id === productId);

  const toggleWishlist = (product: Product) => {
    setItems((current) =>
      current.some((item) => item.id === product.id)
        ? current.filter((item) => item.id !== product.id)
        : [...current, product],
    );
  };

  const removeFromWishlist = (productId: string) => {
    setItems((current) => current.filter((item) => item.id !== productId));
  };

  const clearWishlist = () => setItems([]);

  const value = useMemo<WishlistContextValue>(
    () => ({
      items,
      isInWishlist,
      toggleWishlist,
      removeFromWishlist,
      clearWishlist,
    }),
    [items],
  );

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
}
