import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Methodology } from "@/components/Methodology";
import { TrustBand } from "@/components/TrustBand";
import { DemosBand } from "@/components/demos/DemosBand";
import { Portfolio } from "@/components/Portfolio";
import { PackagesTeaser } from "@/components/PackagesTeaser";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Methodology />
        <TrustBand />
        <DemosBand />
        <Portfolio />
        <PackagesTeaser />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
