"use client";

import { DemoAnchor } from "@/components/demos/DemoAnchor";

type DemoBusinessFooterProps = {
  brandName: string;
  variant: "devtools" | "stone-gallery" | "pizzeria" | "automotive";
};

const FOOTER_COPY: Record<
  DemoBusinessFooterProps["variant"],
  { columns: { title: string; links: { label: string; href: string }[] }[]; note: string }
> = {
  devtools: {
    columns: [
      {
        title: "Product",
        links: [
          { label: "API reference", href: "#developers" },
          { label: "Pricing", href: "#pricing" },
          { label: "Changelog", href: "#product" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "Security", href: "#trust" },
          { label: "Status", href: "#trust" },
          { label: "Contact sales", href: "/#contact" },
        ],
      },
    ],
    note: "SOC 2 Type II · GDPR-ready · 99.99% uptime SLA on Scale+",
  },
  "stone-gallery": {
    columns: [
      {
        title: "Catalog",
        links: [
          { label: "Slab gallery", href: "#materials" },
          { label: "Applications", href: "#materials" },
          { label: "Spec sheets", href: "#specs" },
        ],
      },
      {
        title: "Trade",
        links: [
          { label: "Export desk", href: "/#contact" },
          { label: "Showrooms", href: "/#contact" },
          { label: "Projects", href: "#projects" },
        ],
      },
    ],
    note: "Lead times vary by lot · Freight quotes in 24h on business days",
  },
  pizzeria: {
    columns: [
      {
        title: "Visit",
        links: [
          { label: "Menu", href: "#menu" },
          { label: "Hours", href: "#visit" },
          { label: "Catering", href: "/#contact" },
        ],
      },
      {
        title: "Order",
        links: [
          { label: "Delivery", href: "/#contact" },
          { label: "Pick up", href: "/#contact" },
          { label: "Reserve table", href: "/#contact" },
        ],
      },
    ],
    note: "Contains gluten · Vegan options marked on menu · Allergen info on request",
  },
  automotive: {
    columns: [
      {
        title: "Shop",
        links: [
          { label: "New inventory", href: "#inventory" },
          { label: "Pre-owned", href: "#inventory" },
          { label: "Test drive", href: "/#contact" },
        ],
      },
      {
        title: "Own",
        links: [
          { label: "Service", href: "#service" },
          { label: "Finance", href: "#finance" },
          { label: "Trade-in", href: "/#contact" },
        ],
      },
    ],
    note: "Service dept Mon–Sat 7:00–19:00 · Roadside assistance on certified pre-owned",
  },
};

export function DemoBusinessFooter({ brandName, variant }: DemoBusinessFooterProps) {
  const { columns, note } = FOOTER_COPY[variant];
  const isDark = variant === "devtools" || variant === "stone-gallery";

  return (
    <footer
      className={
        isDark
          ? "border-t border-white/10 bg-black/40 text-stone-300"
          : "border-t border-stone-200 bg-stone-100 text-stone-600"
      }
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div>
            <p className={isDark ? "text-lg font-semibold text-white" : "text-lg font-semibold text-stone-900"}>
              {brandName}
            </p>
            <p className="mt-2 max-w-sm text-sm">{note}</p>
          </div>
          <div className="flex gap-12">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-xs font-semibold uppercase tracking-wider opacity-70">{col.title}</p>
                <ul className="mt-3 space-y-2 text-sm">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith("#") ? (
                        <DemoAnchor href={link.href} className="hover:underline">
                          {link.label}
                        </DemoAnchor>
                      ) : (
                        <a href={link.href} className="hover:underline">
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-10 border-t border-current/10 pt-6 text-center text-xs opacity-60">
          Concept demo · Visiogrit portfolio · Stock photography for illustration
        </p>
      </div>
    </footer>
  );
}
