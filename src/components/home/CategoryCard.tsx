import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  href: string;
  image: string;
}

export function CategoryCard({
  title,
  description,
  href,
  image,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-[1.75rem] border border-charcoal/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
    >
      <div className="overflow-hidden bg-[#f5f0ea]">
        <Image
          src={image}
          alt={title}
          width={600}
          height={700}
          className="h-72 w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex items-center justify-between gap-4 p-5">
        <div>
          <h3 className="text-xl font-semibold text-charcoal">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
        </div>
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-coral text-white">
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
