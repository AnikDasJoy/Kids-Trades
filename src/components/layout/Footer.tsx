import Link from "next/link";

const shopLinks = [
  { label: "Girls", href: "/shop/girls" },
  { label: "Boys", href: "/shop/boys" },
  { label: "Baby", href: "/shop/baby" },
  { label: "Dresses", href: "/shop/dresses" },
  { label: "T-Shirts", href: "/shop/t-shirts" },
  { label: "Sale", href: "/shop/sale" },
];

const supportLinks = [
  { label: "Contact", href: "/contact" },
  { label: "Shipping", href: "/about" },
  { label: "Returns", href: "/about" },
  { label: "FAQ", href: "/about" },
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-charcoal/10 bg-[#f3efe8]">
      <div className="container-shell py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-coral text-sm font-bold text-white">
                L
              </div>
              <p className="text-lg font-semibold tracking-[0.12em] text-charcoal">
                LITTLE & LOVELY
              </p>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-6 text-muted">
              Thoughtful kidswear designed for comfort, confidence and everyday
              adventures.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-charcoal">
              Shop
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              {shopLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="transition hover:text-charcoal">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-charcoal">
              Customer Support
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              {supportLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="transition hover:text-charcoal">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-charcoal">
              Follow Us
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>
                <a
                  href="https://facebook.com"
                  className="transition hover:text-charcoal"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  className="transition hover:text-charcoal"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://pinterest.com"
                  className="transition hover:text-charcoal"
                >
                  Pinterest
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-charcoal/10 pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Little & Lovely. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="transition hover:text-charcoal">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition hover:text-charcoal">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
