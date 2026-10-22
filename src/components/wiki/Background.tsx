import { events, certifications, type LearningEntry } from '@/data/learning';
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

export function Background() {
  return (
    <section id="background">
      <h2 className={w.h2}>Background</h2>
      <p>
        Lucas works in small teams, usually under tight deadlines. Four hackathon podiums (two of them first places)
        shaped how he approaches product work: validate the idea quickly with a prototype, then keep improving the
        ones that prove useful until they are live. Several of those projects are now in production.
      </p>

      <h3 className={w.h3}>Training and events</h3>
      <div className={w.cols}>
        <div>
          <p className={w.small}>
            <b>Events</b>
          </p>
          <Entries items={events} />
        </div>
        <div>
          <p className={w.small}>
            <b>Courses and certifications</b>
          </p>
          <Entries items={certifications} />
        </div>
      </div>
    </section>
  );
}
