import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/hero/HeroSection";
import { Manifesto } from "@/components/sections/Manifesto";
import { Signals } from "@/components/sections/Signals";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { FieldNotes } from "@/components/sections/FieldNotes";
import { OperatingPrinciples } from "@/components/sections/OperatingPrinciples";
import { Fields } from "@/components/sections/Fields";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Manifesto />
        <Signals />
        <SelectedWork />
        <FieldNotes />
        <OperatingPrinciples />
        <Fields />
        <About />
        <Contact />
      </main>
    </>
  );
}
