import { Button } from "@/components/ui/Button";

export function Newsletter() {
  return (
    <section className="container-shell py-16">
      <div className="rounded-[2.2rem] border border-charcoal/10 bg-[#f9f4ef] p-8 shadow-soft md:p-10">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="eyebrow">Stay in the loop</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
              Get the latest little looks.
            </h2>
            <p className="mt-3 max-w-lg text-base leading-7 text-muted">
              Sign up for new arrivals, special offers and seasonal collections.
            </p>
          </div>

          <form className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              aria-label="Email address"
              placeholder="Email address"
              className="h-12 flex-1 rounded-full border border-charcoal/10 bg-white px-4 text-sm text-charcoal placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-coral"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
