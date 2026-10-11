"use client";

import Link from "next/link";
import { Search, X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Girls", href: "/shop/girls" },
  { label: "Boys", href: "/shop/boys" },
  { label: "Baby", href: "/shop/baby" },
  { label: "Dresses", href: "/shop/dresses" },
  { label: "T-Shirts", href: "/shop/t-shirts" },
  { label: "Sets", href: "/shop/sets" },
  { label: "New Arrivals", href: "/shop?sort=newest" },
  { label: "Sale", href: "/shop/sale" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Search", href: "/search" },
  { label: "Wishlist", href: "/wishlist" },
  { label: "Cart", href: "/cart" },
  { label: "Account", href: "/account" },
];

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-charcoal/40 transition-opacity duration-300 ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-full max-w-sm flex-col transform bg-cream p-5 shadow-soft transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between border-b border-charcoal/10 pb-4">
          <p className="text-lg font-semibold">Menu</p>
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="rounded-full p-2 text-charcoal transition hover:bg-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="mt-6 flex-1 space-y-1 overflow-y-auto">
          {menuItems.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={onClose}
              className="block rounded-xl px-3 py-3 text-base font-medium text-charcoal transition hover:bg-white"
            >
              {label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
