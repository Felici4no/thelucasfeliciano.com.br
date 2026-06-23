export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

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
  result?: string;
  stack: string[];
  tier: "selected" | "other";
  link: string;
  github?: string;
  demo?: string;
  /** Lead image — rendered only when present. Originals can be color; the b/w
   *  treatment (grayscale + contrast) is applied in CSS. */
  image?: ProjectImage;
  gallery?: ProjectImage[];
}

export const projects: Project[] = [
  {
    id: "voculos",
    name: "VOCULOS",
    subtitle: "Smart glasses prototype translating Libras into voice.",
    type: "AI / Accessibility / Hackathon",
    year: "2025",
    status: "1st place / Prototype",
    role: "Builder / Integration",
    description:
      "A smart glasses prototype built during the ElevenLabs Worldwide Hackathon São Paulo to transform Libras signs into human voice in real time.",
    problem:
      "Communication between deaf and hearing people is often limited by the lack of immediate accessible translation tools in everyday interactions.",
    whatIBuilt:
      "A working prototype assembled in three hours using low-cost glasses, a disassembled webcam and integrations with ElevenLabs, Bolt, Stripe and n8n.",
    result: "1st place at ElevenLabs Worldwide Hackathon São Paulo.",
    stack: ["ElevenLabs", "Bolt", "n8n", "AI Agents", "Accessibility", "Prototype"],
    tier: "selected",
    link: "/projects/voculos",
    image: {
      src: "/projects/voculos/cover.jpg",
      alt: "VOCULOS smart glasses prototype with a camera module on the frame",
      caption: "Smart glasses prototype · camera module on a low-cost frame",
    },
    gallery: [
      {
        src: "/projects/voculos/build.jpg",
        alt: "The team building VOCULOS at the hackathon table",
        caption: "Build session · ElevenLabs hackathon, SP",
      },
      {
        src: "/projects/voculos/cohort.jpg",
        alt: "ElevenLabs hackathon cohort group photo",
        caption: "Hackathon cohort · ElevenLabs Worldwide",
      },
    ],
  },
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
      "Sustainable mobility feels abstract when it lives only in reports and numbers.",
    whatIBuilt:
      "A telemetry rig reading live race data into a dashboard, turning performance into electric-vs-combustion CO₂ comparison.",
    result: "Won the Tech Mahindra challenge; later exhibited at Latam Mobility 2025.",
    stack: ["Telemetry", "Data Visualization", "Dashboard", "Mobility", "Sustainability"],
    tier: "selected",
    link: "/projects/ecosimulator",
    image: {
      src: "/projects/ecosimulator/cover.jpg",
      alt: "Custom telemetry cockpit rig built from black pipe, with a Formula E backdrop",
      caption: "Custom telemetry rig · Tech Mahindra Formula E challenge",
    },
    gallery: [
      {
        src: "/projects/ecosimulator/dashboard.jpg",
        alt: "Driver reclined in the telemetry rig with the live dashboard on screen",
        caption: "Telemetry dashboard, live demo",
      },
      {
        src: "/projects/ecosimulator/latam-booth.jpg",
        alt: "EcoSimulator rig at the Latam Mobility 2025 exhibition booth",
        caption: "Exhibited at Latam Mobility 2025",
      },
      {
        src: "/projects/ecosimulator/latam-visit.jpg",
        alt: "Visitors trying the telemetry rig at the Latam Mobility booth",
        caption: "Visitors at the Latam Mobility booth",
      },
      {
        src: "/projects/ecosimulator/award.jpg",
        alt: "Award and recognition moment at the Tech Mahindra challenge",
        caption: "Award · Tech Mahindra challenge",
      },
    ],
  },
  {
    id: "talent-hack",
    name: "Talent Hack",
    subtitle: "A movement to reveal public-school talent through technology.",
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
    result: "In development — partnerships and pilot in progress.",
    stack: ["Strategy", "Coordination Protocols", "Community", "Systems Design", "Education"],
    tier: "selected",
    link: "/projects/talent-hack",
    demo: "https://talenthack.com.br",
    image: {
      src: "/projects/talent-hack/cover.jpg",
      alt: "Group photo of the public-school cohort at the pre-TCC project judging",
      caption: "Public-school cohort · pre-TCC project judging",
    },
    gallery: [
      {
        src: "/projects/talent-hack/judging.jpg",
        alt: "Students presenting a tech project during the judging session",
        caption: "Judging student tech projects",
      },
    ],
  },
  {
    id: "dolarizando-se",
    name: "Dolarizando-se",
    subtitle: "US company onboarding and USD financial pipeline for remote professionals.",
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
    result: "Live, onboarding paying clients.",
    stack: ["Next.js", "React", "Tailwind CSS", "Node.js", "Stripe API"],
    tier: "selected",
    link: "/projects/dolarizando-se",
    demo: "https://www.dolarizandose.com.br/",
  },
  {
    id: "gerar-contrato",
    name: "GerarContrato",
    subtitle: "Free, legally-valid contract generator for MEIs and freelancers.",
    type: "Utility / LegalTech / SaaS",
    year: "2025",
    status: "Active / Live",
    role: "Full-Stack Developer",
    description:
      "A 100% free web utility enabling Brazilian freelancers, small companies, and MEIs to generate legally compliant contracts in PDF format instantly.",
    problem:
      "Drafting custom legal contracts is either expensive or time-consuming for small independent workers and self-employed service providers.",
    whatIBuilt:
      "A single-page utility with 17+ customizable templates, dynamic text interpolation, real-time preview, and client-side PDF rendering.",
    result: "Live and free, used by independent workers across Brazil.",
    stack: ["Vite", "React", "TypeScript", "Tailwind CSS", "PDF Generation"],
    tier: "selected",
    link: "/projects/gerar-contrato",
    demo: "https://gerarcontrato.com.br/",
    image: {
      src: "/projects/gerar-contrato/cover.jpg",
      alt: "GerarContrato landing page — free contract generator",
      caption: "GerarContrato · free, legally-valid contracts",
    },
    gallery: [
      {
        src: "/projects/gerar-contrato/app.jpg",
        alt: "GerarContrato interface showing contract templates by category",
        caption: "17+ contract templates by category",
      },
      {
        src: "/projects/gerar-contrato/code.jpg",
        alt: "GerarContrato source code with client-side routing",
        caption: "Client-side PDF generation",
      },
    ],
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
      "Modern web experiences can feel sanitized and corporate. The project explores a fusion of raw retro aesthetics and useful minimal browser utilities.",
    whatIBuilt:
      "A Next.js portal hosting pixelated web utilities (white noise generator, analog pomodoro timer, notepad) and clothing drops.",
    result: "Live, with shipped utilities and apparel drops.",
    stack: ["Next.js", "React", "Framer Motion", "Tailwind CSS", "Figma"],
    tier: "selected",
    link: "/projects/puro-suco-indie",
    demo: "https://www.purosucoindie.com.br/",
  },
  {
    id: "alimapa",
    name: "Alimapa",
    subtitle: "AI agents for municipal management of farmer requisitions.",
    type: "AI / Agentic / GovTech",
    year: "2025",
    status: "Prototype / Hackathon",
    role: "Builder",
    description:
      "A platform for municipal teams to manage farmer requisitions through configurable AI agents, built during the Devs de Impacto Rio hackathon.",
    problem:
      "Municipal teams handle farmer requisitions and document validation manually and inconsistently.",
    whatIBuilt:
      "A platform with configurable AI agents — negotiators (proposals and chats) and validators (proofs and documents) — over a territorial panel for farmers, requisitions and audit.",
    result: "Prototype built at the Devs de Impacto Rio hackathon.",
    stack: ["AI Agents", "Next.js", "GovTech", "Prototype"],
    tier: "other",
    link: "/projects/alimapa",
    image: {
      src: "/projects/alimapa/cover.jpg",
      alt: "Alimapa dashboard — AI agents management for municipal farmer requisitions",
      caption: "Alimapa · AI agents management panel",
    },
    gallery: [
      {
        src: "/projects/alimapa/event.jpg",
        alt: "Devs de Impacto Rio hackathon cohort",
        caption: "Devs de Impacto Rio · hackathon",
      },
    ],
  },
  {
    id: "abias",
    name: "ABIAS",
    subtitle: "Reputation infrastructure that turns delivery work into credit access.",
    type: "FinTech / Reputation / Hackathon",
    year: "2026",
    status: "3rd place / Prototype",
    role: "Builder",
    description:
      "A prototype reputation infrastructure for app delivery workers, built with a team at the AfroCapital Hack (Feira Preta) to widen credit access for the Black population.",
    problem:
      "Around 68% of delivery workers in Brazil are Black or mixed-race; a single bike repair can mean lost income, and credit access stays out of reach.",
    whatIBuilt:
      "A prototype turning consistency, ratings and activity recurrence into an ethical reputation score — converting work into credit access for app delivery workers.",
    result: "3rd place at AfroCapital Hack — Feira Preta.",
    stack: ["FinTech", "Reputation Scoring", "Prototype"],
    tier: "other",
    link: "/projects/abias",
    image: {
      src: "/projects/abias/cover.jpg",
      alt: "ABIAS team at the AfroCapital Hack, Feira Preta",
      caption: "AfroCapital Hack — Feira Preta, SP 2026",
    },
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
      "Clinical speech therapists require a highly legible, mobile-first portal to present treatments and schedule patient appointments.",
    whatIBuilt:
      "A highly-performant single page application structured for SEO, clean typography, accessibility standards, and smooth mobile conversions.",
    result: "Live in production for the clinic.",
    stack: ["Vite", "React", "TypeScript", "Tailwind CSS"],
    tier: "other",
    link: "/projects/apf-fonoaudiologia",
    demo: "https://dreamy-gingersnap-6a3b73.netlify.app/",
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
    result: "Live MVP.",
    stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    tier: "other",
    link: "/projects/mygesto",
    demo: "https://mygesto.vercel.app/",
  },
  {
    id: "snake-battle",
    name: "Snake Battle",
    subtitle: "Player vs CPU arcade snake game with an online leaderboard.",
    type: "GameDev / Web Game",
    year: "2025",
    status: "Live / Complete",
    role: "Developer / Game Designer",
    description:
      "A classic arcade game featuring player vs intelligent CPU snake battles, complete with mobile D-Pad controls and a global leaderboard.",
    problem:
      "Standard snake games lack competition. A smart pathfinding CPU agent increases challenge and replayability.",
    whatIBuilt:
      "A canvas-rendered engine with AI pathfinding logic and a serverless backend for verifying scores and listing top players.",
    result: "Live and complete, with a global leaderboard.",
    stack: ["HTML5 Canvas", "JavaScript", "Cloudflare Workers", "D1 Database"],
    tier: "other",
    link: "/projects/snake-battle",
    demo: "https://snakeon.vercel.app/",
  }
];
