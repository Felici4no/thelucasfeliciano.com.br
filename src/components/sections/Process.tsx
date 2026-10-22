import { SectionHead } from '@/components/ui/SectionHead';
import styles from './Process.module.css';

const steps = [
  { title: 'Understand', text: 'We define the problem, who it is for and what "done" looks like before any code.' },
  { title: 'Prototype', text: 'A working version fast, so decisions are made on something you can click, not on slides.' },
  { title: 'Ship', text: 'Deployed, documented and handed over with the source code. No black boxes.' },
  { title: 'Evolve', text: 'Measure how it is used and iterate on what matters, or hand it to your team.' },
];

export function Process() {
  return (
    <section id="process" className={styles.section} data-snap>
      <div className={styles.inner}>
        <SectionHead index="05" title="How I work" aside="4 steps, no surprises" />
        <ol className={styles.grid}>
          {steps.map((s, i) => (
            <li key={s.title} className={styles.card}>
              <span className={styles.step}>{String(i + 1).padStart(2, '0')}</span>
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.text}>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
