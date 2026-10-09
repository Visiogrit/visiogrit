import {
  Layers,
  Palette,
  LayoutTemplate,
  MessageSquareQuote,
  type LucideIcon,
} from "lucide-react";

export const SITE = {
  name: "Visiogrit",
  email: "work@visiogrit.com",
  tagline: "Vision + Grit",
  status: "Available for Q4 projects",
} as const;

export const NAV_LINKS = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export type Service = {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const SERVICES: Service[] = [
  {
    id: "visual-identity",
    number: "01",
    title: "Visual Identity & Logos",
    description:
      "Engineered marks, typography systems, and brand guidelines built for technical products that need to signal precision and trust.",
    icon: Palette,
  },
  {
    id: "design-systems",
    number: "02",
    title: "Design Systems",
    description:
      "Scalable Figma components, UI kits, and design tokens that keep product teams shipping cohesive interfaces at speed.",
    icon: Layers,
  },
  {
    id: "web-product",
    number: "03",
    title: "Web & Product Architecture",
    description:
      "High-converting landing pages and SaaS interfaces that translate complex platforms into clear, conversion-ready experiences.",
    icon: LayoutTemplate,
  },
  {
    id: "positioning",
    number: "04",
    title: "Technical Positioning",
    description:
      "Developer-focused messaging and visual storytelling that make infrastructure, APIs, and tooling feel inevitable.",
    icon: MessageSquareQuote,
  },
];

export type CaseStudy = {
  id: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  href: string;
  gradient: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "hyperlayer",
    name: "Hyperlayer",
    category: "Infrastructure Brand & Design System",
    description:
      "A full brand system and component library for a cloud infrastructure platform targeting platform engineers and SREs.",
    tags: ["Brand System", "Figma", "Design Tokens"],
    href: "#",
    gradient: "from-cyan-500/30 via-slate-900 to-indigo-500/20",
  },
  {
    id: "syntag-ai",
    name: "Syntag AI",
    category: "Developer Platform Identity & Web App",
    description:
      "Identity, marketing site, and product UI for an AI-native developer platform that turns complex workflows into clear product narrative.",
    tags: ["Next.js", "Product UI", "Identity"],
    href: "#",
    gradient: "from-indigo-500/30 via-slate-900 to-cyan-400/20",
  },
  {
    id: "codekits",
    name: "CodeKits",
    category: "Open-Source Tooling Brand & Landing Page",
    description:
      "Sharp visual identity and high-conversion landing experience for an open-source developer tooling suite.",
    tags: ["Landing Page", "Open Source", "Brand"],
    href: "#",
    gradient: "from-sky-400/25 via-slate-900 to-violet-500/20",
  },
];

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
  { label: "GitHub", href: "https://github.com", icon: "github" as const },
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
