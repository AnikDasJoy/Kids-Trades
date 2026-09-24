import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account | Little & Lovely",
  description: "Your Little & Lovely account page.",
};

export default function AccountPage() {
  return (
    <main className="container-shell py-12">
      <div className="rounded-[2rem] border border-charcoal/10 bg-white p-8 shadow-soft">
        <p className="eyebrow">Account</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-charcoal">
          Welcome back
        </h1>
        <p className="mt-4 text-base text-muted">
          This is a placeholder account page for the storefront frontend.
        </p>
      </div>
    </main>
  );
}
