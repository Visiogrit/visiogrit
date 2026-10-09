import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Methodology } from "@/components/Methodology";
import { Ethos } from "@/components/Ethos";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Methodology />
        <Ethos />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
