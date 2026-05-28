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
  },
  {
    id: "puro-suco-indie",
    name: "Puro Suco Indie",
    subtitle: "Experimental web tools, retro games and custom apparel.",
    type: "Web Tools / Creative Studio / Brand",
    year: "2025",
    status: "Active / Live",
    role: "Developer / Designer / Co-Founder",
    description:
      "An independent creative studio and brand from Brazil hosting experimental browser utilities, game components and custom streetwear collections.",
    problem:
      "Modern web experiences can feel sanitized and corporate. The project explores a fusion of raw retro sketching aesthetics, hand-drawn typography and useful minimal browser utilities.",
    whatIBuilt:
      "A Next.js portal hosting pixelated web utilities (white noise generator, analog pomodoro timer, notepad) and clothing drops. Designed to test direct-to-consumer brand engineering and playful web interfaces.",
    stack: ["Next.js", "React", "Framer Motion", "Tailwind CSS", "Figma"],
    link: "/projects/puro-suco-indie",
    demo: "https://www.purosucoindie.com.br/"
  },
  {
    id: "gerar-contrato",
    name: "GerarContrato",
    subtitle: "Free, legally-valid online contract generator for MEIs and freelancers.",
    type: "Utility / LegalTech / SaaS",
    year: "2025",
    status: "Active / Live",
    role: "Full-Stack Developer",
    description:
      "A 100% free web utility enabling Brazilian freelancers, small companies, and MEIs to generate legally compliant contracts in PDF format instantly.",
    problem:
      "Drafting custom legal contracts is either expensive or time-consuming for small independent workers and self-employed service providers.",
    whatIBuilt:
      "A single-page utility tool featuring 17+ customizable templates, dynamic text interpolation, real-time preview, and client-side PDF rendering and downloading.",
    stack: ["Vite", "React", "TypeScript", "Tailwind CSS", "PDF Generation"],
    link: "/projects/gerar-contrato",
    demo: "https://gerarcontrato.com.br/"
  },
  {
    id: "dolarizando-se",
    name: "Dolarizando-se",
    subtitle: "US company onboarding and financial pipeline setup for remote professionals.",
    type: "FinTech / SaaS / Consultative",
    year: "2026",
    status: "Active / Live",
    role: "Tech Lead / System Architect",
    description:
      "A premium consultative platform helping Brazilian remote builders open LLC companies in the US and set up legal, fiscal and banking pipelines to invoice and receive in USD.",
    problem:
      "Brazilians working remotely for US companies face complex corporate registration, compliance hurdles, and high financial spreads when converting USD to BRL.",
    whatIBuilt:
      "A custom client onboarding application, automated document processing pipeline, payment integrations, and tax preparation roadmaps.",
    stack: ["Next.js", "React", "Tailwind CSS", "Node.js", "Stripe API"],
    link: "/projects/dolarizando-se",
    demo: "https://www.dolarizandose.com.br/"
  },
  {
    id: "apf-fonoaudiologia",
    name: "APF Fonoaudiologia",
    subtitle: "Speech therapy clinic landing page and client lead generator.",
    type: "HealthTech / Web Portal",
    year: "2025",
    status: "Live / Production",
    role: "Frontend Developer",
    description:
      "A clean, accessible web landing page for a specialized speech therapy clinic designed to capture client leads and present therapeutic modalities.",
    problem:
      "Clinical speech therapists require a highly legible, mobile-first portal to present clinical treatments and easily schedule patient appointments.",
    whatIBuilt:
      "A highly-performant single page application structured for SEO, clean typography, absolute accessibility standards, and smooth mobile conversions.",
    stack: ["Vite", "React", "TypeScript", "Tailwind CSS"],
    link: "/projects/apf-fonoaudiologia",
    demo: "https://dreamy-gingersnap-6a3b73.netlify.app/"
  },
  {
    id: "mygesto",
    name: "MyGesto",
    subtitle: "Micro-SaaS for creating and sharing customized digital greeting cards.",
    type: "Micro-SaaS / Social",
    year: "2025",
    status: "Active / MVP",
    role: "Full-Stack Developer",
    description:
      "A lightweight web platform built to generate and share customized, meaningful digital cards and special gestures with clean aesthetics.",
    problem:
      "Traditional messaging cards are generic or filled with ads. People want simple, dedicated links to send animations and personalized text.",
    whatIBuilt:
      "A Next.js prototype with card builders, unique sharing links, dynamic animations, and zero database overhead.",
    stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    link: "/projects/mygesto",
    demo: "https://mygesto.vercel.app/"
  },
  {
    id: "snake-battle",
    name: "Snake Battle",
    subtitle: "Pure JavaScript player vs CPU arcade snake game with online leaderboard.",
    type: "GameDev / Web Game",
    year: "2025",
    status: "Live / Complete",
    role: "Developer / Game Designer",
    description:
      "A classic arcade game featuring player vs intelligent CPU snake battles, complete with mobile D-Pad controls and a global leaderboard.",
    problem:
      "Standard snake games lack competition. Adding a smart pathfinding CPU agent increases challenge and replayability.",
    whatIBuilt:
      "A canvas-rendered engine with AI pathfinding logic and a serverless backend for verifying scores and listing top players.",
    stack: ["HTML5 Canvas", "JavaScript", "Cloudflare Workers", "D1 Database"],
    link: "/projects/snake-battle",
    demo: "https://snakeon.vercel.app/"
  }
];