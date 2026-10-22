import Link from 'next/link';
import { CtaLink } from '@/components/ui/CtaLink';
import { mailtoHref } from '@/lib/contact';
import { siteConfig } from '@/lib/seo';
import { ProjectLink } from './SceneContext';
import styles from './SceneText.module.css';

const columns = [
  {
    title: 'Work',
    links: [
      { label: 'UPAY3FOOD', href: '/projects/upay3food', scene: 'upay3food' },
      { label: 'VOCULOS', href: '/projects/voculos', scene: 'voculos' },
      { label: 'Dolarizando-se', href: '/projects/dolarizando-se', scene: 'dolarizando-se' },
      { label: 'BVM12', href: '/projects/bvm12', scene: 'bvm12' },
      { label: 'All projects', href: '/portfolio', scene: 'all' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'Recognition', href: '/about#recognition' },
      { label: 'Services', href: '/about#services' },
      { label: 'Background', href: '/about#background' },
      { label: 'Working method', href: '/about#method' },
    ],
  },
];

const contact = [
  { id: 'email', label: 'Email', href: mailtoHref('Project inquiry', 'Hi Lucas,\n\n'), external: false },
  siteConfig.links.linkedin && { id: 'linkedin', label: 'LinkedIn', href: siteConfig.links.linkedin, external: true },
  siteConfig.links.whatsapp && { id: 'whatsapp', label: 'WhatsApp', href: siteConfig.links.whatsapp, external: true },
  { id: 'github', label: 'GitHub', href: siteConfig.links.github, external: true },
  { id: 'instagram', label: 'Instagram', href: siteConfig.links.instagram, external: true },
].filter((c): c is { id: string; label: string; href: string; external: boolean } => Boolean(c));

/** Brand and the three columns, laid out like a site footer on the sky. */
export function SceneTop() {
  return (
    <>
      <div className={styles.brand}>
        <div className={styles.mark}>
          <svg className={styles.crown} viewBox="-30 -40 60 46" aria-hidden="true" focusable="false">
            <path d="M-24 2L-24 -24L-11 -11L0 -34L11 -11L24 -24L24 2Z" transform="translate(3 3)" fill="#e4543a" />
            <path d="M-24 2L-24 -24L-11 -11L0 -34L11 -11L24 -24L24 2Z" fill="#f3c63c" stroke="#171414" strokeWidth="4" strokeLinejoin="round" />
          </svg>
          <h1 className={styles.name}>Lucas Feliciano</h1>
        </div>
        <p className={styles.about}>
          Software engineer. Builds AI products, agents and web systems, from first prototype to production.
        </p>
      </div>

      <nav className={styles.nav} aria-label="Site">
        {columns.map((col) => (
          <div key={col.title} className={styles.col}>
            <h2>{col.title}</h2>
            <ul>
              {col.links.map((l) => (
                <li key={l.href}>
                  {'scene' in l ? (
                    <ProjectLink id={l.scene} href={l.href} className={styles.link}>{l.label}</ProjectLink>
                  ) : (
                    <Link href={l.href} className={styles.link}>{l.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className={styles.col}>
          <h2>Contact</h2>
          <ul>
            {contact.map((c) => (
              <li key={c.id}>
                <CtaLink id={`scene-${c.id}`} href={c.href} className={styles.link} external={c.external}>
                  {c.label}
                </CtaLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export function SceneLegal() {
  return (
    <>
      <Link href="/portfolio" className={styles.legalLink}>Project index</Link>
      <Link href="/logbook" className={styles.legalLink}>Logbook</Link>
    </>
  );
}

export function SceneCopyright() {
  return <p className={styles.copyText}>©{new Date().getFullYear()} LUCAS FELICIANO. All rights reserved.</p>;
}
