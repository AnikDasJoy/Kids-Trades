import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function FeaturedCollection() {
  return (
    <section className="container-shell py-16">
      <div className="relative overflow-hidden rounded-[2.25rem] border border-charcoal/10 bg-[#f5efe9] p-8 shadow-soft md:p-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(245,159,141,0.20),_transparent_35%)]" />
        <div className="relative grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="eyebrow">Featured collection</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-charcoal sm:text-5xl">
              Made for Little Moments
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-muted sm:text-lg">
              Comfortable everyday pieces designed for play, parties and
              everything in between.
            </p>
            <div className="mt-6">
              <Link href="/shop">
                <Button>Explore Collection</Button>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              "/images/categories/dresses.svg",
              "/images/categories/sets.svg",
              "/images/categories/baby.svg",
              "/images/categories/t-shirts.svg",
            ].map((image, index) => (
              <div
                key={image}
                className={`overflow-hidden rounded-[1.5rem] border border-charcoal/10 bg-white p-2 ${index % 2 === 0 ? "translate-y-3" : ""}`}
              >
                <img
                  src={image}
                  alt="Collection highlight"
                  className="h-36 w-full rounded-[1.2rem] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
