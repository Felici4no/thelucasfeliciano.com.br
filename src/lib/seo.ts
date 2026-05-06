export const siteConfig = {
  name: "Lucas Feliciano",
  title: "Lucas Feliciano / Software / Architecture / Systems / Culture",
  description: "Working where persistent questions become systems. Software, architecture and culture as tools for structures that can be tested, used and improved.",
  url: "https://thelucasfeliciano.com.br",
  ogImage: "https://thelucasfeliciano.com.br/og-image.png",
  links: {
    github: "https://github.com/Felici4no",
    instagram: "https://www.instagram.com/thelucasfeliciano/",
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
    siteConfig.links.instagram,
  ],
  "description": siteConfig.description,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "São Paulo",
    "addressCountry": "BR"
  }
};
