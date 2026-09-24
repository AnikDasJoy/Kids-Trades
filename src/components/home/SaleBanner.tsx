import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function SaleBanner() {
  return (
    <section className="container-shell py-16">
      <div className="rounded-[2.3rem] bg-charcoal px-6 py-10 text-white shadow-soft md:px-10">
        <p className="eyebrow text-white/80">Seasonal savings</p>
        <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              Little Looks. Lovely Prices.
            </h2>
            <p className="mt-3 text-lg text-white/80">
              Up to 30% off selected styles.
            </p>
          </div>
          <Link href="/shop/sale">
            <Button
              variant="secondary"
              className="bg-white text-charcoal hover:bg-[#f3efe8]"
            >
              Shop Sale
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
