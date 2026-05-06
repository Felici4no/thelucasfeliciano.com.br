export interface Project {
  id: string;
  name: string;
  subtitle: string;
  type: string;
  year: string;
  status: string;
  role: string;
  description: string;
  problem?: string;
  whatIBuilt?: string;
  stack: string[];
  link: string;
  github?: string;
  demo?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "ecosimulator",
    name: "EcoSimulator 1.0",
    subtitle: "Formula E telemetry, dashboard and CO₂ comparison.",
    type: "Data / Mobility / Sustainability",
    year: "2024",
    status: "Awarded / Exhibited",
    role: "Developer / Data & Interface",
    description:
      "A Formula E cockpit experiment designed to capture real-time game data, display telemetry in an interactive dashboard and compare electric mobility with combustion vehicle CO₂ emissions.",
    problem:
      "Sustainable mobility can feel abstract when it is explained only through reports, numbers or institutional language. The project explored how real-time interaction could make the difference between electric and combustion vehicles more visible.",
    whatIBuilt:
      "A telemetry-based simulation system with a dashboard for reading game data, organizing performance indicators and translating them into environmental comparisons. The project won the challenge proposed by Tech Mahindra and was later exhibited at Latam Mobility 2025.",
    stack: ["Telemetry", "Data Visualization", "Dashboard", "Mobility", "Sustainability"],
    link: "/projects/ecosimulator"
  },
  {
    id: "voculos",
    name: "VOCULOS",
    subtitle: "Smart glasses prototype translating Libras into voice.",
    type: "AI / Accessibility / Hackathon",
    year: "2025",
    status: "1st Place / Prototype",
    role: "Builder / Integration",
    description:
      "A smart glasses prototype built during the ElevenLabs Worldwide Hackathon São Paulo to transform Libras signs into human voice in real time.",
    problem:
      "Communication between deaf and hearing people is often limited by the lack of accessible, immediate translation tools in everyday interactions.",
    whatIBuilt:
      "A working prototype assembled in three hours using low-cost glasses, a disassembled webcam and integrations with ElevenLabs, Bolt, Stripe and n8n. The system acted as a conversational agent capable of converting signs into spoken output during the live presentation.",
    stack: ["ElevenLabs", "Bolt", "n8n", "AI Agents", "Accessibility", "Prototype"],
    link: "/projects/voculos"
  },
  {
    id: "talent-hack",
    name: "Talent Hack",
    subtitle: "A movement to reveal public school talent through technology.",
    type: "Education / Hackathon / Movement",
    year: "2026",
    status: "In development",
    role: "Founder / Strategy / Product",
    description:
      "A project designed to connect students from public technical schools with mentors, companies and real technology challenges.",
    problem:
      "Many students in public technical schools have practical talent, but lack visibility, access to networks and structured pathways into the technology market.",
    whatIBuilt:
      "A model for distributed hackathons, school partnerships, mentor coordination and project-based talent discovery.",
    stack: ["Strategy", "Coordination Protocols", "Community", "Systems Design", "Education"],
    link: "/projects/talent-hack",
    demo: "https://talenthack.com.br"
  }
];