# thelucasfeliciano.com.br

Portfolio of Lucas Feliciano — software engineer and systems builder based in São Paulo, Brazil. Live at [thelucasfeliciano.com.br](https://thelucasfeliciano.com.br).

Built with Next.js (App Router), React, TypeScript and Framer Motion.

## Where the content lives

| What | File |
|---|---|
| Projects (home list, `/portfolio` index and `/projects/[id]` dossiers) | `src/data/projects.ts` |
| Hero | `src/components/hero/HeroSection.tsx` |
| Evidence (awards and recognitions) | `src/components/sections/EvidenceBelt.tsx` |
| Learning (events and certifications) | `src/components/sections/Learning.tsx` |
| Logbook essays | `src/data/logbook/` |
| SEO, links and structured data | `src/lib/seo.ts` |

To add a project, add an entry to `src/data/projects.ts` and put its images in `public/projects/<id>/`. The sitemap, the dossier page and the lists update on their own.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

Note: this repo targets a recent Next.js with breaking changes. See `AGENTS.md` before writing framework code.
