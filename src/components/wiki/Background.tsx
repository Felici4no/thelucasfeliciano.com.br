import Link from 'next/link';
import { events, certifications, type LearningEntry } from '@/data/learning';
import { WikiSection } from './WikiSection';
import { Thumb } from './Thumb';
import w from './wiki.module.css';

function Entries({ items }: { items: LearningEntry[] }) {
  return (
    <ul>
      {items.map((e) => (
        <li key={`${e.when}-${e.title}`}>
          <b>{e.when}.</b> {e.title}
          <span className={w.muted}>, {e.detail}</span>
        </li>
      ))}
    </ul>
  );
}

const issuers = Array.from(new Set(certifications.flatMap((c) => c.detail.split(' and '))));

export function Background() {
  return (
    <WikiSection id="background" title="Background">
      <Thumb project="talent-hack" />
      <p>
        Feliciano works in small teams, usually under tight deadlines. Four hackathon podiums (two of them first
        places) shaped an approach to product work: validate the idea quickly with a prototype, then keep improving the
        ones that prove useful until they are live. Several of those projects are now in production.
      </p>
      <p>
        Professionally, Feliciano worked as a software engineer on the platform of{' '}
        <Link href="/projects/bvm12">BVM12</Link>, using Java, Docker, SQL, JavaScript and TypeScript, and is part of the development team of the educational system of
        Escola da Cidade, in São Paulo.
      </p>

      <h3 className={w.h3}>Events</h3>
      <Entries items={events} />

      <h3 className={w.h3}>Courses and certifications</h3>
      <p>
        {certifications.length} certificates issued by {issuers.slice(0, -1).join(', ')} and{' '}
        {issuers[issuers.length - 1]}, newest first.
      </p>
      <div className={w.tableWrap}>
        <table className={w.table}>
          <thead>
            <tr>
              <th scope="col">Issued</th>
              <th scope="col">Course</th>
              <th scope="col">Issuer</th>
            </tr>
          </thead>
          <tbody>
            {certifications.map((c) => (
              <tr key={`${c.when}-${c.title}`}>
                <td>{c.when}</td>
                <td>{c.title}</td>
                <td>{c.detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </WikiSection>
  );
}
