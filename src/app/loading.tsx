export default function Loading() {
  return (
    <main className="container-shell py-20">
      <div className="mx-auto max-w-md rounded-[2rem] border border-charcoal/10 bg-white p-8 text-center shadow-soft">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-charcoal/10 border-t-coral" />
        <p className="mt-5 text-lg font-medium text-charcoal">
          Loading your little finds…
        </p>
      </div>
    </main>
  );
}
