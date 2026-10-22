import Link from 'next/link';
import { CtaLink } from '@/components/ui/CtaLink';
import { primaryContactHref, primaryContactLabel } from '@/lib/contact';
import { projects } from '@/data/projects';
import { tocItems } from '@/lib/sections';
import { HeaderSearch, type SearchEntry } from './HeaderSearch';
import styles from './Header.module.css';

const entries: SearchEntry[] = [
  ...tocItems.filter((t) => t.id !== 'lead').flatMap((t) => [
    { label: t.label, hint: 'Section', id: t.id },
    ...(t.children ?? []).map((c) => ({ label: c.label, hint: 'Section', id: c.id })),
  ]),
  { label: 'Contact email', hint: 'Section', id: 'contact' },
  ...projects.map((p) => ({ label: p.name, hint: p.year ? `Project · ${p.year}` : 'Project', id: `sel-${p.id}` })),
];

export function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.brand} aria-label="Lucas Feliciano, home">
        <span className={styles.logo} aria-hidden="true">LF</span>
        <span className={styles.words}>
          <span className={styles.wordmark}>Lucas Feliciano</span>
          <span className={styles.tag}>The portfolio of a software engineer</span>
        </span>
      </Link>

      <HeaderSearch entries={entries} />

      <nav className={styles.nav} aria-label="Main">
        <Link href="/portfolio" className={`${styles.link} ${styles.hideSmall}`}>Projects</Link>
        <Link href="/logbook" className={`${styles.link} ${styles.hideSmall}`}>Logbook</Link>
        <CtaLink id="header" href={primaryContactHref} className={styles.cta}>
          {primaryContactLabel}
        </CtaLink>
      </nav>
    </header>
  );
}
