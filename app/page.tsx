import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { BeforeAfterSection } from "@/components/sections/BeforeAfter";
import { Gear } from "@/components/sections/Gear";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <BeforeAfterSection />
        <Gear />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
