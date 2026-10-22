import w from './wiki.module.css';

const steps = [
  { title: 'Understand', text: 'Define the problem, who it is for and what "done" looks like before writing code.' },
  { title: 'Prototype', text: 'Build a working version fast, so decisions are made on something you can click, not on slides.' },
  { title: 'Ship', text: 'Deploy, document and hand over with the source code. No black boxes.' },
  { title: 'Evolve', text: 'Measure how it is used and iterate on what matters, or hand it to your team.' },
];

export function Method() {
  return (
    <section id="method">
      <h2 className={w.h2}>How I work</h2>
      <p>Projects follow four steps:</p>
      <ol className={w.numbered}>
        {steps.map((s) => (
          <li key={s.title}>
            <b>{s.title}.</b> {s.text}
          </li>
        ))}
      </ol>
    </section>
  );
}
