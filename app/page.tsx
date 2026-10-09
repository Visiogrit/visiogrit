import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Domains } from "@/components/Domains";
import { Methodology } from "@/components/Methodology";
import { Ethos } from "@/components/Ethos";
import { Portfolio } from "@/components/Portfolio";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Domains />
        <Methodology />
        <Ethos />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
