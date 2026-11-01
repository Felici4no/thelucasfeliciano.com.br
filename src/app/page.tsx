import { projects } from '@/data/projects';
import { Masthead } from '@/components/editorial/Masthead';
import { RuleRow } from '@/components/editorial/RuleRow';
import { indexLabel, projectMeta } from '@/lib/projectMeta';
import s from '@/components/editorial/editorial.module.css';

export default function Home() {
  const selected = projects.filter((p) => p.tier === 'selected');
  const other = projects.filter((p) => p.tier !== 'selected');

  return (
    <main className={s.page}>
      <Masthead
        lines={['Selected', 'Work']}
        lede="Software engineer and systems builder in São Paulo. AI agents, web products and coordination systems."
      />

      <ul className={s.list} id="selected">
        {selected.map((p, i) => (
          <RuleRow
            key={p.id}
            href={p.link}
            title={p.name}
            meta={projectMeta(p)}
            description={p.subtitle}
            descWideOnly
            image={p.image}
            fallback={indexLabel(i)}
          />
        ))}
      </ul>

      {other.length > 0 && (
        <section className={s.section}>
          <h2 className={s.sectionTitle}>
            <span style={{ display: 'block' }}>Other</span>
            <span style={{ display: 'block' }}>Work</span>
          </h2>
          <ul className={s.list}>
            {other.map((p, i) => (
              <RuleRow
                key={p.id}
                href={p.link}
                title={p.name}
                meta={projectMeta(p)}
            description={p.subtitle}
            descWideOnly
                image={p.image}
                fallback={indexLabel(selected.length + i)}
              />
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
