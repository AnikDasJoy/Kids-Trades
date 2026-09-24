import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="container-shell py-10 sm:py-14">
      <div className="grid items-center gap-8 overflow-hidden rounded-[2.25rem] border border-charcoal/10 bg-[#fdf9f5] p-5 shadow-soft md:p-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="order-2 lg:order-1">
          <p className="eyebrow">Premium kidswear</p>
          <h1 className="mt-4 max-w-xl text-4xl font-semibold tracking-[-0.04em] text-charcoal sm:text-5xl lg:text-6xl">
            Little Styles. Big Smiles.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-muted sm:text-lg">
            Discover beautiful, comfortable clothing made for every little
            adventure.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/shop/girls">
              <Button>Shop Girls</Button>
            </Link>
            <Link href="/shop/boys">
              <Button variant="secondary">Shop Boys</Button>
            </Link>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#f2e7dc] p-4">
            <Image
              src="/images/hero/hero-fashion.svg"
              alt="Kids fashion campaign"
              width={900}
              height={900}
              className="h-[420px] w-full rounded-[1.5rem] object-cover sm:h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
