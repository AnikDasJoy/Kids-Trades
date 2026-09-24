import { CategoryCard } from "./CategoryCard";

const categories = [
  {
    title: "Girls",
    description: "Sweet, statement-making styles for every day",
    href: "/shop/girls",
    image: "/images/categories/girls.svg",
  },
  {
    title: "Boys",
    description: "Comfortable essentials with rugged charm",
    href: "/shop/boys",
    image: "/images/categories/boys.svg",
  },
  {
    title: "Baby",
    description: "Soft layers and cozy pieces for baby days",
    href: "/shop/baby",
    image: "/images/categories/baby.svg",
  },
  {
    title: "Dresses",
    description: "Twirl-ready pieces for parties and play",
    href: "/shop/dresses",
    image: "/images/categories/dresses.svg",
  },
  {
    title: "T-Shirts",
    description: "Easy staples built for movement",
    href: "/shop/t-shirts",
    image: "/images/categories/t-shirts.svg",
  },
  {
    title: "Sets",
    description: "Coordinated looks that make dressing easy",
    href: "/shop/sets",
    image: "/images/categories/sets.svg",
  },
];

export function CategorySection() {
  return (
    <section className="container-shell py-16">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="eyebrow">Shop by category</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
            Fresh finds for every little style
          </h2>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {categories.map((category) => (
          <CategoryCard key={category.title} {...category} />
        ))}
      </div>
    </section>
  );
}
