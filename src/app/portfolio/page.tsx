import type { Metadata } from 'next';
import { projects } from '@/data/projects';
import { Masthead } from '@/components/editorial/Masthead';
import { RuleRow } from '@/components/editorial/RuleRow';
import { indexLabel, projectMeta } from '@/lib/projectMeta';
import s from '@/components/editorial/editorial.module.css';

export const metadata: Metadata = {
  title: 'Index',
  description: 'Complete index of products, systems and tools by Lucas Feliciano.',
};

export default function PortfolioPage() {
  return (
    <main className={s.page}>
      <Masthead
        lines={['Index']}
        lede={`${projects.length} products, systems and tools, 2024 — ${new Date().getFullYear()}.`}
      />
      <ul className={s.list}>
        {projects.map((p, i) => (
          <RuleRow
            key={p.id}
            href={p.link}
            title={p.name}
            description={p.subtitle}
            meta={[indexLabel(i), ...projectMeta(p), p.role]}
            image={p.image}
            fallback={indexLabel(i)}
          />
        ))}
      </ul>
    </main>
  );
}
