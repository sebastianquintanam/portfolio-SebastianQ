---
name: deploy-check
description: Check whether the Astro portfolio is ready for deployment to Vercel.
---

Use this skill before deploying the portfolio to Vercel or after important visual/code changes.

Before checking, read:
- package.json
- astro.config.mjs
- src/config/site.ts
- docs/VISUAL_DIRECTION.md if recent UI changes were made

Deployment checklist:
- Run `npm run build` and report the full output.
- Check for build errors or warnings.
- Verify `src/config/site.ts` has the `url` field set (required for OG tags and sitemap).
- Check routes and internal anchors.
- Check header navigation links.
- Check project links, contact links, GitHub, LinkedIn, and email.
- Check responsive behavior.
- Check animations and prefers-reduced-motion.
- Check for unnecessary or leftover files in public/ or src/.
- Check git status and confirm no uncommitted changes are blocking deploy.
- Confirm Astro output mode in astro.config.mjs is compatible with Vercel (static or server).
- Confirm whether the project is ready for Vercel.

Do not make large refactors during deploy check.
Only fix small issues that directly block deployment or clearly affect production quality.

After checking:
1. Report build status.
2. Report issues found.
3. Report fixes made.
4. Say whether it is ready for deploy.