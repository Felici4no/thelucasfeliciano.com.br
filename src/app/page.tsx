import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/hero/HeroSection";
import { EvidenceBelt } from "@/components/sections/EvidenceBelt";
import { SelectedSystems } from "@/components/sections/SelectedSystems";
import { Learning } from "@/components/sections/Learning";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <EvidenceBelt />
        <SelectedSystems />
        <Learning />
        <Contact />
      </main>
    </>
  );
}
