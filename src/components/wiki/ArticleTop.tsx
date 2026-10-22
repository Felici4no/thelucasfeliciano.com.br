import Link from 'next/link';
import { Info } from 'lucide-react';
import { CtaLink } from '@/components/ui/CtaLink';
import { primaryContactHref, primaryContactLabel } from '@/lib/contact';
import { siteConfig } from '@/lib/seo';
import { Infobox } from './Infobox';
import w from './wiki.module.css';

/** Title, hatnote, availability notice, infobox and the lead paragraphs. */
export function ArticleTop() {
  return (
    <section id="lead" className={w.lead}>
      <h2 className={w.articleTitle}>Lucas Feliciano</h2>
      <p className={w.tagline}>From the portfolio of a software engineer and systems builder</p>

      <p className={w.hatnote}>
        For the complete list of projects, see the <Link href="/portfolio">full index</Link>.
      </p>

      {siteConfig.availability && (
        <div className={w.ambox} role="note">
          <Info size={20} className={w.amboxIcon} aria-hidden="true" />
          <span>
            <b>{siteConfig.availability}.</b> Have a product, an agent or a messy system that needs to work?{' '}
            <CtaLink id="lead-notice" href={primaryContactHref}>
              {primaryContactLabel} →
            </CtaLink>
          </span>
        </div>
      )}

      <Infobox />

      <p>
        <b>Lucas Feliciano</b> is a software engineer and systems builder from São Paulo, Brazil. He builds AI agents,
        web products and coordination systems, mostly in small teams and under hackathon pressure, and keeps working on
        what wins until people can really use it.
      </p>
      <p>
        He took first place at the <Link href="/projects/voculos">ElevenLabs Worldwide Hackathon São Paulo</Link> and at{' '}
        <Link href="/projects/alimapa">Devs de Impacto Rio</Link>, and is the tech lead of{' '}
        <Link href="/projects/dolarizando-se">Dolarizando-se</Link>, a platform with an audience of 15,000 organic
        followers.
        <sup className={w.ref}>
          <a href="#references">[1]</a>
        </sup>{' '}
        His work focuses on problems where technology meets public interest: health, financial inclusion, accessibility
        and education.
      </p>
    </section>
  );
}
