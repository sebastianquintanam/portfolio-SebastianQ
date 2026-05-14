# Roadmap del Portafolio Sebastián Quintana

Este documento define las fases de construcción del portafolio profesional. Claude Code debe trabajar fase por fase, sin avanzar a la siguiente fase hasta que Sebastián revise y apruebe.

## Regla principal

No implementar varias fases al mismo tiempo.  
Antes de modificar código, revisar:
- CLAUDE.md
- docs/ROADMAP.md
- docs/PHASE_STATUS.md
- docs/DECISIONS.md

---

## Fase 0 — Contexto y planificación

### Objetivo
Dejar definido el contexto del proyecto, reglas de trabajo y roadmap general.

### Tareas
- Crear o revisar CLAUDE.md.
- Crear docs/ROADMAP.md.
- Crear docs/PHASE_STATUS.md.
- Definir stack principal.
- Definir reglas de no sobreingeniería.

### Archivos involucrados
- CLAUDE.md
- docs/ROADMAP.md
- docs/PHASE_STATUS.md

### Criterio de finalización
La documentación base existe y Claude Code entiende cómo trabajar fase por fase.

---

## Fase 1 — Configuración técnica base

### Objetivo
Dejar Astro correctamente configurado antes de construir componentes.

### Tareas
- Revisar package.json.
- Revisar astro.config.mjs.
- Confirmar configuración de Tailwind CSS si aplica.
- Revisar src/styles/global.css.
- Probar npm run dev.
- Confirmar que el sitio carga sin errores.

### Archivos involucrados
- package.json
- astro.config.mjs
- src/styles/global.css
- src/pages/index.astro

### Criterio de finalización
El proyecto corre correctamente con npm run dev y no hay errores de configuración.

---

## Fase 2 — Layout principal

### Objetivo
Crear la estructura base visual del sitio.

### Tareas
- Crear src/layouts/BaseLayout.astro.
- Crear Header.astro.
- Crear Footer.astro.
- Agregar meta tags básicos.
- Agregar navegación interna.
- Actualizar index.astro para usar el layout.

### Archivos involucrados
- src/layouts/BaseLayout.astro
- src/components/layout/Header.astro
- src/components/layout/Footer.astro
- src/pages/index.astro

### Criterio de finalización
La página usa BaseLayout, Header y Footer correctamente.

---

## Fase 3 — Configuración central del sitio

### Objetivo
Crear una fuente de verdad para los datos personales y profesionales.

### Tareas
- Crear src/config/site.ts.
- Guardar nombre, rol, ubicación, email, LinkedIn, GitHub y bio.
- Usar estos datos desde los componentes cuando sea posible.

### Archivos involucrados
- src/config/site.ts

### Criterio de finalización
Los datos principales del sitio están centralizados y no repetidos manualmente.

---

## Fase 4 — Hero

### Objetivo
Crear la primera impresión profesional del portafolio.

### Tareas
- Crear Hero.astro.
- Definir headline profesional.
- Agregar subtítulo claro.
- Agregar CTA a proyectos y contacto.
- Mostrar stack principal.

### Archivos involucrados
- src/components/sections/Hero.astro
- src/pages/index.astro
- src/config/site.ts

### Criterio de finalización
La sección Hero comunica claramente quién es Sebastián y qué perfil profesional tiene.

---

## Fase 5 — About Me

### Objetivo
Contar la historia profesional de Sebastián de forma humana, clara y estratégica.

### Tareas
- Crear About.astro.
- Explicar trayectoria: SST, inglés en Australia, transición a software, Ingeniería de Sistemas.
- Mostrar enfoque actual en backend, cloud y ciberseguridad.
- No exagerar ni sonar artificial.

### Archivos involucrados
- src/components/sections/About.astro
- src/pages/index.astro

### Criterio de finalización
La sección About explica la historia profesional con naturalidad y coherencia.

---

## Fase 6 — Skills

### Objetivo
Mostrar habilidades técnicas de manera ordenada y creíble.

### Tareas
- Crear src/data/skills.ts.
- Crear Skills.astro.
- Crear SkillBadge.astro si es necesario.
- Agrupar habilidades por categoría.

### Categorías sugeridas
- Backend
- Frontend
- Databases
- Cloud & DevOps
- Tools
- Cybersecurity Basics

### Archivos involucrados
- src/data/skills.ts
- src/components/sections/Skills.astro
- src/components/ui/SkillBadge.astro
- src/pages/index.astro

### Criterio de finalización
Las habilidades están organizadas, visualmente claras y no exageran el nivel real.

---

## Fase 7 — Projects

### Objetivo
Mostrar los proyectos más fuertes del perfil.

### Tareas
- Definir proyectos iniciales.
- Crear ProjectCard.astro.
- Crear Projects.astro.
- Usar content collections o datos estructurados según convenga.
- Mostrar problema, solución, stack y aprendizaje.

### Proyectos posibles
- Hotel EcoAventura.
- Sistema de protección automática de sesiones universitarias.
- Mini granjas solares.
- CRUD PHP/MySQL académico.
- Portafolio personal.
- Proyecto backend Java/Spring Boot.
- Proyecto Django/API REST.

### Archivos involucrados
- src/content/projects/
- src/components/sections/Projects.astro
- src/components/ui/ProjectCard.astro
- src/pages/index.astro

### Criterio de finalización
Hay mínimo 3 proyectos presentados de forma profesional, clara y defendible.

---

## Fase 8 — Experience

### Objetivo
Mostrar experiencia profesional y práctica sin inflar el perfil.

### Tareas
- Crear Experience.astro.
- Crear contenido de experiencia en src/content/experiences o src/data.
- Incluir experiencia en J-Create si aplica.
- Incluir experiencia freelance/proyectos si está bien sustentada.
- Usar bullets claros y realistas.

### Archivos involucrados
- src/content/experiences/
- src/components/sections/Experience.astro
- src/pages/index.astro

### Criterio de finalización
La experiencia se ve profesional, concreta y coherente con un perfil junior/mid-junior.

---

## Fase 9 — Education & Certifications

### Objetivo
Mostrar formación académica, cursos y certificaciones relevantes.

### Tareas
- Crear education.ts.
- Crear certifications.ts.
- Crear Education.astro.
- Crear Certifications.astro.
- Incluir Universidad EAN.
- Incluir formación previa en SST.
- Incluir cursos/certificaciones relevantes.

### Archivos involucrados
- src/data/education.ts
- src/data/certifications.ts
- src/components/sections/Education.astro
- src/components/sections/Certifications.astro
- src/pages/index.astro

### Criterio de finalización
La formación se presenta de forma clara, ordenada y útil para reclutadores.

---

## Fase 10 — Contact

### Objetivo
Facilitar que reclutadores o empresas contacten a Sebastián.

### Tareas
- Crear Contact.astro.
- Incluir email.
- Incluir LinkedIn.
- Incluir GitHub si está listo.
- Crear CTA profesional.

### Archivos involucrados
- src/components/sections/Contact.astro
- src/pages/index.astro
- src/config/site.ts

### Criterio de finalización
La sección de contacto es visible, directa y funcional.

---

## Fase 11 — Diseño visual y responsive

### Objetivo
Pulir la interfaz para que se vea profesional y no como plantilla básica.

### Tareas
- Mejorar espaciado.
- Mejorar jerarquía visual.
- Revisar mobile, tablet y desktop.
- Agregar hover states.
- Revisar consistencia visual.
- Ajustar tipografía y colores.

### Archivos involucrados
- src/styles/global.css
- componentes existentes

### Criterio de finalización
El portafolio se ve moderno, limpio, responsive y profesional.

---

## Fase 12 — SEO y rendimiento

### Objetivo
Preparar el sitio para publicación profesional.

### Tareas
- Agregar meta title.
- Agregar meta description.
- Agregar Open Graph.
- Revisar favicon.
- Optimizar imágenes.
- Revisar Lighthouse.
- Confirmar accesibilidad básica.

### Archivos involucrados
- src/layouts/BaseLayout.astro
- public/
- src/config/site.ts

### Criterio de finalización
El sitio tiene metadata correcta, buen rendimiento y buena presentación al compartir.

---

## Fase 13 — Versión en inglés o bilingüe

### Objetivo
Preparar el portafolio para aplicaciones internacionales.

### Tareas
- Decidir si el sitio será en inglés, español o bilingüe.
- Crear copy profesional en inglés.
- Evitar traducciones literales.
- Evaluar rutas /en y /es solo si realmente vale la pena.

### Archivos involucrados
- Por definir según decisión.

### Criterio de finalización
El portafolio tiene una versión lingüística coherente con el objetivo profesional.

---

## Fase 14 — GitHub, README y deploy

### Objetivo
Publicar el portafolio.

### Tareas
- Revisar repositorio.
- Crear README profesional.
- Hacer deploy en Vercel.
- Configurar dominio si aplica.
- Agregar link final a LinkedIn.

### Archivos involucrados
- README.md
- package.json
- configuración de deploy si aplica

### Criterio de finalización
El portafolio está publicado y listo para compartir.