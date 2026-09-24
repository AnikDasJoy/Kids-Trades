import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
}

export function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  const variants = {
    primary: "bg-coral text-white hover:bg-[#f28d7f] focus-visible:ring-coral",
    secondary:
      "bg-white text-charcoal ring-1 ring-charcoal/10 hover:bg-[#f5f1ea] focus-visible:ring-charcoal",
    ghost:
      "bg-transparent text-charcoal hover:bg-white/60 focus-visible:ring-charcoal",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
