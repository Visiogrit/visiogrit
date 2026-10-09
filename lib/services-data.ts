export type ServiceIconKey =
  | "palette"
  | "layers"
  | "layout"
  | "message";

export type Service = {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: ServiceIconKey;
};

export const SERVICES: Service[] = [
  {
    id: "visual-identity",
    number: "01",
    title: "Visual Identity & Logos",
    description:
      "Engineered marks, typography systems, and brand guidelines built for technical products that need to signal precision and trust.",
    icon: "palette",
  },
  {
    id: "design-systems",
    number: "02",
    title: "Design Systems",
    description:
      "Scalable Figma components, UI kits, and design tokens that keep product teams shipping cohesive interfaces at speed.",
    icon: "layers",
  },
  {
    id: "web-product",
    number: "03",
    title: "Web & Product Architecture",
    description:
      "High-converting landing pages and SaaS interfaces that translate complex platforms into clear, conversion-ready experiences.",
    icon: "layout",
  },
  {
    id: "positioning",
    number: "04",
    title: "Technical Positioning",
    description:
      "Developer-focused messaging and visual storytelling that make infrastructure, APIs, and tooling feel inevitable.",
    icon: "message",
  },
];
