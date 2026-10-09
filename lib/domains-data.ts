export type DomainIconKey =
  | "cpu"
  | "chart"
  | "heart"
  | "sparkles"
  | "home"
  | "building";

export type IndustryDomain = {
  id: string;
  title: string;
  description: string;
  icon: DomainIconKey;
};

export const INDUSTRY_DOMAINS: IndustryDomain[] = [
  {
    id: "saas-devtools",
    title: "B2B SaaS & DevTools",
    description:
      "Product marketing, docs-adjacent UI, and brand systems for APIs, CLIs, and infrastructure software.",
    icon: "cpu",
  },
  {
    id: "fintech-data",
    title: "Fintech & Data Products",
    description:
      "Dashboards, listing feeds, and trust-forward interfaces where accuracy and scanability drive conversion.",
    icon: "chart",
  },
  {
    id: "nonprofit",
    title: "Nonprofits & Social Impact",
    description:
      "Donation flows, campaign storytelling, volunteer intake, and compliance-forward footers that build patron confidence.",
    icon: "heart",
  },
  {
    id: "health-wellness",
    title: "Health & Community Programs",
    description:
      "Accessible programme pages, event-led content, and human-centered layouts for wellness and education initiatives.",
    icon: "sparkles",
  },
  {
    id: "proptech",
    title: "Proptech & Marketplaces",
    description:
      "Search, filters, and detail views for property, auction, and classified experiences with high information density.",
    icon: "home",
  },
  {
    id: "enterprise",
    title: "Enterprise & Scale-ups",
    description:
      "Positioning refreshes, design tokens, and launch surfaces for teams graduating from MVP to multi-product portfolios.",
    icon: "building",
  },
];
