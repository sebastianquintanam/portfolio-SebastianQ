# Phase Status

Este documento registra el avance del portafolio. Claude Code debe actualizarlo después de terminar cada fase o cambio importante.

## Estado general

| Fase | Nombre | Estado | Archivos modificados | Notas | Siguiente paso |
|---|---|---|---|---|---|
| 0 | Contexto y planificación | ✅ Completa | CLAUDE.md, docs/ | Documentación base creada | — |
| 1 | Configuración técnica base | ✅ Completa | astro.config.mjs, global.css, package.json | Tailwind v4 configurado con @tailwindcss/vite | — |
| 2 | Layout principal | ✅ Completa | src/layouts/BaseLayout.astro, src/components/layout/Header.astro, src/components/layout/Footer.astro, src/pages/index.astro | BaseLayout con meta tags, Header fijo con nav, Footer con links sociales | — |
| 3 | Configuración central | ✅ Completa | src/config/site.ts | Fuente de verdad actualizada con CV: rol, GitHub confirmado, coreStack del CV | — |
| 4 | Hero | ✅ Completa | src/components/sections/Hero.astro, src/pages/index.astro | Hero usa site.ts como fuente única: role, description, coreStack. Stack actualizado con Flask, AWS, GCP | — |
| 5 | About Me | ✅ Completa | src/components/sections/About.astro, src/pages/index.astro | Storytelling real: SST → Australia → Misión TIC → UColtis → EAN → J Create. Panel de highlights: idiomas, certificación, grado | — |
| 6 | Skills | ✅ Completa | src/data/skills.ts, src/components/sections/Skills.astro, src/pages/index.astro, src/components/layout/Header.astro | Skills con logos Devicon (grayscale→color en hover). 6 categorías. Nav del Header traducida a inglés | — |
| 7 | Projects (Selected Work) | ✅ Completa | src/data/projects.ts, src/components/ui/ProjectCard.astro, src/components/sections/SelectedWork.astro, src/pages/index.astro | 4 cards: J Create CRM (Professional Case Study), Session Security (Cybersecurity Design), Portfolio (Personal), Payment Platform (Currently Building). Diseño minimalista, sin métricas en las cards, borde punteado para WIP | — |
| 8 | Experience | ✅ Completa | src/data/experience.ts, src/components/sections/Experience.astro, src/pages/index.astro | Timeline vertical: fecha+ubicación izquierda, contenido derecha con borde sutil. J Create y UColtis. 3 bullets cada uno. Tags técnicos. Métricas sutiles integradas en bullets | — |
| 9 | Education & Certifications | ✅ Completa | src/data/education.ts, src/data/certifications.ts, src/components/sections/Education.astro, src/pages/index.astro | Dos columnas desktop (Education / Certifications), columna única mobile. 4 entradas educación, 6 certificaciones. Sin cards, lista limpia | — |
| 10 | Contact | ✅ Completa | src/components/sections/Contact.astro, src/pages/index.astro | Título grande, texto breve, 3 link-cards (Email, LinkedIn, GitHub), línea de disponibilidad. Datos desde site.ts | — |
| 11 | Diseño responsive | ✅ Completa | BaseLayout.astro, Header.astro, Footer.astro, About.astro, Skills.astro, SelectedWork.astro, Experience.astro, Education.astro, Contact.astro, ProjectCard.astro | lang="en", scroll-mt-20 en secciones, nav mobile oculta Skills/Experience, footer mt-24→mt-8, tags unificados bg-neutral-900, dash legible, text badges hover, mb-12 unificado | — |
| 12 | SEO y rendimiento | ✅ Completa | src/config/site.ts, src/layouts/BaseLayout.astro, src/components/ui/ProjectCard.astro | siteTitle, description y url añadidos a site.ts. Head completo: OG, Twitter Card, robots, theme-color, canonical condicional. Comentario og:image para cuando exista imagen. aria-label en link "View →" de ProjectCard | Agregar site.url y og:image antes del deploy |
| 13 | Inglés o bilingüe | ✅ Completa | site.ts, Hero.astro, About.astro, Contact.astro, skills.ts, projects.ts, experience.ts | heroDescription separada del meta description; GCP→Google Cloud; 4 ajustes en About; Contact copy; CI/CD; 2 project descriptions; 2 experience bullets | — |
| 14 | GitHub y deploy | Pendiente | — | README y publicación | Esperar aprobación |

## Reglas de actualización

Después de cada fase, Claude Code debe registrar:

- Qué fase trabajó.
- Qué archivos modificó.
- Qué decisiones tomó.
- Qué quedó pendiente.
- Qué debe probar Sebastián.
- Si hay errores o advertencias.
