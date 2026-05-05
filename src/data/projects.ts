export interface Project {
  id: string;
  name: string;
  type: string;
  year: string;
  status: string;
  description: string;
  stack: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: "talent-hack",
    name: "Talent Hack",
    type: "Movement / Hackathon",
    year: "2024",
    status: "Active",
    description: "A movement and hackathon designed to reveal talents from public schools and connect them with the tech market.",
    stack: ["Strategy", "Community", "Systems Design"],
    link: "https://talenthack.com.br"
  },
  {
    id: "mealfy",
    name: "Mealfy",
    type: "Social Impact App",
    year: "2024",
    status: "In Development",
    description: "An application to combat child hunger, connecting donors, entities, and beneficiaries in a transparent system.",
    stack: ["Product Design", "Software Engineering", "Impact"],
    link: "https://mealfy.org"
  },
  {
    id: "escola-itinerante",
    name: "Escola Itinerante System",
    type: "Management System",
    year: "2023",
    status: "Production",
    description: "A comprehensive system to organize data, hosting, groups, and academic information for itinerant schools.",
    stack: ["Architecture", "Software Engineering", "Systems"],
    link: "#"
  },
  {
    id: "portfolio",
    name: "Personal Portfolio",
    type: "Identity / Experiment",
    year: "2024",
    status: "Production",
    description: "An experiment in personal identity bridging the gap between software, architecture, and culture.",
    stack: ["Design", "Visual Systems", "Software"],
    link: "/"
  }
];
