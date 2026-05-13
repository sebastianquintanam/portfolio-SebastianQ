# Sebastian Quintana — Portfolio

Personal portfolio of Sebastián Quintana, Backend-focused Software Engineer and Systems Engineering student based in Bogotá, Colombia.

## Tech Stack

- [Astro 5](https://astro.build/) — static site generator
- [Tailwind CSS v4](https://tailwindcss.com/) — via `@tailwindcss/vite` plugin
- TypeScript

## Features

- Single-page portfolio with anchor navigation
- Dark monochromatic design (neutral-950 base)
- Fully responsive — mobile, tablet and desktop
- Fixed header with scroll-aware section offsets
- Hover micro-interactions on cards and buttons
- SEO-ready: Open Graph, Twitter Card, canonical, meta description
- No client-side JavaScript frameworks — pure Astro components
- All content driven from `src/config/site.ts` and `src/data/`

## Project Structure

```
src/
├── components/
│   ├── layout/       # Header, Footer
│   ├── sections/     # Hero, About, Skills, SelectedWork, Experience, Education, Contact
│   └── ui/           # ProjectCard
├── config/
│   └── site.ts       # Single source of truth: name, role, links, description
├── data/             # skills.ts, projects.ts, experience.ts, education.ts, certifications.ts
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   └── index.astro
└── styles/
    └── global.css
```

## Getting Started

```sh
# Install dependencies
pnpm install

# Start dev server at localhost:4321
pnpm dev
```

## Scripts

| Command | Action |
| --- | --- |
| `pnpm dev` | Start local dev server at `localhost:4321` |
| `pnpm build` | Build production site to `./dist/` |
| `pnpm preview` | Preview the production build locally |
| `pnpm astro check` | Run Astro type checking |

## Deployment

This site is configured for static output and deploys to [Vercel](https://vercel.com/).

Before deploying:
1. Set `url` in `src/config/site.ts` to the final domain.
2. Add a `og-image.png` (1200×630px) to `/public/` and uncomment the `og:image` tags in `src/layouts/BaseLayout.astro`.
3. Push to the connected GitHub repository — Vercel will build and deploy automatically.

## Project Status

In active development. All main sections complete. Pending: final deploy and domain configuration.
