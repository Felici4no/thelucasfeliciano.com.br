import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/hero/HeroSection";
import { EvidenceBelt } from "@/components/sections/EvidenceBelt";
import { SelectedSystems } from "@/components/sections/SelectedSystems";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <EvidenceBelt />
        <SelectedSystems />
        <Contact />
      </main>
    </>
  );
}
