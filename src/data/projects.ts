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
    id: "talent-hack",
    name: "Talent Hack",
    subtitle: "Connecting public school talent with the tech market.",
    type: "Movement / Hackathon",
    year: "2024",
    status: "Active",
    role: "Lead Systems Architect",
    description: "A movement designed to identify talent in public schools through structured hackathons and mentorship sessions.",
    problem: "The gap between public education talent and the technology market, often due to a lack of clear pathways and visibility.",
    whatIBuilt: "A coordination model for large-scale events, including systems for registration, mentorship follow-up, and partnership organization.",
    stack: ["Strategy", "Community", "Systems Design", "Product"],
    link: "/projects/talent-hack",
    github: "https://github.com/Felici4no/talent-hack",
    demo: "https://talenthack.com.br"
  },
  {
    id: "escola-itinerante",
    name: "Escola Itinerante",
    subtitle: "Management system for itinerant education.",
    type: "Management System",
    year: "2023",
    status: "Production",
    role: "Full Stack Developer",
    description: "A custom ERP designed to organize logistics, student data, and academic groups for itinerant schools.",
    problem: "The operational challenge of managing mobile educational units that move across different regions and hosting locations.",
    whatIBuilt: "A system for logistics and academic management that handles hosting locations, group scheduling, and mobility data.",
    stack: ["Architecture", "Software Engineering", "Systems"],
    link: "/projects/escola-itinerante",
    github: "https://github.com/Felici4no/escola-itinerante"
  },
  {
    id: "portfolio",
    name: "Portfolio v2",
    subtitle: "An experiment in line-based editorial design.",
    type: "Identity / Research",
    year: "2024",
    status: "Production",
    role: "Designer & Developer",
    description: "A research into layout systems, exploring the intersection of technical documentation and visual structures.",
    problem: "How to communicate the structural and systemic nature of software architecture through an editorial interface.",
    whatIBuilt: "A modular editorial system built with SVG and Framer Motion, focused on clarity and technical documentation standards.",
    stack: ["Design", "Visual Systems", "Software"],
    link: "/projects/portfolio",
    github: "https://github.com/Felici4no/portfolio-v2"
  }
];
