import { Star } from "lucide-react";

const reviews = [
  {
    name: "Nadia S.",
    product: "Little Princess Party Dress",
    text: "The quality feels premium and the fit was exactly right for my daughter’s birthday party. We received compliments all day.",
    avatar: "NS",
  },
  {
    name: "Moinul H.",
    product: "Adventure Graphic Tee",
    text: "Perfect for everyday play. The fabric is soft, breathable and still looks neat after multiple washes.",
    avatar: "MH",
  },
  {
    name: "Sara T.",
    product: "Baby Cloud Bodysuit",
    text: "Such a comfortable baby set. The material feels gentle, and the design is adorable without being too fussy.",
    avatar: "ST",
  },
];

export function Reviews() {
  return (
    <section className="container-shell py-16">
      <div className="mb-8">
        <p className="eyebrow">Customer reviews</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
          Loved by families across the city
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {reviews.map(({ name, product, text, avatar }) => (
          <article
            key={name}
            className="rounded-[1.75rem] border border-charcoal/10 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={`${name}-${index}`}
                  className="h-4 w-4 fill-current"
                />
              ))}
            </div>
            <p className="mt-5 text-base leading-7 text-muted">“{text}”</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-coral/15 text-sm font-semibold text-charcoal">
                {avatar}
              </div>
              <div>
                <p className="font-semibold text-charcoal">{name}</p>
                <p className="text-xs text-muted">Purchased {product}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
