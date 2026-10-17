import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concept demos — Visiogrit",
  description:
    "Explore concept marketing sites by vertical—tech, stone & surfaces, food, and automotive. Built by Visiogrit.",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function DemosRootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
