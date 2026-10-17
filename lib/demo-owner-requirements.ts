/**
 * Owner briefs for concept demos — what each business must communicate to convert.
 * Dev implementation should satisfy every mustHave section on the matching route.
 */
export type DemoOwnerBrief = {
  slug: string;
  businessGoal: string;
  primaryCta: string;
  secondaryCta: string;
  mustHave: string[];
  tone: string;
};

export const DEMO_OWNER_BRIEFS: DemoOwnerBrief[] = [
  {
    slug: "devtools",
    businessGoal: "Sign up engineering teams and route enterprise buyers to sales.",
    primaryCta: "Get API keys",
    secondaryCta: "Contact sales",
    mustHave: [
      "Proof above the fold (code + product UI)",
      "Trust row (uptime, compliance)",
      "Logo social proof",
      "Developer section (SDKs, sandbox, logs)",
      "Transparent pricing + enterprise path",
      "Security/status footer links",
    ],
    tone: "Precise, dark, credible — no fluff adjectives.",
  },
  {
    slug: "stone-gallery",
    businessGoal: "Capture architect, fabricator, and importer quote requests.",
    primaryCta: "Request quote",
    secondaryCta: "Book showroom visit",
    mustHave: [
      "Full-bleed material photography",
      "Search/filter affordance",
      "Slab lots with finish + thickness + CTA per lot",
      "Applications (kitchen, facade, custom)",
      "Authority stats + export story",
      "Project/testimonial trust",
    ],
    tone: "Premium, dark gallery — stone is the hero.",
  },
  {
    slug: "pizzeria",
    businessGoal: "Drive online orders and table bookings on mobile.",
    primaryCta: "Order online",
    secondaryCta: "Reserve a table",
    mustHave: [
      "Appetizing hero photography",
      "Ratings + delivery promise",
      "Menu with photos and prices",
      "Hours, location, catering note",
      "Weekly special or promo strip",
    ],
    tone: "Warm, Italian, family-run — serif headlines.",
  },
  {
    slug: "automotive",
    businessGoal: "Move inventory, service appointments, and finance applications.",
    primaryCta: "Search inventory",
    secondaryCta: "Book service",
    mustHave: [
      "Inventory search in hero",
      "Featured vehicles with badges + monthly est.",
      "Service menu with prices",
      "Warranty + trade-in trust",
      "Finance band + test drive CTA",
    ],
    tone: "Bold, trustworthy — navy + amber accents.",
  },
];

export function getOwnerBrief(slug: string): DemoOwnerBrief | undefined {
  return DEMO_OWNER_BRIEFS.find((b) => b.slug === slug);
}
