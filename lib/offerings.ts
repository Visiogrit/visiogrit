export const HIRE_PROFILE = {
  headline:
    "Next.js developer — reference-led marketing sites for B2B SaaS & product teams",
  shortAbout:
    "I turn reference sites and clear briefs into production marketing websites—design in code, fast staging URLs, and launch on Vercel. No separate Figma wireframe phase unless you need it as an add-on.",
  longAbout: `Visiogrit builds production-ready marketing and product surfaces for technical founders, SaaS companies, and mission-driven organizations.

You don't need a full Figma deck to start. We align on 2–3 reference sites, lock a section list, and iterate on a real staging URL—so you see progress in days, not slides.

I ship with Next.js, TypeScript, and Tailwind: responsive layout, motion where it helps, contact flows, and deployment on Vercel. Ideal if you want a polished site without hiring a separate design agency and dev shop.

Based remotely with overlap for US Eastern and Pacific call windows. Invoices in USD; payment via bank transfer (Wise) or PayPal Business.`,
} as const;

export type OfferingPackage = {
  id: string;
  name: string;
  priceLabel: string;
  timeline: string;
  bestFor: string;
  includes: string[];
};

export const OFFERING_PACKAGES: OfferingPackage[] = [
  {
    id: "landing",
    name: "Reference-Led Landing Page",
    priceLabel: "From $6,000 USD",
    timeline: "1–2 weeks",
    bestFor: "Pre-launch SaaS, single offer, or campaign page",
    includes: [
      "Discovery call + reference board (URLs you like)",
      "Hero, features, social proof, FAQ, and contact/CTA",
      "Responsive UI built in Next.js",
      "Deploy to Vercel + custom domain hookup",
      "Two revision rounds on staging",
    ],
  },
  {
    id: "marketing-site",
    name: "Full Marketing Site",
    priceLabel: "From $12,000 USD",
    timeline: "3–5 weeks",
    bestFor: "Startups needing a credible multi-page marketing presence",
    includes: [
      "Everything in Landing, plus 4–6 additional sections/pages",
      "Information architecture and navigation",
      "Blog or news index (optional, content-ready)",
      "SEO basics (metadata, sitemap, Open Graph)",
      "Two revision rounds per major section",
    ],
  },
  {
    id: "build-only",
    name: "Build & Polish",
    priceLabel: "From $4,500 USD",
    timeline: "1–3 weeks",
    bestFor: "You have copy, brand, or rough references—I implement and refine",
    includes: [
      "Next.js implementation from your brief or references",
      "UI polish, spacing, typography, and mobile pass",
      "Component structure for future pages",
      "Vercel deployment",
      "One consolidated revision round",
    ],
  },
];

export const OFFERING_NOT_INCLUDED = [
  "Full brand identity or logo systems (available as a separate engagement)",
  "Large Figma wireframe decks or UX research sprints by default",
  "Copywriting, photography, or legal/compliance review",
  "Ongoing maintenance unless agreed as a retainer",
] as const;

export const HOW_WE_COLLABORATE = [
  {
    title: "References, not guesswork",
    description:
      "Share 2–3 sites whose layout, density, or tone you want. We adapt patterns to your content—never a 1:1 clone of a competitor.",
  },
  {
    title: "Staging-first feedback",
    description:
      "Review a live preview URL. Comments map to real UI, which is faster than abstract wireframes for most founder-led teams.",
  },
  {
    title: "Clear scope",
    description:
      "Fixed packages with defined sections, revision rounds, and timeline. Add-ons quoted separately if you need Figma handoff or extra pages.",
  },
] as const;
