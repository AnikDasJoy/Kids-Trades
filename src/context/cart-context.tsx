"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Product } from "@/types/product";

export interface CartItem {
  productId: string;
  name: string;
  slug: string;
  image: string;
  price: number;
  originalPrice: number;
  quantity: number;
  size: string;
  color: string;
}

interface CartContextValue {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  discount: number;
  delivery: number;
  total: number;
  addItem: (
    product: Product,
    size: string,
    color: string,
    quantity?: number,
  ) => void;
  removeItem: (productId: string, size: string, color: string) => void;
  updateQuantity: (
    productId: string,
    size: string,
    color: string,
    change: number,
  ) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

const STORAGE_KEY = "little-lovely-cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setItems(JSON.parse(saved) as CartItem[]);
      } catch {
        setItems([]);
      }
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = (
    product: Product,
    size: string,
    color: string,
    quantity = 1,
  ) => {
    setItems((current) => {
      const existing = current.find(
        (item) =>
          item.productId === product.id &&
          item.size === size &&
          item.color === color,
      );

      if (existing) {
        return current.map((item) =>
          item.productId === product.id &&
          item.size === size &&
          item.color === color
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }

      return [
        ...current,
        {
          productId: product.id,
          name: product.name,
          slug: product.slug,
          image: product.thumbnail,
          price: product.price,
          originalPrice: product.originalPrice,
          quantity,
          size,
          color,
        },
      ];
    });
  };

  const removeItem = (productId: string, size: string, color: string) => {
    setItems((current) =>
      current.filter(
        (item) =>
          !(
            item.productId === productId &&
            item.size === size &&
            item.color === color
          ),
      ),
    );
  };

  const updateQuantity = (
    productId: string,
    size: string,
    color: string,
    change: number,
  ) => {
    setItems((current) =>
      current.flatMap((item) => {
        if (
          item.productId !== productId ||
          item.size !== size ||
          item.color !== color
        ) {
          return [item];
        }

        const updatedQuantity = item.quantity + change;
        return updatedQuantity > 0
          ? [{ ...item, quantity: updatedQuantity }]
          : [];
      }),
    );
  };

  const clearCart = () => setItems([]);

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items],
  );
  const discount = useMemo(
    () =>
      items.reduce(
        (sum, item) => sum + (item.originalPrice - item.price) * item.quantity,
        0,
      ),
    [items],
  );
  const delivery = subtotal > 2000 ? 0 : 150;
  const total = subtotal - discount + delivery;
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      itemCount,
      subtotal,
      discount,
      delivery,
      total,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
    }),
    [items, itemCount, subtotal, discount, delivery, total],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
