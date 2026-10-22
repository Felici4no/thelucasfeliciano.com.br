import Link from 'next/link';
import { projects } from '@/data/projects';
import { WikiSection } from './WikiSection';

const live = projects.filter((p) => p.demo && ['upay3food', 'dolarizando-se'].includes(p.id));

export function SeeAlso() {
  return (
    <WikiSection id="see-also" title="See also">
      <ul>
        <li>
          <Link href="/portfolio">Project index</Link>, with the technical parameters of every project
        </li>
        <li>
          <Link href="/logbook">Logbook</Link>, essays and field notes
        </li>
        {live.map((p) => (
          <li key={p.id}>
            <a href={p.demo} target="_blank" rel="noopener noreferrer">
              {p.name}
            </a>{' '}
            (live)
          </li>
        ))}
      </ul>
    </WikiSection>
  );
}
