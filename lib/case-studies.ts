export type CaseStudy = {
  id: string;
  slug: string;
  name: string;
  category: string;
  /** Short copy for cards — no client geography or locale-specific details */
  cardDescription: string;
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
    category: "Nonprofit Web Platform",
    cardDescription:
      "Mission-led site with programme storytelling, fundraising campaigns, volunteer paths, and trust-focused compliance presentation.",
    tags: ["Next.js", "Nonprofit", "Donations", "Content IA"],
    gradient: "from-emerald-500/25 via-slate-900 to-cyan-500/20",
    liveUrl: "https://kanth-foundation-site.vercel.app/",
    overview:
      "A community foundation running health, youth, and food-security programmes needed a single digital home that feels warm, credible, and action-oriented.",
    challenge:
      "Multiple initiatives, campaigns with funding goals, and registration details had to coexist in one clear hierarchy without overwhelming visitors or burying the donate path.",
    solution:
      "Structured flagship programmes, pillar pages, and featured causes with progress framing. Testimonials, volunteer highlights, and official identifiers in the footer support patron confidence.",
    outcomes: [
      "Six programme pillars with dedicated donate and participate CTAs",
      "Three active campaigns with goal-oriented progress UI",
      "Volunteer and news flows integrated into primary navigation",
      "Contact and registration details surfaced for verification",
    ],
    stack: ["Next.js", "Vercel", "Tailwind CSS", "Responsive UI"],
  },
  {
    id: "bank-auction-list",
    slug: "bank-auction-list",
    name: "Bank Auction Dashboard",
    category: "Data Product & Discovery UX",
    cardDescription:
      "Centralized auction listing product with reserve pricing, location labels, and auction dates optimized for mobile and desktop scanning.",
    tags: ["Next.js", "Data Product", "Dashboard", "Vercel"],
    gradient: "from-sky-400/30 via-slate-900 to-indigo-500/25",
    liveUrl: "https://bank-auction-list.vercel.app/",
    overview:
      "Buyers and researchers often chase property auctions across fragmented lender portals. This product unifies feeds into one scannable dashboard.",
    challenge:
      "High-volume, repetitive listing data must stay readable—institution names, price tiers, geography, and dates without visual noise.",
    solution:
      "Card-based layout with consistent price formatting, geography labels, and date prominence. Positioning emphasizes discovery utility over raw data dumps.",
    outcomes: [
      "Unified view of live and upcoming reserve-price auctions",
      "Multi-source aggregation presented in a single product surface",
      "Production deployment on Vercel for fast iteration",
      "Listing cards tuned for dense feeds at scale",
    ],
    stack: ["Next.js", "Vercel", "Data aggregation", "Tailwind CSS"],
  },
  {
    id: "ssb-granites",
    slug: "ssb-granites",
    name: "SSB Granites",
    category: "B2B Catalog & Marketing Site",
    cardDescription:
      "Product-led site for a granite supplier—hero carousel, category grid, testimonials, and contact paths built for trade buyers and homeowners.",
    tags: ["Next.js", "B2B", "Catalog", "Vercel"],
    gradient: "from-amber-500/25 via-slate-900 to-stone-500/20",
    liveUrl: "https://ssbgranites.vercel.app/",
    overview:
      "A stone and surfaces supplier needed a credible web presence that showcases slab and tile lines, explains custom work, and drives product inquiries—not a generic brochure.",
    challenge:
      "Multiple product families and finishes had to feel premium and scannable on mobile, with clear paths from inspiration to contact without overwhelming the visitor.",
    solution:
      "Rotating hero highlights for flagship materials, category cards for slabs and tiles, an about block for trust, and social proof—wired to a simple navigation and footer contact pattern.",
    outcomes: [
      "Multi-slide hero showcasing signature granite lines",
      "Product category structure for slabs, tiles, and custom work",
      "Customer testimonials and about section for trade credibility",
      "Deployed on Vercel with responsive layout",
    ],
    stack: ["Next.js", "Vercel", "Tailwind CSS", "Responsive UI"],
  },
  {
    id: "visiogrit",
    slug: "visiogrit",
    name: "Visiogrit",
    category: "Studio Brand & Marketing Site",
    cardDescription:
      "Studio marketing site with modular architecture, motion, and contact flow—positioned for technical founders and product-led teams.",
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
      "Cyan-on-obsidian visual system with grid and glow accents",
      "Portfolio wired to shipped client and product work",
      "Custom domain deployment on Vercel",
    ],
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((study) => study.slug === slug);
}
