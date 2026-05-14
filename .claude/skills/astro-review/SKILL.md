---
name: astro-review
description: Review Astro components, Tailwind usage, responsive behavior, accessibility, imports, props, and project structure before accepting changes.
---

Use this skill when reviewing code quality, Astro structure, component organization, Tailwind classes, responsive behavior, accessibility, or possible implementation issues.

Before reviewing, read:
- docs/DESIGN_SYSTEM.md
- docs/VISUAL_DIRECTION.md if the review involves UI
- package.json
- the files changed in the current task

Review checklist:
- Astro components are simple and readable.
- Imports and props are correct.
- Tailwind classes are consistent with the design system.
- Responsive behavior works on mobile, tablet, and desktop.
- Accessibility is respected.
- Animations respect prefers-reduced-motion.
- No unnecessary JavaScript was added.
- No heavy libraries were added without a strong reason.
- The implementation remains defendable for a junior/mid software engineering portfolio.
- The change does not overengineer the project.

After review:
1. List what looks good.
2. List any issues found.
3. Suggest minimal fixes.
4. Avoid rewriting working code unnecessarily.