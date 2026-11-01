import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import { RuleRow } from '@/components/editorial/RuleRow';
import { indexLabel, projectMeta } from '@/lib/projectMeta';
import s from '@/components/editorial/editorial.module.css';

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return {};
  return {
    title: project.name,
    description: project.subtitle,
    openGraph: project.image ? { images: [{ url: project.image.src }] } : undefined,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const idx = projects.findIndex((p) => p.id === id);
  if (idx === -1) notFound();

  const project = projects[idx];
  const next = projects[(idx + 1) % projects.length];
  const nextIdx = (idx + 1) % projects.length;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.name,
    description: project.description,
    creator: { '@type': 'Person', name: 'Lucas Feliciano' },
    ...(project.year ? { datePublished: project.year } : {}),
  };

  const blocks = [
    { key: 'Overview', value: project.description },
    { key: 'Problem', value: project.problem },
    { key: 'Built', value: project.whatIBuilt },
    { key: 'Result', value: project.result ?? project.status },
    { key: 'Stack', value: project.stack.length ? project.stack.join(' · ') : undefined },
  ].filter((b): b is { key: string; value: string } => Boolean(b.value));

  const links = [
    project.demo && { label: 'Live', href: project.demo },
    project.github && { label: 'Source', href: project.github },
  ].filter((l): l is { label: string; href: string } => Boolean(l));

  return (
    <main className={s.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className={`${s.toolbar} ${s.meta}`}>
        <Link href="/#selected" className={s.navLink}>← All work</Link>
        <span>{indexLabel(idx)} / {indexLabel(projects.length - 1)}</span>
      </div>

      <header className={s.masthead} style={{ paddingTop: 'clamp(32px, 6vw, 80px)' }}>
        <h1 className={s.display} style={{ fontSize: 'clamp(3rem, 11vw, 10rem)' }}>{project.name}</h1>
        <p className={s.lede}>{project.subtitle}</p>
      </header>

      <div className={`${s.strip} ${s.meta}`}>
        {project.year && (
          <div><span>Year</span><p className={s.stripValue}>{project.year}</p></div>
        )}
        <div><span>Role</span><p className={s.stripValue}>{project.role}</p></div>
        <div><span>Status</span><p className={s.stripValue}>{project.status}</p></div>
        {links.length > 0 && (
          <div>
            <span>Links</span>
            <p className={s.stripValue}>
              {links.map((l, i) => (
                <span key={l.href}>
                  {i > 0 && ' · '}
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className={s.textLink}>{l.label} ↗</a>
                </span>
              ))}
            </p>
          </div>
        )}
      </div>

      {project.image && (
        <figure className={s.figure}>
          <div className={s.frame}>
            <Image src={project.image.src} alt={project.image.alt} fill priority className={s.cover} sizes="(max-width: 1280px) 100vw, 1200px" />
          </div>
          {project.image.caption && (
            <figcaption className={`${s.caption} ${s.meta}`}>Fig. 01 — {project.image.caption}</figcaption>
          )}
        </figure>
      )}

      <section style={{ marginTop: project.image ? 0 : 'clamp(40px, 6vw, 80px)' }}>
        {blocks.map((b) => (
          <div key={b.key} className={s.kv}>
            <span className={s.meta}>{b.key}</span>
            <p className={s.kvValue}>{b.value}</p>
          </div>
        ))}
      </section>

      {project.gallery && project.gallery.length > 0 && (
        <div className={s.gallery}>
          {project.gallery.map((g, i) => (
            <figure key={g.src} className={s.figure}>
              <div className={`${s.frame} ${s.frameTall}`}>
                <Image src={g.src} alt={g.alt} fill className={s.cover} sizes="(max-width: 700px) 100vw, 50vw" />
              </div>
              {g.caption && (
                <figcaption className={`${s.caption} ${s.meta}`}>
                  Fig. {String(i + 2).padStart(2, '0')} — {g.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      )}

      <section className={s.section}>
        <p className={s.meta} style={{ paddingBottom: 12 }}>Next project</p>
        <ul className={s.list}>
          <RuleRow
            href={next.link}
            title={next.name}
            meta={projectMeta(next)}
            image={next.image}
            fallback={indexLabel(nextIdx)}
          />
        </ul>
      </section>
    </main>
  );
}
