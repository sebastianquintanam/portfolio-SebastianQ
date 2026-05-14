# Visual Direction — Engineering Layer

The portfolio feels like a clean technical interface: minimal, dark, elegant, structured, memorable.
It communicates backend engineering, cloud, APIs, databases, and architecture without becoming noisy.

## Target Style
Dark · Minimal · Elegant · Subtly futuristic · Technical · Recruiter-friendly

## Avoid
- Cyberpunk, gamer, cheap hacker aesthetic, saturation
- Noisy or heavy animations
- Copying references directly
- Personal photo in the hero
- Heavy visual libraries unless strictly necessary

## Typography
- Headlines: Space Grotesk or Geist Sans — strong, `font-bold / font-extrabold / font-black` depending on readability and visual balance, large scale, `tracking-tight`
- Body: Inter or Geist Sans — highly readable, no changes needed
- Labels / tags / nav: JetBrains Mono, Geist Mono, or IBM Plex Mono — subtle only
- No monospace for body text, no full terminal/retro look

## Accent Color
One accent: cyan/blue, used sparingly.
Approved uses: glow details, cursor or text reveal, border tracer dot, status badge, timeline highlights.
Never in body text. Never saturated.

## Hero
- Headline: large scale (`text-6xl sm:text-7xl`), `font-bold / font-extrabold / font-black` depending on readability and visual balance, gradient `white → neutral-400`
- Animation: subtle reveal (fade + vertical offset per word) or blinking cursor after headline
- Background visual: abstract technical element (nodes, grid, architecture lines) — max ~5% opacity, never competes with text
- Hide or simplify complex visuals on mobile
- Respect `prefers-reduced-motion`

## Project Cards
- Orbital border dot on hover: glow point that traces the border (`--mouse-x / --mouse-y` + `conic-gradient`)
- Only on main ProjectCard — do not globalize the effect
- Gate with `@media (hover: hover)` to avoid mobile issues

## Background
- Very subtle dot grid over `neutral-950` — desktop only, no visual weight, only depth

## Closing Section (before footer)
- Short, professional, not repetitive
- Suggested direction: availability status + brief closing phrase
- Use the Hero headline treatment for visual coherence

## Technical Rules
- Stack: Astro, Tailwind CSS, vanilla CSS, minimal JavaScript
- Respect `prefers-reduced-motion` on all animations
- Maintain performance and responsive design
- Do not change professional content unless explicitly requested

## Implementation Order
1. CSS variables, dot grid background, animation keyframes
2. Hero typography and headline animation
3. Hero abstract background visual
4. ProjectCard orbital border dot
5. Skills spacing and visual hierarchy
6. Closing section before footer
7. Final responsive, accessibility, and build review
