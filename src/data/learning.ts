export interface LearningEntry {
  when: string;
  title: string;
  detail: string;
}

export const events: LearningEntry[] = [
  { when: "2025", title: "Clojure South 2025", detail: "Nubank Spark, São Paulo" },
  { when: "2025", title: "XCONF Brasil 2025", detail: "Thoughtworks · agentic AI, engineering, design" },
  { when: "2025", title: "ETHLatam", detail: "Vitalik Buterin on privacy by default" },
  { when: "2025", title: "FIAP Community Meetup", detail: "Serverless on AWS with Step Functions" },
  { when: "2024", title: "TDC 2024 · Quantum Computing Forum", detail: "8 hours, São Paulo" },
];

export const certifications: LearningEntry[] = [
  { when: "2026", title: "Software Engineering", detail: "FIAP" },
  { when: "2025", title: "Services Architecture / API / Mobile", detail: "FIAP" },
  { when: "2025", title: "Blockchain and Solidity: Smart Contracts and Tokens", detail: "Alura" },
  { when: "2025", title: "Blockchain Advanced · Blockchain", detail: "FIAP" },
  { when: "2025", title: "Software Engineering track", detail: "Alura" },
  { when: "2024", title: "JavaScript and HTML: build a game", detail: "Alura · 16 hours" },
];
