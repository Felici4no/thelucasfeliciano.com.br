import Link from 'next/link';
import { CtaLink } from '@/components/ui/CtaLink';
import { primaryContactHref, primaryContactLabel } from '@/lib/contact';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.name}>Lucas Feliciano</Link>
      <nav className={styles.nav} aria-label="Main">
        <Link href="/#selected" className={`${styles.link} ${styles.hideSmall}`}>Projects</Link>
        <Link href="/#about" className={`${styles.link} ${styles.hideSmall}`}>About</Link>
        <Link href="/logbook" className={`${styles.link} ${styles.hideSmall}`}>Logbook</Link>
        <CtaLink id="header" href={primaryContactHref} className={styles.cta}>
          {primaryContactLabel}
        </CtaLink>
      </nav>
    </header>
  );
}
