export const siteConfig = {
  name: "Lucas Feliciano",
  title: "Lucas Feliciano — Software Engineer / Systems Builder",
  description:
    "Software engineer and systems builder based in São Paulo. Interfaces, digital products, AI prototypes and coordination systems.",
  url: "https://thelucasfeliciano.com.br",
  ogImage: "https://thelucasfeliciano.com.br/og-image.png",
  links: {
    github: "https://github.com/Felici4no",
    instagram: "https://www.instagram.com/thelucasfeliciano/",
    email: "lucas.for.study.42@gmail.com",
  },
  keywords: [
    "Lucas Feliciano",
    "Software Engineer",
    "Systems Builder",
    "Digital Products",
    "AI Prototypes",
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
  ],
  "description": siteConfig.description,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "São Paulo",
    "addressCountry": "BR"
  }
};
