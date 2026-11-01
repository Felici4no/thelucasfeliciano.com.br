'use client';

import Link from 'next/link';
import { useState } from 'react';
import { escolasPublicasVivasPT, escolasPublicasVivasEN } from '@/data/logbook/escolas-publicas-vivas';
import s from '@/components/editorial/editorial.module.css';

export default function EscolasPublicasVivasPage() {
  const [lang, setLang] = useState<'pt' | 'en'>('pt');

  return (
    <main className={s.page}>
      <div className={`${s.toolbar} ${s.meta}`}>
        <Link href="/logbook" className={s.navLink}>← Logbook</Link>
        <span>Manifesto · May 11, 2026</span>
        <div className={s.toggle} role="group" aria-label="Language">
          <button className={s.toggleBtn} aria-pressed={lang === 'pt'} onClick={() => setLang('pt')}>PT</button>
          <button className={s.toggleBtn} aria-pressed={lang === 'en'} onClick={() => setLang('en')}>EN</button>
        </div>
      </div>

      <article className={s.article} lang={lang === 'pt' ? 'pt-BR' : 'en'}>
        {lang === 'pt' ? escolasPublicasVivasPT : escolasPublicasVivasEN}
      </article>
    </main>
  );
}
