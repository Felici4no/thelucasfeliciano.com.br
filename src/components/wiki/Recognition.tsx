import Link from 'next/link';
import { projects } from '@/data/projects';
import { WikiSection } from './WikiSection';
import w from './wiki.module.css';

const rows = [
  { result: '1st place', event: 'ElevenLabs Worldwide Hackathon SP', project: 'VOCULOS', id: 'voculos' },
  { result: '1st place', event: 'Devs de Impacto Rio', project: 'Alimapa', id: 'alimapa' },
  { result: 'Winner', event: 'Tech Mahindra Challenge', project: 'EcoSimulator 1.0', id: 'ecosimulator' },
  { result: 'Invited exhibitor', event: 'Latam Mobility 2025, invited by the organization after the Tech Mahindra win', project: 'EcoSimulator 1.0', id: 'ecosimulator' },
  { result: 'Invited', event: 'Quantum Computing Forum · TDC 2024', project: null, id: null },
  { result: '3rd place', event: 'AfroCapital Hack · Feira Preta', project: 'ABIAS', id: 'abias' },
  { result: 'Competing', event: "Colosseum Crypto World's Fair (results pending)", project: 'UPAY3FOOD', id: 'upay3food' },
  { result: 'Founder', event: 'Talent Hack (partnerships and pilot in progress)', project: 'Talent Hack', id: 'talent-hack' },
];

export function Recognition() {
  return (
    <WikiSection id="recognition" title="Recognition">
      <p>Results and invitations from hackathons, challenges and events, linked to the project they came from.</p>
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
                  {r.id ? (
                    <Link href={`/projects/${r.id}`} title={projects.find((p) => p.id === r.id)?.subtitle}>
                      {r.project}
                    </Link>
                  ) : (
                    '—'
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </WikiSection>
  );
}
