export function ProductFilters() {
  return (
    <aside className="hidden rounded-[2rem] border border-charcoal/10 bg-white p-5 shadow-sm lg:block">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-charcoal">
          Filters
        </p>
      </div>

      <div className="space-y-6 text-sm text-muted">
        <div>
          <p className="mb-2 font-medium text-charcoal">Category</p>
          <div className="space-y-2">
            {["Girls", "Boys", "Baby", "Dresses", "T-Shirts", "Sets"].map(
              (item) => (
                <label key={item} className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4 accent-coral" />
                  <span>{item}</span>
                </label>
              ),
            )}
          </div>
        </div>

        <div>
          <p className="mb-2 font-medium text-charcoal">Age</p>
          <div className="space-y-2">
            {["0–2 Years", "3–5 Years", "6–8 Years", "9–12 Years"].map(
              (item) => (
                <label key={item} className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4 accent-coral" />
                  <span>{item}</span>
                </label>
              ),
            )}
          </div>
        </div>

        <div>
          <p className="mb-2 font-medium text-charcoal">Price</p>
          <input
            type="range"
            min="500"
            max="3000"
            defaultValue={2000}
            className="w-full accent-coral"
          />
        </div>

        <div>
          <p className="mb-2 font-medium text-charcoal">Rating</p>
          <div className="space-y-2">
            {["4.5+", "4.0+", "3.5+"].map((item) => (
              <label key={item} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="rating"
                  className="h-4 w-4 accent-coral"
                />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
