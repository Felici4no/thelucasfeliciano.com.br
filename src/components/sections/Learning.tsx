import styles from './Learning.module.css';

const events = [
  { when: "2025", title: "Clojure South 2025", detail: "Nubank Spark, São Paulo" },
  { when: "2025", title: "XCONF Brasil 2025", detail: "Thoughtworks · agentic AI, engineering, design" },
  { when: "2025", title: "ETHLatam", detail: "Vitalik Buterin on privacy by default" },
  { when: "2025", title: "FIAP Community Meetup", detail: "Serverless on AWS with Step Functions" },
  { when: "2024", title: "TDC 2024 · Quantum Computing Forum", detail: "8 hours, São Paulo" },
];

const certifications = [
  { when: "2026", title: "Software Engineering", detail: "FIAP" },
  { when: "2025", title: "Services Architecture / API / Mobile", detail: "FIAP" },
  { when: "2025", title: "Blockchain and Solidity: Smart Contracts and Tokens", detail: "Alura" },
  { when: "2025", title: "Blockchain Advanced · Blockchain", detail: "FIAP" },
  { when: "2025", title: "Software Engineering track", detail: "Alura" },
  { when: "2024", title: "JavaScript and HTML: build a game", detail: "Alura · 16 hours" },
];

type Entry = { when: string; title: string; detail: string };

function Column({ label, items }: { label: string; items: Entry[] }) {
  return (
    <div>
      <span className={styles.label}>{label}</span>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={`${item.when}-${item.title}`} className={styles.item}>
            <span className={styles.when}>{item.when}</span>
            <span className={styles.body}>
              <span className={styles.title}>{item.title}</span>
              <span className={styles.detail}>{item.detail}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Learning() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <Column label="Events" items={events} />
        <Column label="Certifications" items={certifications} />
      </div>
    </section>
  );
}
