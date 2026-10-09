import {
  Layers,
  Palette,
  LayoutTemplate,
  MessageSquareQuote,
  Building2,
  HeartHandshake,
  LineChart,
  Cpu,
  Home,
  Sparkles,
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
  { label: "Domains", href: "#domains" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
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

export type IndustryDomain = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const INDUSTRY_DOMAINS: IndustryDomain[] = [
  {
    id: "saas-devtools",
    title: "B2B SaaS & DevTools",
    description:
      "Product marketing, docs-adjacent UI, and brand systems for APIs, CLIs, and infrastructure software.",
    icon: Cpu,
  },
  {
    id: "fintech-data",
    title: "Fintech & Data Products",
    description:
      "Dashboards, listing feeds, and trust-forward interfaces where accuracy and scanability drive conversion.",
    icon: LineChart,
  },
  {
    id: "nonprofit",
    title: "Nonprofits & Social Impact",
    description:
      "Donation flows, campaign storytelling, volunteer intake, and compliance-forward footers that build patron confidence.",
    icon: HeartHandshake,
  },
  {
    id: "health-wellness",
    title: "Health & Community Programs",
    description:
      "Accessible programme pages, event-led content, and human-centered layouts for wellness and education initiatives.",
    icon: Sparkles,
  },
  {
    id: "proptech",
    title: "Proptech & Marketplaces",
    description:
      "Search, filters, and detail views for property, auction, and classified experiences with high information density.",
    icon: Home,
  },
  {
    id: "enterprise",
    title: "Enterprise & Scale-ups",
    description:
      "Positioning refreshes, design tokens, and launch surfaces for teams graduating from MVP to multi-product portfolios.",
    icon: Building2,
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
