import Link from 'next/link';
import w from './wiki.module.css';

const rows = [
  { result: '1st place', event: 'ElevenLabs Worldwide Hackathon SP', project: 'VOCULOS', id: 'voculos' },
  { result: '1st place', event: 'Devs de Impacto Rio', project: 'Alimapa', id: 'alimapa' },
  { result: 'Winner', event: 'Tech Mahindra Challenge, later exhibited at Latam Mobility 2025', project: 'EcoSimulator 1.0', id: 'ecosimulator' },
  { result: '3rd place', event: 'AfroCapital Hack · Feira Preta', project: 'ABIAS', id: 'abias' },
  { result: 'Competing', event: "Colosseum Crypto World's Fair (results pending)", project: 'UPAY3FOOD', id: 'upay3food' },
  { result: 'Founder', event: 'Talent Hack (partnerships and pilot in progress)', project: 'Talent Hack', id: 'talent-hack' },
];

export function Recognition() {
  return (
    <section id="recognition">
      <h2 className={w.h2}>Recognition</h2>
      <p className={w.intro}>Results from hackathons and challenges, each linked to the project it came from.</p>
      <div className={w.tableWrap}>
        <table className={w.table}>
          <thead>
            <tr>
              <th scope="col">Result</th>
              <th scope="col">Event</th>
              <th scope="col">Project</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.event}>
                <th scope="row">{r.result}</th>
                <td>{r.event}</td>
                <td>
                  <Link href={`/projects/${r.id}`}>{r.project}</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
