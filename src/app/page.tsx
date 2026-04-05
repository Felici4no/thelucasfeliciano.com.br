import { HeroSection } from "@/components/hero/HeroSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      {/* Spacer to allow scrolling and testing scroll progress */}
      <div style={{ height: "150vh", background: "var(--bg)" }} />
    </main>
  );
}
