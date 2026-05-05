export interface Project {
  id: string;
  name: string;
  subtitle: string;
  type: string;
  year: string;
  status: string;
  role: string;
  description: string;
  stack: string[];
  link: string;
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: "talent-hack",
    name: "Talent Hack",
    subtitle: "Connecting public school talent with the tech market.",
    type: "Movement / Hackathon",
    year: "2024",
    status: "Active",
    role: "Lead Systems Architect",
    description: "A comprehensive movement designed to reveal hidden talents in public schools. We built a platform that handles large-scale hackathon coordination, mentorship matching, and corporate partnership tracking.",
    stack: ["Strategy", "Community", "Systems Design", "Product"],
    link: "/projects/talent-hack",
    github: "https://github.com/lucasfeliciano/talent-hack",
    demo: "https://talenthack.com.br"
  },
  {
    id: "mealfy",
    name: "Mealfy",
    subtitle: "A digital infrastructure to combat child hunger.",
    type: "Social Impact App",
    year: "2024",
    status: "In Development",
    role: "Product Engineer",
    description: "Mealfy is a transparent ecosystem connecting donors, local entities, and beneficiaries. The system focuses on traceability and real-time impact reporting to ensure resources reach those in need.",
    stack: ["Product Design", "Software Engineering", "Architecture"],
    link: "/projects/mealfy",
    github: "https://github.com/lucasfeliciano/mealfy",
    demo: "https://mealfy.org"
  },
  {
    id: "escola-itinerante",
    name: "Escola Itinerante",
    subtitle: "Management system for itinerant education.",
    type: "Management System",
    year: "2023",
    status: "Production",
    role: "Full Stack Developer",
    description: "A custom-built ERP for the Itinerant School movement. It manages complex logistics, student data, hosting locations, and academic groups across multiple regions in Brazil.",
    stack: ["Architecture", "Software Engineering", "Systems"],
    link: "/projects/escola-itinerante",
    github: "https://github.com/lucasfeliciano/escola-itinerante"
  },
  {
    id: "portfolio",
    name: "Portfolio v2",
    subtitle: "An experiment in line-based editorial design.",
    type: "Identity / Experiment",
    year: "2024",
    status: "Production",
    role: "Designer & Developer",
    description: "A deep dive into 'living lines' and editorial layout systems. This portfolio explores the intersection of technical documentation and artistic sensitivity through SVG generative lines.",
    stack: ["Design", "Visual Systems", "Software"],
    link: "/projects/portfolio",
    github: "https://github.com/lucasfeliciano/portfolio-v2"
  }
];
