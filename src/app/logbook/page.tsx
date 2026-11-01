import type { Metadata } from 'next';
import { Masthead } from '@/components/editorial/Masthead';
import { RuleRow } from '@/components/editorial/RuleRow';
import s from '@/components/editorial/editorial.module.css';

export const metadata: Metadata = {
  title: 'Logbook',
  description: 'Manifestos, notes and essays by Lucas Feliciano.',
};

const entries = [
  {
    href: '/logbook/escolas-publicas-vivas',
    title: 'Escolas Públicas Vivas',
    excerpt:
      'Por um concurso nacional de arquitetura para escolas públicas. A escola pública não deve parecer um lugar de contenção.',
    date: ['May. 11', '2026'],
    tag: 'Manifesto',
  },
];

export default function LogbookPage() {
  return (
    <main className={s.page}>
      <Masthead lines={['Logbook']} lede="Manifestos, notes and essays." />
      <ul className={s.list}>
        {entries.map((e) => (
          <RuleRow
            key={e.href}
            href={e.href}
            title={e.title}
            description={e.excerpt}
            meta={[e.tag, ...e.date]}
            fallback="01"
          />
        ))}
      </ul>
    </main>
  );
}
