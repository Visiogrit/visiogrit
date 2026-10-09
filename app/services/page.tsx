import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HirePage } from "@/components/HirePage";
import { HIRE_PROFILE } from "@/lib/offerings";

export const metadata: Metadata = {
  title: "Services & Packages — Visiogrit",
  description: HIRE_PROFILE.shortAbout,
  openGraph: {
    title: "Services & Packages — Visiogrit",
    description: HIRE_PROFILE.shortAbout,
  },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <HirePage />
      </main>
      <Footer />
    </>
  );
}
