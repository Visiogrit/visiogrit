export const SITE = {
  name: "Visiogrit",
  email: "work@visiogrit.com",
  tagline: "Vision + Grit",
  status: "Available for Q4 projects",
} as const;

export const NAV_LINKS = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Domains", href: "#domains" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
] as const;

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Technical Audit & Deep Dive",
    description:
      "We absorb your product, architecture, and audience — from API surface area to founder narrative — before a single mark is drawn.",
  },
  {
    number: "02",
    title: "Architecture & Systemic Identity",
    description:
      "We define the visual system: logo logic, type, color tokens, and the narrative scaffolding that scales with your product.",
  },
  {
    number: "03",
    title: "High-Craft Execution & Tokenization",
    description:
      "Precision delivery across brand assets, Figma systems, and digital surfaces — every component tokenized for reuse.",
  },
  {
    number: "04",
    title: "Scale & Launch Support",
    description:
      "Launch-ready guidelines, asset handoff, and ongoing support so your team can ship on-brand without friction.",
  },
];

export const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/Visiogrit",
    icon: "github" as const,
  },
  { label: "X / Twitter", href: "https://x.com", icon: "twitter" as const },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" as const },
] as const;

export const BUDGET_RANGES = [
  "Under $5k",
  "$5k – $15k",
  "$15k – $40k",
  "$40k+",
  "Not sure yet",
] as const;
