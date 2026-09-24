const ageGroups = [
  { label: "0–2 Years", color: "bg-[#fbe7d2]" },
  { label: "3–5 Years", color: "bg-[#cfeaf8]" },
  { label: "6–8 Years", color: "bg-[#f7d67a]/60" },
  { label: "9–12 Years", color: "bg-[#f4d4d0]" },
];

export function AgeSection() {
  return (
    <section className="container-shell py-16">
      <div className="mb-8">
        <p className="eyebrow">Shop by age</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
          Made for every stage
        </h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {ageGroups.map((group) => (
          <div
            key={group.label}
            className={`rounded-[1.75rem] border border-charcoal/10 p-6 shadow-sm ${group.color}`}
          >
            <p className="text-2xl font-semibold text-charcoal">
              {group.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
