export const siteConfig = {
  name: "Lucas Feliciano",
  title: "Lucas Feliciano — Creative Practice",
  description:
    "Multidisciplinary creator in São Paulo, working across architecture, visual expression, music and technology. An archive of creative practice and selected projects.",
  url: "https://thelucasfeliciano.com.br",
  ogImage: "https://thelucasfeliciano.com.br/og-image.png",
  /** Shown in the header badge and hero. Set to undefined to hide it. */
  /** Dolarizando-se audience, shown as proof in the hero and About. */
  dolarizandoInstagram: "https://www.instagram.com/dolarizandose/",
  availability: "Open to projects" as string | undefined,
  /** Optional channels (linkedin, whatsapp, booking) only render once filled in. */
  links: {
    github: "https://github.com/Felici4no",
    instagram: "https://www.instagram.com/ofelicianico/",
    email: "me@thelucasfeliciano.com.br",
    whatsapp: "https://wa.me/5511954471933",
  } as {
    github: string;
    instagram: string;
    email: string;
    /** e.g. https://www.linkedin.com/in/your-handle */
    linkedin?: string;
    /** e.g. https://wa.me/5511999999999 */
    whatsapp?: string;
    /** e.g. a Calendly / Cal.com link; becomes the primary CTA when set */
    booking?: string;
  },
  keywords: [
    "Lucas Feliciano",
    "Architecture and Urbanism",
    "Music Production",
    "Multidisciplinary Creator",
    "Software Engineer",
    "Systems Builder",
    "Digital Products",
    "AI Prototypes",
    "AI Agents",
    "MCP",
    "Solana",
    "Hackathon Winner",
    "Builder",
    "Tech Portfolio",
    "São Paulo Developer",
  ],
};

export const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": siteConfig.name,
  "url": siteConfig.url,
  "jobTitle": "Software Engineer",
  "sameAs": [
    siteConfig.links.github,
    siteConfig.links.instagram,
    siteConfig.links.linkedin,
  ].filter(Boolean),
  "knowsAbout": [
    "AI agents",
    "Model Context Protocol",
    "Web product development",
    "Next.js",
    "Data visualization",
    "Coordination systems",
  ],
  "description": siteConfig.description,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "São Paulo",
    "addressCountry": "BR"
  }
};
