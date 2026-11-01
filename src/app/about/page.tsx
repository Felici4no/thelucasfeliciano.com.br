import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { events, certifications } from '@/data/learning';
import { Masthead } from '@/components/editorial/Masthead';
import { RuleRow } from '@/components/editorial/RuleRow';
import { siteConfig } from '@/lib/seo';
import s from '@/components/editorial/editorial.module.css';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Lucas Feliciano is a software engineer and systems builder from São Paulo: recognition, services, working method and background.',
};

const recognition = [
  { result: '1st place', event: 'ElevenLabs Worldwide Hackathon SP', id: 'voculos' },
  { result: '1st place', event: 'Devs de Impacto Rio', id: 'alimapa' },
  { result: 'Winner', event: 'Tech Mahindra Challenge', id: 'ecosimulator' },
  { result: 'Invited exhibitor', event: 'Latam Mobility 2025', id: 'ecosimulator' },
  { result: 'Invited', event: 'Quantum Computing Forum · TDC 2024', id: null },
  { result: '3rd place', event: 'AfroCapital Hack · Feira Preta', id: 'abias' },
  { result: 'Competing', event: "Colosseum Crypto World's Fair", id: 'upay3food' },
];

const services = [
  {
    title: 'AI agents and automation',
    pitch: 'Agents, MCP servers and voice assistants that do real work instead of demoing well.',
    examples: ['VOCULOS', 'UPAY3FOOD', 'Alimapa'],
  },
  {
    title: 'Web products and MVPs',
    pitch: 'Next.js and React products taken from idea to live, with payments and real users included.',
    examples: ['Dolarizando-se', 'GerarContrato', 'BVM12'],
  },
  {
    title: 'Data and coordination systems',
    pitch: 'Dashboards, telemetry and coordination protocols that make something complex easy to read and act on.',
    examples: ['EcoSimulator 1.0', 'Talent Hack'],
  },
];

const method = [
  { title: 'Understand', text: 'Define the problem, who it is for and what “done” looks like before writing code.' },
  { title: 'Prototype', text: 'Build a working version fast, so decisions are made on something you can click.' },
  { title: 'Ship', text: 'Deploy, document and hand over with the source code. No black boxes.' },
  { title: 'Evolve', text: 'Measure how it is used and iterate on what matters, or hand it to your team.' },
];

function SectionTitle({ children }: { children: string }) {
  return <h2 className={s.sectionTitle}>{children}</h2>;
}

export default function About() {
  const nameOf = (id: string | null) => (id ? projects.find((p) => p.id === id)?.name : undefined);

  return (
    <main className={s.page}>
      <Masthead lines={['About']} />

      <ul className={s.list}>
        <li className={s.row}>
          <div className={s.rowLink}>
            <div className={s.rowText}>
              <p className={s.lead}>
                Software engineer and systems builder from São Paulo. I build AI agents, web products and
                coordination systems — mostly in small teams, often under hackathon pressure — and keep working on
                what wins until people can really use it.
              </p>
              <p className={s.meta}>
                <span>São Paulo, Brasil</span>
                <span>{siteConfig.availability ?? 'Software Engineering, FIAP'}</span>
              </p>
            </div>
            <div className={s.thumb}>
              <Image
                src="/about/lucas.jpg"
                alt="Lucas Feliciano speaking into a microphone at an event"
                fill
                priority
                sizes="(max-width: 700px) 30vw, 300px"
                className={s.thumbImg}
              />
            </div>
          </div>
        </li>
      </ul>

      <div className={s.prose} style={{ marginTop: 'clamp(28px, 4vw, 48px)' }}>
        <p>
          First place at the <Link href="/projects/voculos">ElevenLabs Worldwide Hackathon São Paulo</Link> and at{' '}
          <Link href="/projects/alimapa">Devs de Impacto Rio</Link>; tech lead of{' '}
          <Link href="/projects/dolarizando-se">Dolarizando-se</Link>, a platform with 15,000 organic followers.{' '}
          <Link href="/projects/ecosimulator">EcoSimulator 1.0</Link> won the Tech Mahindra challenge and was invited
          to exhibit at Latam Mobility 2025.
        </p>
        <p>
          Professionally, I worked as a software engineer on the <Link href="/projects/bvm12">BVM12</Link> platform
          (Java, Docker, SQL, TypeScript) and build the educational system of Escola da Cidade, where architecture and
          development meet. The work focuses on problems where technology meets public interest: health, financial
          inclusion, accessibility and education.
        </p>
      </div>

      <section className={s.section}>
        <SectionTitle>Recognition</SectionTitle>
        <ul className={s.list}>
          {recognition.map((r) => (
            <RuleRow
              key={r.event}
              title={r.event}
              href={r.id ? `/projects/${r.id}` : undefined}
              meta={[r.result, nameOf(r.id) ?? '—']}
              fallback={null}
            />
          ))}
        </ul>
      </section>

      <section className={s.section}>
        <SectionTitle>Services</SectionTitle>
        <ul className={s.list}>
          {services.map((sv) => (
            <RuleRow key={sv.title} title={sv.title} description={sv.pitch} meta={sv.examples} fallback={null} />
          ))}
        </ul>
      </section>

      <section className={s.section}>
        <SectionTitle>Method</SectionTitle>
        <ul className={s.list}>
          {method.map((m, i) => (
            <RuleRow
              key={m.title}
              title={m.title}
              description={m.text}
              meta={[String(i + 1).padStart(2, '0')]}
              fallback={null}
            />
          ))}
        </ul>
      </section>

      <section className={s.section}>
        <SectionTitle>Events</SectionTitle>
        <ul className={s.list}>
          {events.map((e) => (
            <RuleRow key={e.title} title={e.title} meta={[e.when, e.detail]} fallback={null} />
          ))}
        </ul>
      </section>

      <section className={s.section}>
        <SectionTitle>Courses</SectionTitle>
        <div>
          {certifications.map((c) => (
            <div key={`${c.when}-${c.title}`} className={s.kv} style={{ paddingBottom: 18 }}>
              <span className={s.meta}>{c.when}<br />{c.detail}</span>
              <p className={s.kvValue} style={{ fontSize: 'var(--t-body)' }}>{c.title}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
