import Link from 'next/link';
import { CtaLink } from '@/components/ui/CtaLink';
import { mailtoHref } from '@/lib/contact';
import w from './wiki.module.css';

const services = [
  {
    id: 'agents',
    title: 'AI agents and automation',
    pitch: 'Agents, MCP servers and voice assistants that do real work instead of demoing well.',
    deliverables: ['a working prototype and its repository', 'tool and API integrations', 'hand-off notes'],
    examples: [
      { label: 'VOCULOS', href: '/projects/voculos' },
      { label: 'UPAY3FOOD', href: '/projects/upay3food' },
      { label: 'Alimapa', href: '/projects/alimapa' },
    ],
  },
  {
    id: 'web',
    title: 'Web products and MVPs',
    pitch: 'Next.js and React products taken from idea to live, with payments and real users included.',
    deliverables: ['a deployed product', 'payments and authentication when needed', 'source code you own'],
    examples: [
      { label: 'Dolarizando-se', href: '/projects/dolarizando-se' },
      { label: 'GerarContrato', href: '/projects/gerar-contrato' },
      { label: 'APF Fonoaudiologia', href: '/projects/apf-fonoaudiologia' },
    ],
  },
  {
    id: 'systems',
    title: 'Data and coordination systems',
    pitch: 'Dashboards, telemetry and coordination protocols that make something complex easy to read and act on.',
    deliverables: ['a dashboard or internal tool', 'the data model and flows', 'documentation'],
    examples: [
      { label: 'EcoSimulator 1.0', href: '/projects/ecosimulator' },
      { label: 'Talent Hack', href: '/projects/talent-hack' },
      { label: 'Projeto Órbita', href: '/projects/orbita' },
    ],
  },
];

export function Services() {
  return (
    <section id="services">
      <h2 className={w.h2}>What I do</h2>
      <p>Three ways to work together.</p>

      {services.map((s) => (
        <div key={s.id}>
          <h3 className={w.h3}>{s.title}</h3>
          <p>{s.pitch}</p>
          <ul>
            <li>
              <b>Deliverables:</b> {s.deliverables.join(', ')}.
            </li>
            <li>
              <b>Examples:</b>{' '}
              {s.examples.map((e, i) => (
                <span key={e.href}>
                  {i > 0 && ', '}
                  <Link href={e.href}>{e.label}</Link>
                </span>
              ))}
              .
            </li>
          </ul>
          <p className={w.bracket}>
            [
            <CtaLink
              id={`service-${s.id}`}
              href={mailtoHref(
                `Project inquiry: ${s.title}`,
                `Hi Lucas,\n\nI'd like to talk about ${s.title.toLowerCase()}.\n\nContext:\n`,
              )}
            >
              start a project like this
            </CtaLink>
            ]
          </p>
        </div>
      ))}
    </section>
  );
}
