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
  role: string;
  coverImage: string;
  coverImageAlt: string;
  gallery: { src: string; alt: string }[];
  featured?: boolean;
};

function mediaBase(slug: string) {
  return `/work/${slug}`;
}

const CLIENT_CASE_STUDIES: CaseStudy[] = [
  {
    id: "bank-auction-list",
    slug: "bank-auction-list",
    name: "Listing Discovery Dashboard",
    category: "Data Product & Discovery UX",
    cardDescription:
      "Centralized listing product with reserve pricing, location labels, and auction dates optimized for mobile and desktop scanning.",
    tags: ["Next.js", "Data Product", "Dashboard", "Vercel"],
    gradient: "from-sky-400/30 via-slate-900 to-indigo-500/25",
    liveUrl: "https://bank-auction-list.vercel.app/",
    overview:
      "Operations and research teams often chase inventory across fragmented supplier feeds. This product unifies structured listings into one scannable dashboard.",
    challenge:
      "High-volume, repetitive listing data must stay readable—source labels, price tiers, geography, and dates without visual noise.",
    solution:
      "Card-based layout with consistent price formatting, geography labels, and date prominence. Positioning emphasizes discovery utility over raw data dumps.",
    outcomes: [
      "Unified view of live and upcoming reserve-price listings",
      "Multi-source aggregation presented in a single product surface",
      "Production deployment on Vercel for fast iteration",
      "Listing cards tuned for dense feeds at scale",
    ],
    stack: ["Next.js", "Vercel", "Data aggregation", "Tailwind CSS"],
    role: "Product UX, visual system, and build",
    coverImage: `${mediaBase("bank-auction-list")}/cover.webp`,
    coverImageAlt: "Analytics dashboard on a laptop showing charts and metrics",
    gallery: [
      {
        src: `${mediaBase("bank-auction-list")}/cover.webp`,
        alt: "Light-themed data dashboard on a desk",
      },
    ],
    featured: true,
  },
  {
    id: "kanth-foundation",
    slug: "kanth-foundation",
    name: "Kanth Foundation",
    category: "Nonprofit Web Platform",
    cardDescription:
      "Mission-led site with program storytelling, fundraising campaigns, volunteer paths, and trust-focused compliance presentation.",
    tags: ["Next.js", "Nonprofit", "Donations", "Content IA"],
    gradient: "from-emerald-500/25 via-slate-900 to-cyan-500/20",
    liveUrl: "https://kanth-foundation-site.vercel.app/",
    overview:
      "A community foundation running health, youth, and food-security programs needed a single digital home that feels warm, credible, and action-oriented.",
    challenge:
      "Multiple initiatives, campaigns with funding goals, and transparency requirements had to coexist in one clear hierarchy without overwhelming visitors or burying the donate path.",
    solution:
      "Structured flagship programs, pillar pages, and featured causes with progress framing. Testimonials, volunteer highlights, and governance cues in the footer support donor confidence.",
    outcomes: [
      "Six program pillars with dedicated donate and participate CTAs",
      "Three active campaigns with goal-oriented progress UI",
      "Volunteer and news flows integrated into primary navigation",
      "Contact and trust signals surfaced for verification",
    ],
    stack: ["Next.js", "Vercel", "Tailwind CSS", "Responsive UI"],
    role: "Brand, UX, and front-end implementation",
    coverImage: `${mediaBase("kanth-foundation")}/cover.webp`,
    coverImageAlt: "Volunteers collaborating at a community nonprofit event",
    gallery: [
      {
        src: `${mediaBase("kanth-foundation")}/cover.webp`,
        alt: "Community volunteers working together outdoors",
      },
    ],
  },
  {
    id: "ssb-granites",
    slug: "ssb-granites",
    name: "SSB Granites",
    category: "B2B Catalog & Marketing Site",
    cardDescription:
      "Product-led site for a surfaces supplier—hero carousel, category grid, testimonials, and contact paths built for trade buyers and specifiers.",
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
    role: "Brand direction, layout, and implementation",
    coverImage: `${mediaBase("ssb-granites")}/cover.webp`,
    coverImageAlt: "Natural stone slabs and marble surfaces in a showroom setting",
    gallery: [
      {
        src: `${mediaBase("ssb-granites")}/cover.webp`,
        alt: "Marble and stone materials for architecture and interiors",
      },
    ],
  },
];

const STUDIO_CASE_STUDY: CaseStudy = {
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
  role: "Studio brand, design system, and engineering",
  coverImage: `${mediaBase("visiogrit")}/cover.webp`,
  coverImageAlt: "Designer workspace with laptop and creative tools",
  gallery: [
    {
      src: `${mediaBase("visiogrit")}/cover.webp`,
      alt: "Minimal studio desk setup for brand and product design",
    },
  ],
};

/** Client and product work first; studio site always last. */
export const CASE_STUDIES: CaseStudy[] = [...CLIENT_CASE_STUDIES, STUDIO_CASE_STUDY];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((study) => study.slug === slug);
}

export function getFeaturedCaseStudy(): CaseStudy | undefined {
  return CASE_STUDIES.find((study) => study.featured);
}
