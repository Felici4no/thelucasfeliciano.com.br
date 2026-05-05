import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.name}>Lucas Feliciano</div>
        <nav className={styles.nav}>
          <span className={styles.coord}>23.5505° S, 46.6333° W</span>
          <span className={styles.label}>BUILDER / ARCHITECT / DEV</span>
        </nav>
      </div>
      <div className={styles.line} />
    </header>
  );
}
