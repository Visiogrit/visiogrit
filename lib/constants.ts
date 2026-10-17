export const SITE = {
  name: "Visiogrit",
  email: "work@visiogrit.com",
  tagline: "Vision + Grit",
  status: "Available for Q4 projects",
  /** Set to a Calendly (or similar) URL to show “Book intro” on contact. */
  calendlyUrl: "" as string,
} as const;

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Demos", href: "/demos" },
  { label: "Work", href: "/#work" },
  { label: "Contact", href: "/#contact" },
] as const;

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Technical Audit & References",
    description:
      "We align on product, audience, and 2–3 reference sites you admire—layout, density, and tone—before we design in code.",
  },
  {
    number: "02",
    title: "Architecture & Systemic Identity",
    description:
      "We define the visual system: type, color tokens, component patterns, and narrative scaffolding that scales with your product.",
  },
  {
    number: "03",
    title: "Design in Code on Staging",
    description:
      "High-craft execution in Next.js on a real staging URL—responsive surfaces, motion where it helps, and tokens your team can extend.",
  },
  {
    number: "04",
    title: "Scale & Launch Support",
    description:
      "Vercel deployment, SEO basics, handoff notes, and revision rounds so you launch on-brand without a slide deck lag.",
  },
];

export const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/Visiogrit",
    icon: "github" as const,
  },
] as const;

export const BUDGET_RANGES = [
  "$5k – $10k",
  "$10k – $20k",
  "$20k+",
  "Not sure yet",
] as const;
