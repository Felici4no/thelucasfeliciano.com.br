import Link from 'next/link';
import { SectionHead } from '@/components/ui/SectionHead';
import { CtaLink } from '@/components/ui/CtaLink';
import { mailtoHref } from '@/lib/contact';
import styles from './Services.module.css';

const services = [
  {
    id: 'agents',
    title: 'AI agents & automation',
    pitch: 'Agents, MCP servers and voice assistants that do real work instead of demoing well.',
    deliverables: ['Working prototype and repository', 'Tool/API integrations', 'Hand-off notes'],
    proof: [
      { label: 'VOCULOS · 1st place', href: '/projects/voculos' },
      { label: 'UPAY3FOOD · MCP server', href: '/projects/upay3food' },
      { label: 'Alimapa · 1st place', href: '/projects/alimapa' },
    ],
  },
  {
    id: 'web',
    title: 'Web products & MVPs',
    pitch: 'Next.js and React products taken from idea to live, payments and real users included.',
    deliverables: ['Deployed product', 'Payments and auth when needed', 'Source code you own'],
    proof: [
      { label: 'Dolarizando-se · paying clients', href: '/projects/dolarizando-se' },
      { label: 'GerarContrato · live', href: '/projects/gerar-contrato' },
      { label: 'APF Fonoaudiologia · live', href: '/projects/apf-fonoaudiologia' },
    ],
  },
  {
    id: 'systems',
    title: 'Data & coordination systems',
    pitch: 'Dashboards, telemetry and coordination protocols that make something complex easy to read and act on.',
    deliverables: ['Dashboard or internal tool', 'Data model and flows', 'Documentation'],
    proof: [
      { label: 'EcoSimulator · Tech Mahindra winner', href: '/projects/ecosimulator' },
      { label: 'Talent Hack · in development', href: '/projects/talent-hack' },
      { label: 'Projeto Órbita · NASA Space Apps', href: '/projects/orbita' },
    ],
  },
];

export function Services() {
  return (
    <section id="services" className={styles.section} data-snap>
      <div className={styles.inner}>
        <SectionHead index="02" title="What I do" aside="3 ways to work together" />
        <ol className={styles.grid}>
          {services.map((s, i) => (
            <li key={s.id} className={styles.card}>
              <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.pitch}>{s.pitch}</p>

              <span className={styles.label}>You get</span>
              <ul className={styles.list}>
                {s.deliverables.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>

              <span className={styles.label}>Proof</span>
              <ul className={styles.proof}>
                {s.proof.map((p) => (
                  <li key={p.href}>
                    <Link href={p.href}>{p.label} →</Link>
                  </li>
                ))}
              </ul>

              <CtaLink
                id={`service-${s.id}`}
                href={mailtoHref(`Project inquiry: ${s.title}`, `Hi Lucas,\n\nI'd like to talk about ${s.title.toLowerCase()}.\n\nContext:\n`)}
                className={styles.cta}
              >
                Start a project like this <span aria-hidden="true">→</span>
              </CtaLink>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
