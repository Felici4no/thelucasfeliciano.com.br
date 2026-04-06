import { HeroSection } from "@/components/hero/HeroSection";
import { OrbitSection } from "@/components/orbit/OrbitSection";

export default function Home() {
  return (
    <main>
      {/* 
        The hero is position:fixed, so it always covers the viewport.
        This spacer creates the scroll runway for the decay transition.
        200vh = 100vh hero at rest + 100vh transition distance.
      */}
      <HeroSection />
      <div style={{ height: '200vh' }} aria-hidden="true" />
      <OrbitSection />
    </main>
  );
}
