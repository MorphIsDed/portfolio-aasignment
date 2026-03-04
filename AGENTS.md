# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Portfolio website built with React 19, TypeScript 5.9, Vite 7, Tailwind CSS v4, and Framer Motion. Uses SWC for Fast Refresh via `@vitejs/plugin-react-swc`. Dark-first theme with light mode toggle.

## Commands

- **Dev server:** `npm run dev` — starts Vite dev server with HMR
- **Build:** `npm run build` — runs `tsc -b` then `vite build`, output goes to `dist/`
- **Lint:** `npm run lint` — runs ESLint on all `.ts`/`.tsx` files
- **Preview production build:** `npm run preview`

No test framework is configured yet. If adding tests, install Vitest (`npm i -D vitest`) and add a `"test": "vitest"` script.

## Architecture

Single-page portfolio with sections rendered in order by `App.tsx`.

- `src/data/portfolio.ts` — All content (personal info, projects, skills, timeline). Edit this file to update portfolio content.
- `src/hooks/useDarkMode.ts` — Dark mode state with localStorage persistence
- `src/components/sections/` — Page sections: Hero, About, Projects, Experience, Contact
- `src/components/layout/` — Navbar (sticky + mobile menu), Footer, CustomCursor
- `src/components/ui/` — Reusable primitives: ScrollReveal (Framer Motion wrapper), SectionHeading, ProjectCard, TimelineItem
- `src/index.css` — Tailwind v4 directives, custom theme (colors, fonts, animations), global styles

## TypeScript Configuration

Uses a project-references setup: `tsconfig.json` references `tsconfig.app.json` (app source in `src/`) and `tsconfig.node.json` (Vite config/tooling). Strict mode is enabled with `noUnusedLocals` and `noUnusedParameters`.

## Conventions

- Function components in TypeScript (`.tsx`), one component per file
- Tailwind CSS v4 for all styling — custom theme defined in `@theme` block in `index.css`
- Framer Motion for scroll-triggered animations via the `ScrollReveal` wrapper
- Dark/light mode via `dark:` Tailwind variant (class strategy on `<html>`)
- All portfolio content centralized in `src/data/portfolio.ts` with TODO comments for customization
- No external UI libraries — all components hand-built with Tailwind
- ESLint configured with `react-hooks` and `react-refresh` plugins
