import Link from 'next/link';
import { projects, type Project } from '@/data/projects';
import { firstSegment, firstSentence } from '@/lib/text';
import { WikiSection } from './WikiSection';
import { Gallery } from './Gallery';
import w from './wiki.module.css';

function ProjectTable({ items, start }: { items: Project[]; start: number }) {
  return (
    <div className={w.tableWrap}>
      <table className={w.table}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Project</th>
            <th scope="col">Year</th>
            <th scope="col">Role</th>
            <th scope="col">Status</th>
            <th scope="col">Result</th>
          </tr>
        </thead>
        <tbody>
          {items.map((p, i) => (
            <tr key={p.id} id={`sel-${p.id}`}>
              <td>{start + i}</td>
              <td>
                <Link href={p.link} title={p.subtitle}>
                  <b>{p.name}</b>
                </Link>
                <span className={w.note}>{p.subtitle}</span>
              </td>
              <td>{p.year}</td>
              <td>{firstSegment(p.role)}</td>
              <td>{p.status.replace(/\s*\/\s*/g, ', ')}</td>
              <td>{p.result ? firstSentence(p.result) : '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Projects() {
  const selected = projects.filter((p) => p.tier === 'selected');
  const other = projects.filter((p) => p.tier === 'other');

  return (
    <WikiSection id="projects" title="Projects">
      <p>
        Systems built for hackathons, clients and personal initiatives. Each name links to a project page with the
        problem, what was built and the result. See also the <Link href="/portfolio">full index</Link>.
      </p>

      <h3 id="selected" className={w.h3}>Selected systems</h3>
      <ProjectTable items={selected} start={1} />

      <h3 id="other-works" className={w.h3}>Other works</h3>
      <ProjectTable items={other} start={selected.length + 1} />

      <h3 className={w.h3}>Gallery</h3>
      <Gallery />
    </WikiSection>
  );
}
