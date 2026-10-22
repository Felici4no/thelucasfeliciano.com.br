import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/hero/HeroSection";
import { HeroCover } from "@/components/hero/HeroCover";
import { SectionToc } from "@/components/wiki/SectionToc";
import { SectionBar } from "@/components/wiki/SectionBar";
import { ArticleTop } from "@/components/wiki/ArticleTop";
import { Recognition } from "@/components/wiki/Recognition";
import { Services } from "@/components/wiki/Services";
import { Projects } from "@/components/wiki/Projects";
import { Method } from "@/components/wiki/Method";
import { Background } from "@/components/wiki/Background";
import { ContactLinks } from "@/components/wiki/ContactLinks";
import { SeeAlso } from "@/components/wiki/SeeAlso";
import { References } from "@/components/wiki/References";
import w from "@/components/wiki/wiki.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <SectionBar />
      <main>
        <HeroSection cover={<HeroCover />} />
        <div className={w.page}>
          <div className={w.layout}>
            <aside className={w.side}>
              <SectionToc />
            </aside>
            <article className={w.article}>
              <ArticleTop />
              <Recognition />
              <Services />
              <Projects />
              <Method />
              <Background />
              <ContactLinks />
              <SeeAlso />
              <References />
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
