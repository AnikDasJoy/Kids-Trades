"use client";

import { Button } from "@/components/ui/Button";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="container-shell py-20">
      <div className="mx-auto max-w-xl rounded-[2rem] border border-charcoal/10 bg-white p-10 text-center shadow-soft">
        <p className="eyebrow">Something went wrong</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-charcoal">
          We hit a snag
        </h1>
        <p className="mt-4 text-base text-muted">
          Please try again. This page may need a quick refresh.
        </p>
        <div className="mt-6">
          <Button onClick={() => reset()}>Try again</Button>
        </div>
      </div>
    </main>
  );
}
