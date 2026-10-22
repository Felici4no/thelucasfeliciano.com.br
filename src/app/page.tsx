import { Header } from "@/components/layout/Header";
import { SectionNav } from "@/components/layout/SectionNav";
import { HeroSection } from "@/components/hero/HeroSection";
import { EvidenceBelt } from "@/components/sections/EvidenceBelt";
import { Services } from "@/components/sections/Services";
import { SelectedSystems } from "@/components/sections/SelectedSystems";
import { Process } from "@/components/sections/Process";
import { AboutMe } from "@/components/sections/AboutMe";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <SectionNav />
      <main>
        <HeroSection />
        <EvidenceBelt />
        <Services />
        <SelectedSystems />
        <Process />
        <AboutMe />
      </main>
      <Contact />
    </>
  );
}
