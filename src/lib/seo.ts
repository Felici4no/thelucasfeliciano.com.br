export const siteConfig = {
  name: "Lucas Feliciano",
  title: "Lucas Feliciano | Software Architect & Builder",
  description: "I build systems for real problems. Exploring the intersection of software, architecture, and culture through a technical editorial lens.",
  url: "https://thelucasfeliciano.com.br",
  ogImage: "https://thelucasfeliciano.com.br/og-image.png",
  links: {
    github: "https://github.com/lucasfeliciano",
    linkedin: "https://linkedin.com/in/lucasfeliciano",
    instagram: "https://instagram.com/lucasfeliciano",
  },
  keywords: [
    "Lucas Feliciano",
    "Software Engineer",
    "Architect",
    "Systems Designer",
    "Digital Products",
    "Builder",
    "Tech Portfolio",
    "São Paulo Developer"
  ],
};

export const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": siteConfig.name,
  "url": siteConfig.url,
  "jobTitle": "Software Architect",
  "sameAs": [
    siteConfig.links.github,
    siteConfig.links.linkedin,
    siteConfig.links.instagram,
  ],
  "description": siteConfig.description,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "São Paulo",
    "addressCountry": "BR"
  }
};
