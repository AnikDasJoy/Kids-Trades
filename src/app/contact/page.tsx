import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Little & Lovely",
  description:
    "Get in touch with Little & Lovely for help with your order and product questions.",
};

export default function ContactPage() {
  return (
    <main className="container-shell py-12">
      <div className="max-w-2xl rounded-[2rem] border border-charcoal/10 bg-white p-8 shadow-soft">
        <p className="eyebrow">Contact</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-charcoal">
          We’re here to help
        </h1>
        <div className="mt-6 space-y-3 text-base text-muted">
          <p>Email: hello@littleandlovely.com</p>
          <p>Phone: +880 1700-000000</p>
          <p>Store hours: Sunday to Thursday, 9:00 AM – 6:00 PM</p>
        </div>
      </div>
    </main>
  );
}
