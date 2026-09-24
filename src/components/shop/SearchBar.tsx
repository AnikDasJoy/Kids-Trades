export function SearchBar({ query }: { query?: string }) {
  return (
    <div className="rounded-full border border-charcoal/10 bg-white px-4 py-3 shadow-sm">
      <input
        defaultValue={query ?? ""}
        placeholder="Search little looks"
        aria-label="Search products"
        className="w-full bg-transparent text-sm text-charcoal placeholder:text-muted focus:outline-none"
      />
    </div>
  );
}
