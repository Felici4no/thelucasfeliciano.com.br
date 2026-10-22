# thelucasfeliciano.com.br

Portfolio of Lucas Feliciano — software engineer and systems builder based in São Paulo, Brazil. Live at [thelucasfeliciano.com.br](https://thelucasfeliciano.com.br).

Built with Next.js (App Router), React, TypeScript and Framer Motion.

## Where the content lives

| What | File |
|---|---|
| Projects (home list, `/portfolio` index and `/projects/[id]` dossiers) | `src/data/projects.ts` |
| Hero (optional Renaissance cover with parallax: drop `public/hero/cover.jpg` and edit the credit in `src/lib/hero.ts`) | `src/components/hero/HeroSection.tsx`, `HeroCover.tsx` |
| Article layout (Wikipedia-style), shared typography | `src/components/wiki/wiki.module.css`, `src/app/page.tsx` |
| Title, notice, infobox and lead | `src/components/wiki/ArticleTop.tsx`, `Infobox.tsx` (portrait goes in `public/about/lucas.jpg`) |
| Recognition, What I do, How I work, Background | `src/components/wiki/Recognition.tsx`, `Services.tsx`, `Method.tsx`, `Background.tsx` |
| Projects tables (rows come from `projects.ts`) | `src/components/wiki/Projects.tsx` |
| Contents sidebar, mobile bar and section list | `src/components/wiki/SectionToc.tsx`, `SectionBar.tsx`, `src/lib/sections.ts` |
| Learning (events and certifications) | `src/data/learning.ts` |
| Logbook essays | `src/data/logbook/` |
| SEO, links and structured data | `src/lib/seo.ts` |
| Contact channels and the primary CTA | `src/lib/seo.ts` (`links`, `availability`) and `src/lib/contact.ts` |

Optional channels (`linkedin`, `whatsapp`, `booking`) in `siteConfig.links` only render once filled in. When `booking` is set it becomes the primary CTA instead of the e-mail. CTA clicks are reported to Vercel Web Analytics as `cta_click` events.

To add a project, add an entry to `src/data/projects.ts` and put its images in `public/projects/<id>/`. The sitemap, the dossier page and the lists update on their own.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

Note: this repo targets a recent Next.js with breaking changes. See `AGENTS.md` before writing framework code.
