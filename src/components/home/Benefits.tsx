import { Heart, ShieldCheck, Truck, RefreshCw } from "lucide-react";

const benefits = [
  {
    title: "Soft & Comfortable",
    description: "Gentle fabrics made for all-day movement and naps.",
    icon: Heart,
  },
  {
    title: "Quality Materials",
    description: "Thoughtfully chosen fabrics and finishes for easy care.",
    icon: ShieldCheck,
  },
  {
    title: "Easy Returns",
    description: "Stress-free exchanges when little ones grow fast.",
    icon: RefreshCw,
  },
  {
    title: "Fast Delivery",
    description: "Quick, dependable delivery across Bangladesh.",
    icon: Truck,
  },
];

export function Benefits() {
  return (
    <section className="container-shell py-16">
      <div className="mb-8">
        <p className="eyebrow">Why parents love us</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
          Thoughtful details that make daily dressing easier
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {benefits.map(({ title, description, icon: Icon }) => (
          <div
            key={title}
            className="rounded-[1.75rem] border border-charcoal/10 bg-white p-6 shadow-sm"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-coral/15 text-coral">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-charcoal">
              {title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
