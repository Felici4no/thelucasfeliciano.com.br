'use client';

import { useState } from 'react';
import styles from './page.module.css';
import { escolasPublicasVivasPT, escolasPublicasVivasEN } from '@/data/logbook/escolas-publicas-vivas';

export default function EscolasPublicasVivasPage() {
  const [lang, setLang] = useState<'pt' | 'en'>('pt');

  return (
    <main className={styles.main}>
      <article className={styles.articleContainer}>
        <div className={styles.meta}>
          <div className={styles.tags}>
            <span className={styles.tag}>MANIFESTO</span>
            <span>May 11, 2026</span>
          </div>

          <div className={styles.langToggle}>
            <button
              className={`${styles.langBtn} ${lang === 'pt' ? styles.active : ''}`}
              onClick={() => setLang('pt')}
              aria-label="Read in Portuguese"
            >
              PT
            </button>
            <button
              className={`${styles.langBtn} ${lang === 'en' ? styles.active : ''}`}
              onClick={() => setLang('en')}
              aria-label="Read in English"
            >
              EN
            </button>
          </div>
        </div>

        <div className={styles.content}>
          {lang === 'pt' ? escolasPublicasVivasPT : escolasPublicasVivasEN}
        </div>
      </article>
    </main>
  );
}
