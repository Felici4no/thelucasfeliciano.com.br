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
  { when: "2024", title: "TDC 2024 · Quantum Computing Forum", detail: "invited, 8 hours, São Paulo" },
];

/** Newest first. `when` is the issue date; `detail` is the issuer. */
export const certifications: LearningEntry[] = [
  { when: "Jan 2026", title: "Software Engineering", detail: "FIAP" },
  { when: "Dec 2025", title: "Services Architecture / API / Mobile Architecture", detail: "FIAP" },
  { when: "Dec 2025", title: "Branding Analytics", detail: "FIAP" },
  { when: "Nov 2025", title: "Blockchain and Solidity: Smart Contracts and Tokens", detail: "Alura" },
  { when: "Oct 2025", title: "Multimedia Scriptwriting", detail: "FIAP" },
  { when: "Jul 2025", title: "Software Engineering track", detail: "Alura" },
  { when: "Jun 2025", title: "Blockchain Advanced", detail: "FIAP" },
  { when: "May 2025", title: "Blockchain", detail: "FIAP" },
  { when: "May 2025", title: "Programming Fundamentals: Databases", detail: "LinkedIn" },
  { when: "Apr 2025", title: "Introduction to Amazon Web Services: Cloud Computing", detail: "LinkedIn" },
  { when: "Apr 2025", title: "Software Development Fundamentals", detail: "Microsoft and LinkedIn" },
  { when: "Jan 2025", title: "C Language track", detail: "Alura" },
  { when: "Oct 2024", title: "Social and Sustainability Training", detail: "FIAP" },
  { when: "Jul 2024", title: "JavaScript Course", detail: "Curso em Vídeo" },
  { when: "Jul 2024", title: "Self-Leadership track", detail: "Alura" },
  { when: "2024", title: "JavaScript and HTML: build a game (16 hours)", detail: "Alura" },
  { when: "Mar 2024", title: "Design Thinking", detail: "FIAP" },
  { when: "Sep 2023", title: "Coding Fundamentals, Grasshopper", detail: "Google" },
];
