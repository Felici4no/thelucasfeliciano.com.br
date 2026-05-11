import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Logbook | Lucas Feliciano',
  description: 'Manifestos and ideas.',
};

export default function LogbookPage() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <header className={styles.header}>
          <h1 className={styles.title}>Logbook</h1>
          <p className={styles.description}>
            A collection of manifestos, notes, and technical essays.
          </p>
        </header>

        <div className={styles.entries}>
          <Link href="/logbook/escolas-publicas-vivas" className={styles.entryLink} style={{ textDecoration: 'none' }}>
            <article className={styles.entry}>
              <div className={styles.entryMeta}>
                <span className={styles.entryDate}>2026-05-10</span>
                <span className={styles.entryTag}>MANIFESTO</span>
              </div>
              <h2 className={styles.entryTitle}>Escolas Públicas Vivas</h2>
              <p className={styles.entryExcerpt}>
                Por um concurso nacional de arquitetura para escolas públicas. A escola pública não deve parecer um lugar de contenção. Deve parecer um lugar onde o país decidiu investir no futuro.
              </p>
            </article>
          </Link>
        </div>
      </div>
    </main>
  );
}
