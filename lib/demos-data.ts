export type DemoCategoryId = "tech" | "stone" | "food" | "automotive";

export type DemoCategory = {
  id: DemoCategoryId | "all";
  label: string;
};

export const DEMO_CATEGORIES: DemoCategory[] = [
  { id: "all", label: "All" },
  { id: "tech", label: "Tech" },
  { id: "stone", label: "Stone & surfaces" },
  { id: "food", label: "Food" },
  { id: "automotive", label: "Automotive" },
];

export type ConceptDemo = {
  slug: string;
  title: string;
  category: DemoCategoryId;
  styleLabel: string;
  description: string;
  features: string[];
  defaultBrand: string;
  coverImage: string;
};

export const CONCEPT_DEMOS: ConceptDemo[] = [
  {
    slug: "devtools",
    title: "Developer platform",
    category: "tech",
    styleLabel: "Dark & precise",
    description:
      "Product marketing for an API platform—docs-adjacent layout, trust metrics, and a clear trial path.",
    features: ["Feature grid with code-adjacent UI", "Pricing strip", "SOC2-style trust row", "Start trial CTA"],
    defaultBrand: "Northline API",
    coverImage: "/demos/devtools/cover.jpg",
  },
  {
    slug: "stone-gallery",
    title: "Stone & granite gallery",
    category: "stone",
    styleLabel: "Premium & material-led",
    description:
      "Trade catalog for slabs and tiles—hero materials, category grid, specs, and quote requests for global buyers.",
    features: ["Slab hero carousel", "Category grid", "Material specs strip", "Quote & showroom CTA"],
    defaultBrand: "Atlas Stone Co.",
    coverImage: "/demos/stone-gallery/cover.jpg",
  },
  {
    slug: "pizzeria",
    title: "Pizzeria",
    category: "food",
    styleLabel: "Warm & Italian",
    description:
      "Neighborhood restaurant site with menu highlights, order CTA, hours, and table booking—built for mobile-first orders.",
    features: ["Menu cards with specials", "Order online CTA", "Hours & location", "Table booking strip"],
    defaultBrand: "Sole Pizzeria",
    coverImage: "/demos/pizzeria/cover.jpg",
  },
  {
    slug: "automotive",
    title: "Auto dealer & service",
    category: "automotive",
    styleLabel: "Bold & trustworthy",
    description:
      "Inventory-forward dealer layout with service menu, financing strip, and certified-service trust badges.",
    features: ["Featured inventory cards", "Service menu + book CTA", "Financing / trade-in strip", "Warranty trust row"],
    defaultBrand: "Summit Motors",
    coverImage: "/demos/automotive/cover.jpg",
  },
];

export function getConceptDemo(slug: string): ConceptDemo | undefined {
  return CONCEPT_DEMOS.find((d) => d.slug === slug);
}
