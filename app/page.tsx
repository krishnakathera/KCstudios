import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { BeforeAfterSection } from "@/components/sections/BeforeAfter";
import { Gear } from "@/components/sections/Gear";
import { About } from "@/components/sections/About";
import { Pricing } from "@/components/sections/Pricing";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Portfolio />
        <BeforeAfterSection />
        <Gear />
        <About />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
