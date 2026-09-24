import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#f7f4ee",
        coral: "#f59f8d",
        sky: "#cfeaf8",
        butter: "#f7d67a",
        charcoal: "#1f1d1b",
        muted: "#6d6a67",
      },
      boxShadow: {
        soft: "0 16px 40px rgba(31, 29, 27, 0.08)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
      },
      borderRadius: {
        xl: "1.25rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
