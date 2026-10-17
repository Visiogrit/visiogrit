import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg)",
        foreground: "var(--foreground)",
        elevated: "var(--bg-elevated)",
        footer: "var(--bg-footer)",
        muted: "var(--muted)",
        border: "var(--border)",
        card: "var(--card)",
        accent: {
          DEFAULT: "var(--accent)",
          secondary: "var(--accent-secondary)",
          foreground: "var(--accent-foreground)",
          muted: "var(--accent-muted)",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      boxShadow: {
        glow: "0 0 40px -10px color-mix(in srgb, var(--accent) 45%, transparent)",
        "glow-sm": "0 0 20px -6px color-mix(in srgb, var(--accent) 35%, transparent)",
        card: "0 12px 40px -16px rgba(30, 41, 59, 0.15)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;
