import Link from 'next/link';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.name}>Lucas Feliciano</Link>
        <nav className={styles.nav}>
          <span className={styles.coord}>23.5505° S, 46.6333° W</span>
          <span className={styles.label}>BUILDER / ARCHITECT / DEV</span>
          <Link href="/logbook" className={styles.logbookLink}>
            LOGBOOK
          </Link>
        </nav>
      </div>
      <div className={styles.line} />
    </header>
  );
}
