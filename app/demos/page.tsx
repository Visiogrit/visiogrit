import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DemosHub } from "@/components/demos/DemosHub";

export const metadata: Metadata = {
  title: "Concept demos — Visiogrit",
  description:
    "Filterable concept sites for global tech and local business verticals—preview how Visiogrit designs for your sector.",
  openGraph: {
    title: "Concept demos — Visiogrit",
    description: "Explore concept marketing sites by vertical, built by Visiogrit.",
  },
};

export default function DemosPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-16">
        <DemosHub />
      </main>
      <Footer />
    </>
  );
}
