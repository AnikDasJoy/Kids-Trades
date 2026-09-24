"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, Search, Heart, ShoppingBag, User } from "lucide-react";
import { useState } from "react";
import { MobileMenu } from "./MobileMenu";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Girls", href: "/shop/girls" },
  { label: "Boys", href: "/shop/boys" },
  { label: "Baby", href: "/shop/baby" },
  { label: "New Arrivals", href: "/shop?sort=newest" },
  { label: "Sale", href: "/shop/sale" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-charcoal/10 bg-cream/90 backdrop-blur-sm">
        <div className="container-shell flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/10 bg-white text-charcoal shadow-sm md:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>

            <Link
              href="/"
              className="flex items-center gap-3"
              aria-label="Little & Lovely home"
            >
              <div className="relative h-10 w-10 overflow-hidden rounded-full border border-charcoal/10 bg-coral shadow-sm">
                <Image
                  src="/images/logo.jpeg"
                  alt="Little & Lovely logo"
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-lg font-semibold tracking-[0.18em] text-charcoal">
                  Ruma Kids Trades
                </p>
              </div>
            </Link>
          </div>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-sm font-medium text-charcoal/80 transition hover:text-charcoal"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/search"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/10 bg-white text-charcoal shadow-sm"
              aria-label="Search products"
            >
              <Search className="h-4 w-4" />
            </Link>
            <Link
              href="/wishlist"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/10 bg-white text-charcoal shadow-sm"
              aria-label="Wishlist"
            >
              <Heart className="h-4 w-4" />
            </Link>
            <Link
              href="/cart"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/10 bg-white text-charcoal shadow-sm"
              aria-label="Shopping cart"
            >
              <ShoppingBag className="h-4 w-4" />
            </Link>
            <Link
              href="/account"
              className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/10 bg-white text-charcoal shadow-sm"
              aria-label="Account"
            >
              <User className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
