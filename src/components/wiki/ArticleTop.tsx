import Link from 'next/link';
import { Info } from 'lucide-react';
import { CtaLink } from '@/components/ui/CtaLink';
import { primaryContactHref } from '@/lib/contact';
import { siteConfig } from '@/lib/seo';
import { Infobox } from './Infobox';
import w from './wiki.module.css';

/** Page tabs, title, hatnote, availability notice, infobox and the lead paragraphs. */
export function ArticleTop() {
  return (
    <section id="lead">
      <div className={w.tabs}>
        <ul className={w.tabList}>
          <li><span className={w.active}>Article</span></li>
          <li><a href="#contact">Talk</a></li>
        </ul>
        <ul className={w.tabList}>
          <li><span className={w.active}>Read</span></li>
          <li><Link href="/portfolio">Index</Link></li>
          <li><Link href="/logbook">Logbook</Link></li>
        </ul>
      </div>

      <h2 className={w.articleTitle}>Lucas Feliciano</h2>
      <p className={w.tagline}>From the portfolio of a software engineer and systems builder</p>

      <p className={w.hatnote}>
        For the complete list of projects, see the <Link href="/portfolio">project index</Link>.
      </p>

      {siteConfig.availability && (
        <div className={w.ambox} role="note">
          <Info size={20} className={w.amboxIcon} aria-hidden="true" />
          <span>
            <b>{siteConfig.availability}.</b> Have a product, an agent or a messy system that needs to work?{' '}
            <CtaLink id="lead-notice" href={primaryContactHref}>
              Get in touch →
            </CtaLink>
          </span>
        </div>
      )}

      <Infobox />

      <p>
        <b>Lucas Feliciano</b> is a software engineer and systems builder from São Paulo, Brazil. Feliciano builds AI
        agents, web products and coordination systems, mostly in small teams and under hackathon pressure, and keeps
        working on what wins until people can really use it.
      </p>
      <p>
        Feliciano took first place at the <Link href="/projects/voculos">ElevenLabs Worldwide Hackathon São Paulo</Link>{' '}
        and at <Link href="/projects/alimapa">Devs de Impacto Rio</Link>, and is the tech lead of{' '}
        <Link href="/projects/dolarizando-se">Dolarizando-se</Link>, a platform with an audience of 15,000 organic
        followers.
        <sup className={w.ref}>
          <a href="#references">[1]</a>
        </sup>{' '}
        The work focuses on problems where technology meets public interest: health, financial inclusion,
        accessibility and education.
      </p>
    </section>
  );
}
