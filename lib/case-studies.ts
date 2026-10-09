export type CaseStudy = {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  gradient: string;
  liveUrl: string;
  overview: string;
  challenge: string;
  solution: string;
  outcomes: string[];
  stack: string[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "kanth-foundation",
    slug: "kanth-foundation",
    name: "Kanth Foundation",
    category: "Nonprofit Web Platform & Donor Experience",
    description:
      "End-to-end site for a Hyderabad nonprofit—program storytelling, active campaigns with progress, volunteer intake, and trust signals (DARPAN, charity registration).",
    tags: ["Next.js", "Nonprofit", "Donations", "Content IA"],
    gradient: "from-emerald-500/25 via-slate-900 to-cyan-500/20",
    liveUrl: "https://kanth-foundation-site.vercel.app/",
    overview:
      "Kanth Foundation runs community programmes across Bowenpally and Secunderabad—Health in Hands, SATCA youth workshops, and FoodCross meal redistribution. The site needed to feel warm and credible while driving donations and volunteer sign-ups.",
    challenge:
      "Multiple initiatives, campaigns with funding goals, and compliance details had to live in one clear hierarchy without overwhelming visitors or burying the donate path.",
    solution:
      "Structured flagship programmes, pillar pages, and featured causes with raised/goal progress. Added testimonials, volunteer profiles, and registration IDs in the footer so patrons can verify legitimacy at a glance.",
    outcomes: [
      "Six programme pillars with dedicated donate/participate CTAs",
      "Three active campaigns with live progress framing",
      "Volunteer and news flows wired into primary navigation",
      "Registered office, phone, and hello@kanth.org surfaced for trust",
    ],
    stack: ["Next.js", "Vercel", "Tailwind CSS", "Responsive UI"],
  },
  {
    id: "bank-auction-list",
    slug: "bank-auction-list",
    name: "Bank Auction Dashboard",
    category: "Data Product & Search UX",
    description:
      "Auction discovery dashboard aggregating live and upcoming bank property listings for Andhra Pradesh and Telangana—with reserve price, location, and date at a glance.",
    tags: ["Next.js", "Data Product", "Dashboard", "Vercel"],
    gradient: "from-sky-400/30 via-slate-900 to-indigo-500/25",
    liveUrl: "https://bank-auction-list.vercel.app/",
    overview:
      "Property buyers and researchers often chase auctions across fragmented bank portals. This product centralizes listings from major sources into one scannable dashboard.",
    challenge:
      "Dense, repetitive listing data must stay readable on mobile and desktop—bank names, rupee amounts, districts, and auction dates without visual noise.",
    solution:
      "Card-based listing layout with consistent price formatting, geography labels, and auction date prominence. Product positioning focuses on discovery utility rather than raw data dumps.",
    outcomes: [
      "Unified view of live and upcoming reserve-price auctions",
      "Coverage positioned for AP & Telangana markets",
      "Production deployment on Vercel for fast iteration",
      "Scannable cards built for high-volume listing feeds",
    ],
    stack: ["Next.js", "Vercel", "Data aggregation", "Tailwind CSS"],
  },
  {
    id: "visiogrit",
    slug: "visiogrit",
    name: "Visiogrit",
    category: "Studio Brand & Marketing Site",
    description:
      "This studio site—dark technical aesthetic, modular sections, motion, and contact flow—built to position Visiogrit for B2B SaaS and founder-led product teams.",
    tags: ["Brand", "Framer Motion", "Next.js", "Design Systems"],
    gradient: "from-cyan-500/30 via-slate-900 to-violet-500/20",
    liveUrl: "https://visiogrit.com",
    overview:
      "Visiogrit sells precision brand and product design to technical audiences. The marketing site had to embody that positioning: engineered, high-contrast, and fast.",
    challenge:
      "Communicate services, process, and proof without a bloated CMS—while staying accessible and responsive from mobile through desktop.",
    solution:
      "Component-driven page architecture, centralized content constants, scroll-triggered motion, and a contact path that works without a backend on day one.",
    outcomes: [
      "Modular section components for rapid iteration",
      "Cyan-on-obsidian visual system with grid/glow accents",
      "Portfolio wired to real shipped client work",
      "Deployed on Vercel with custom domain",
    ],
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((study) => study.slug === slug);
}
