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
  /** Left out when the period is not known yet. */
  year?: string;
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
    id: "upay3food",
    name: "UPAY3FOOD",
    subtitle: "Unit pricing for food delivery: the food, the fees and the difference to the cheapest option.",
    type: "Price Transparency / AI Agents / Solana",
    year: "2026",
    status: "Awaiting results / Live",
    role: "Founder / Builder",
    description:
      "A browser extension, a public MCP server and on-chain calculation rules that bring supermarket-style unit prices (per 100 g, per litre, per person) to iFood menus. Built for the Colosseum Crypto World's Fair hackathon. Independent project, not affiliated with iFood.",
    problem:
      "Supermarkets in the EU and Australia must show the price per kilo or litre. Delivery apps sell the same food without it, so fees, sizes and coupons make menu prices impossible to compare. In one real São Paulo shop the dearest item costs 94% more per litre than the cheapest.",
    whatIBuilt:
      "A Chrome/Edge/Brave extension that reads the page the user already sees and outlines the item worth buying; a public MCP server (9 tools, no login, stores nothing) so any AI agent can do the same math; and a methodology hashed with SHA-256 and anchored on Solana mainnet, with USDC funding shielded through Cloak.",
    result:
      "Submitted to the Colosseum Crypto World's Fair 2026; results pending. Open source (MIT), live at upay3food.com. Paying the order's Pix with USDC is intentionally off until a licensed off-ramp partner exists.",
    stack: ["TypeScript", "Next.js", "Chrome MV3", "MCP", "Solana", "USDC / Cloak"],
    tier: "selected",
    link: "/projects/upay3food",
    demo: "https://upay3food.com",
    github: "https://github.com/Felici4no/Nape3-UPAY3FOOD",
    image: {
      src: "/projects/upay3food/cover.png",
      alt: "UPAY3FOOD outlining the best item per litre and the recommended item on an iFood menu",
      caption: "On-page highlight · best item per litre vs. recommended item",
    },
    gallery: [
      {
        src: "/projects/upay3food/xray.png",
        alt: "UPAY3FOOD popup showing the three layers of what the user pays and the Price X-ray",
        caption: "“You pay 3 times” and the Price X-ray",
      },
      {
        src: "/projects/upay3food/size.png",
        alt: "UPAY3FOOD showing the best size to buy: 34.7% cheaper per 100 ml than the worst",
        caption: "The size worth buying · 34.7% cheaper per 100 ml",
      },
    ],
  },
  {
    id: "agente-na-sua",
    name: "Agente na Sua",
    subtitle: "Finding the rare patient in the SUS by recognizing when a health journey stopped looking common.",
    type: "HealthTech / AI / Hackathon",
    year: "2026",
    status: "Hackathon / Prototype",
    role: "Builder",
    description:
      "A proposal built at the Ideias Raras hackathon (Aug 7–8, 2026) with a team of medicine, biology and technology, supported by QuaTiRare, to turn scattered patient-journey information into structured data and flag trajectories worth investigating.",
    problem:
      "Rare patients rarely arrive with an extraordinary sign. Repeated exams, different specialties, changing diagnoses and multi-organ manifestations look common one by one; together they tell another story.",
    whatIBuilt:
      "A prototype approach that structures dispersed journey information, relates the evidence between events and supports the health professional's decision. It does not replace the professional and does not diagnose by AI.",
    result: "Built over two days at the Ideias Raras hackathon: Finding the Rare Patient in the SUS.",
    stack: ["Health Data", "Patient Journey", "AI", "Structured Data", "Prototype"],
    tier: "selected",
    link: "/projects/agente-na-sua",
  },
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
    status: "Awarded / Invited exhibitor",
    role: "Developer / Data & Interface",
    description:
      "A Formula E cockpit experiment designed to capture real-time game data, display telemetry in an interactive dashboard and compare electric mobility with combustion vehicle CO₂ emissions.",
    problem:
      "Sustainable mobility feels abstract when it lives only in reports and numbers.",
    whatIBuilt:
      "A telemetry rig reading live race data into a dashboard, turning performance into electric-vs-combustion CO₂ comparison.",
    result: "Won the Tech Mahindra challenge and, after the win, was invited by the Latam Mobility organization to exhibit at Latam Mobility 2025.",
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
        caption: "Exhibiting at Latam Mobility 2025, invited by the organization after the Tech Mahindra win",
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
    result: "15k Instagram followers, 100% organic. Live and onboarding paying clients.",
    stack: ["Next.js", "React", "Tailwind CSS", "Node.js", "Stripe API"],
    tier: "selected",
    link: "/projects/dolarizando-se",
    demo: "https://www.dolarizandose.com.br/",
  },
  {
    id: "bvm12",
    name: "BVM12",
    subtitle: "Market data, news and indices of the green economy, from Manaus.",
    type: "Market Data / Media / Green Economy",
    status: "Professional work / Live",
    role: "Software Engineer",
    description:
      "Software engineering work on the BVM12 platform, which brings market quotes, news and indices of the green economy from Manaus, with editorial sections, an index page and a client area.",
    result: "Worked as a software engineer on the company platform.",
    stack: ["Java", "Docker", "SQL", "JavaScript", "TypeScript"],
    tier: "selected",
    link: "/projects/bvm12",
    demo: "https://bvm12.com.br/",
    image: {
      src: "/projects/bvm12/cover.jpg",
      alt: "BVM12 home page with the headline \"Futuro sustentável não é discurso. É classe de ativo.\", a market ticker and a green index chart",
      caption: "Home page of the live platform",
    },
  },
  {
    id: "escola-da-cidade",
    name: "Escola da Cidade Education System",
    subtitle: "Educational system of Escola da Cidade, built by its development team.",
    type: "Education / Platform",
    status: "Professional work / Active",
    role: "Development team member",
    description:
      "Member of the development team of the educational system of Escola da Cidade, in São Paulo.",
    result: "Part of the team that develops the school's educational system.",
    stack: ["PHP", "SQL", "JavaScript", "CSS"],
    tier: "selected",
    link: "/projects/escola-da-cidade",
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
    status: "1st place / Prototype",
    role: "Builder",
    description:
      "A platform for municipal teams to manage farmer requisitions through configurable AI agents, built in about 36 hours at the Devs de Impacto Rio hackathon, which the team won.",
    problem:
      "Municipal teams handle farmer requisitions and document validation manually and inconsistently.",
    whatIBuilt:
      "A platform with configurable AI agents — negotiators (proposals and chats) and validators (proofs and documents) — over a territorial panel for farmers, requisitions and audit.",
    result: "Won the Devs de Impacto Rio hackathon (Dec 2025).",
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
  },
  {
    id: "orbita",
    name: "Projeto Órbita",
    subtitle: "Exoplanet data analysis and habitability simulation for the NASA Space Apps Challenge.",
    type: "Data / Science / Hackathon",
    year: "2025",
    status: "Hackathon / Prototype",
    role: "Team Member / Builder",
    description:
      "An intelligent platform built by Team Yulu for the NASA Space Apps Challenge to process and analyze large volumes of exoplanet data, turning NASA's Kepler data into fast, scalable and accessible insights.",
    problem:
      "The volume of Kepler data is huge, and turning it into insights quickly enough to be useful is hard for most people.",
    whatIBuilt:
      "Machine learning, spectroscopic analysis and orbital modeling behind predictive models, 3D visualizations and real-time habitability simulations, with the goal of democratizing access to science.",
    result: "Built and delivered with Team Yulu at the NASA Space Apps Challenge 2025.",
    stack: ["Machine Learning", "Data Analysis", "3D Visualization", "Prototype"],
    tier: "other",
    link: "/projects/orbita",
  }
];
