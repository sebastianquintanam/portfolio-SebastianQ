# Prompts para Claude Code

Este documento contiene prompts reutilizables para trabajar el portafolio fase por fase.

## Prompt general antes de cada fase

```text
Lee primero estos archivos:
- CLAUDE.md
- docs/ROADMAP.md
- docs/PHASE_STATUS.md
- docs/DECISIONS.md

Trabaja únicamente en la fase que te indique. No avances a fases posteriores. No sobreingenierices, no inventes experiencia y no modifiques archivos innecesarios.

Antes de implementar, resume:
1. Qué entendiste.
2. Qué archivos vas a tocar.
3. Qué cambios harás.
4. Qué riesgos ves.

Luego espera mi aprobación si el cambio es grande.

Fase 1 — Configuración técnica base

Vamos a ejecutar únicamente la Fase 1: Configuración técnica base.

Tareas:
1. Revisa package.json.
2. Revisa astro.config.mjs.
3. Revisa si Tailwind está instalado y configurado correctamente.
4. Revisa src/styles/global.css.
5. Corrige únicamente lo necesario para que el proyecto Astro funcione bien.
6. No crees secciones todavía.
7. No modifiques contenido profesional todavía.

Al final:
- Indica qué archivos modificaste.
- Explica qué debo probar.
- Actualiza docs/PHASE_STATUS.md.


Fase 2 — Layout principal

Vamos a ejecutar únicamente la Fase 2: Layout principal.

Tareas:
1. Crea src/layouts/BaseLayout.astro.
2. Crea src/components/layout/Header.astro.
3. Crea src/components/layout/Footer.astro.
4. Actualiza src/pages/index.astro para usar BaseLayout, Header y Footer.
5. Agrega metadata básica.
6. Mantén diseño simple, limpio y funcional.

No crees todavía Hero, About, Skills ni Projects.

Al final:
- Indica qué archivos modificaste.
- Explica qué debo probar.
- Actualiza docs/PHASE_STATUS.md.


Fase 3 — Configuración central del sitio
Vamos a ejecutar únicamente la Fase 3: Configuración central del sitio.

Tareas:
1. Crea src/config/site.ts.
2. Agrega los datos principales de Sebastián Quintana:
   - name
   - role
   - location
   - email
   - linkedin
   - github como placeholder si no está confirmado
   - shortBio
   - longBio
3. Usa textos profesionales, realistas y sin exagerar.
4. No inventes métricas ni experiencia.

Al final:
- Indica qué archivos modificaste.
- Explica cómo usar site.ts en los componentes.
- Actualiza docs/PHASE_STATUS.md.


Fase 4 — Hero
Vamos a ejecutar únicamente la Fase 4: Hero.

Tareas:
1. Crea src/components/sections/Hero.astro.
2. Usa datos desde src/config/site.ts cuando sea posible.
3. Crea un headline profesional.
4. Crea un subtítulo claro.
5. Agrega CTA a Projects y Contact.
6. Agrega stack principal de forma visual.
7. Actualiza index.astro para renderizar Hero.

No crees About, Skills ni Projects todavía.

Al final:
- Indica qué archivos modificaste.
- Explica qué debo revisar visualmente.
- Actualiza docs/PHASE_STATUS.md.


Fase 5 — About Me
Vamos a ejecutar únicamente la Fase 5: About Me.

Tareas:
1. Crea src/components/sections/About.astro.
2. Construye un storytelling profesional basado en:
   - Formación en SST.
   - Inglés en Australia.
   - Transición a software.
   - Ingeniería de Sistemas en Universidad EAN.
   - Enfoque en backend, cloud y ciberseguridad.
3. Mantén un tono humano, claro y profesional.
4. No exageres ni inventes experiencia.
5. Actualiza index.astro para renderizar About.

Al final:
- Indica qué archivos modificaste.
- Explica qué debo revisar del texto.
- Actualiza docs/PHASE_STATUS.md.


Fase 6 — Skills
Vamos a ejecutar únicamente la Fase 6: Skills.

Tareas:
1. Crea src/data/skills.ts.
2. Agrupa habilidades en categorías:
   - Backend
   - Frontend
   - Databases
   - Cloud & DevOps
   - Tools
   - Cybersecurity Basics
3. Crea src/components/ui/SkillBadge.astro si aporta valor.
4. Crea src/components/sections/Skills.astro.
5. Actualiza index.astro para renderizar Skills.

No exageres niveles. No uses porcentajes falsos.

Al final:
- Indica qué archivos modificaste.
- Explica cómo están organizadas las skills.
- Actualiza docs/PHASE_STATUS.md.


Fase 7 — Projects
Vamos a ejecutar únicamente la Fase 7: Projects.

Antes de implementar, lee docs/PROJECTS_DATA.md.

Tareas:
1. Propón cuáles 3 o 4 proyectos deberían aparecer primero.
2. No inventes información faltante.
3. Crea ProjectCard.astro.
4. Crea Projects.astro.
5. Usa content collections o data files según sea más simple y mantenible.
6. Cada proyecto debe mostrar:
   - Nombre
   - Tipo
   - Problema
   - Solución
   - Stack
   - Estado
   - Link si existe o placeholder si no está confirmado

No avances hasta que Sebastián apruebe los proyectos seleccionados.

Al final:
- Indica qué archivos modificarías.
- Espera aprobación antes de escribir contenido definitivo.


Fase 8 — Experience
Vamos a ejecutar únicamente la Fase 8: Experience.

Antes de implementar, lee docs/EXPERIENCE_DATA.md.

Tareas:
1. Propón cómo presentar la experiencia sin exagerar.
2. Crea Experience.astro.
3. Usa bullets claros y defendibles.
4. No inventes cargos, fechas, métricas ni tecnologías.
5. Deja placeholders donde falte confirmación.

Al final:
- Indica qué archivos modificaste.
- Explica qué datos necesita confirmar Sebastián.
- Actualiza docs/PHASE_STATUS.md.


Fase 9 — Education & Certifications
Vamos a ejecutar únicamente la Fase 9: Education & Certifications.

Tareas:
1. Crea src/data/education.ts.
2. Crea src/data/certifications.ts.
3. Crea Education.astro.
4. Crea Certifications.astro.
5. Incluye formación académica y certificaciones confirmadas.
6. No inventes certificados ni fechas.

Al final:
- Indica qué archivos modificaste.
- Explica qué información falta confirmar.
- Actualiza docs/PHASE_STATUS.md.


Fase 10 — Contact
Vamos a ejecutar únicamente la Fase 10: Contact.

Tareas:
1. Crea Contact.astro.
2. Usa email y LinkedIn desde site.ts.
3. Agrega CTA profesional.
4. No crees formularios complejos todavía.
5. Actualiza index.astro.

Al final:
- Indica qué archivos modificaste.
- Explica qué debo probar.
- Actualiza docs/PHASE_STATUS.md.


Fase 11 — Diseño visual y responsive
Vamos a ejecutar únicamente la Fase 11: Diseño visual y responsive.

Tareas:
1. Revisa todo el sitio en mobile, tablet y desktop.
2. Mejora espaciados, jerarquía visual, tipografía y consistencia.
3. No cambies contenido profesional salvo errores evidentes.
4. No agregues librerías innecesarias.
5. Mantén el diseño moderno, minimalista y profesional.

Al final:
- Indica qué archivos modificaste.
- Explica qué mejoras visuales hiciste.
- Actualiza docs/PHASE_STATUS.md.


Fase 12 — SEO y rendimiento
Vamos a ejecutar únicamente la Fase 12: SEO y rendimiento.

Tareas:
1. Revisa BaseLayout.astro.
2. Agrega meta title y description.
3. Agrega Open Graph básico.
4. Revisa favicon.
5. Revisa accesibilidad básica.
6. No cambies diseño salvo que afecte accesibilidad.

Al final:
- Indica qué archivos modificaste.
- Explica qué debo probar.
- Actualiza docs/PHASE_STATUS.md.


Fase 13 — Inglés o bilingüe
Vamos a evaluar únicamente la Fase 13: versión en inglés o bilingüe.

No implementes rutas todavía.

Tareas:
1. Revisa el contenido actual.
2. Recomienda si conviene inglés, español o bilingüe.
3. Explica pros y contras.
4. Propón la estrategia más simple.
5. Espera aprobación antes de implementar.


Fase 14 — GitHub, README y deploy
Vamos a ejecutar únicamente la Fase 14: GitHub, README y deploy.

Tareas:
1. Revisa README.md.
2. Crea un README profesional.
3. Revisa scripts de package.json.
4. Prepara el proyecto para deploy en Vercel.
5. No hagas deploy automático sin mi aprobación.

Al final:
- Indica qué archivos modificaste.
- Explica pasos para publicar.
- Actualiza docs/PHASE_STATUS.md.

## Prompt para usar información de la hoja de vida

```text
Antes de modificar cualquier sección profesional del portafolio, lee:
- CLAUDE.md
- docs/RESUME_DATA.md
- docs/CONTENT_STRATEGY.md
- docs/PHASE_STATUS.md
- docs/DECISIONS.md

Usa docs/RESUME_DATA.md como fuente principal de verdad para experiencia, skills, educación, certificaciones e idiomas.

No inventes experiencia, métricas, cargos, fechas ni tecnologías. Si algo no aparece en RESUME_DATA.md, déjalo como pendiente o pregúntame antes de usarlo.

Adapta el contenido al portafolio, no lo copies literalmente como hoja de vida. Hazlo más visual, breve y atractivo para recruiters.

