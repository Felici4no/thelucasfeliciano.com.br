import Link from 'next/link';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.name}>Lucas Feliciano</Link>
      <nav className={styles.nav}>
        <Link href="/portfolio" className={styles.link}>Work</Link>
        <Link href="/logbook" className={styles.link}>Logbook</Link>
        <a href="mailto:lucas.for.study.42@gmail.com" className={styles.link}>Contact</a>
      </nav>
    </header>
  );
}
