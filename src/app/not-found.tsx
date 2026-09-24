import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="container-shell py-20">
      <div className="mx-auto max-w-xl rounded-[2rem] border border-charcoal/10 bg-white p-10 text-center shadow-soft">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-charcoal">
          This page is not available
        </h1>
        <p className="mt-4 text-base text-muted">
          The item you’re looking for could be in a different collection.
        </p>
        <div className="mt-6">
          <Link href="/shop">
            <Button>Back to shop</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
