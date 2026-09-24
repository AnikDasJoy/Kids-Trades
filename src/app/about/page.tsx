import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Little & Lovely",
  description:
    "Thoughtful kidswear made for everyday comfort and joyful memories.",
};

export default function AboutPage() {
  return (
    <main className="container-shell py-12">
      <div className="max-w-3xl">
        <p className="eyebrow">Our story</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-charcoal">
          Thoughtful style for playful days
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted">
          Little & Lovely brings together soft fabrics, comfortable fits and
          warm, modern silhouettes for little ones who are always on the move.
        </p>
      </div>
    </main>
  );
}
