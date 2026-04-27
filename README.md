# Portfolio Website

A modern, responsive portfolio website built with React 19, TypeScript 5.9, Vite 7, Tailwind CSS v4, and Framer Motion. Features a dark-first theme with light mode toggle, smooth animations, and a single-page layout showcasing personal information, projects, experience, and contact details.

## Tech Stack

- **Frontend Framework:** React 19 with TypeScript
- **Build Tool:** Vite 7 with SWC for Fast Refresh
- **Styling:** Tailwind CSS v4 with custom theme (colors, fonts, animations)
- **Animations:** Framer Motion for scroll-triggered animations
- **Icons:** Custom icons and assets
- **Deployment:** Ready for static hosting (e.g., Vercel, Netlify)

## Prerequisites

- Node.js (version 18 or higher recommended)
- npm or yarn package manager

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd portfolio-assignment
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Development Server
Start the Vite development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
The server will run at `http://localhost:5173` by default.

### Build for Production
Build the project for production:
```bash
npm run build
```
The output will be in the `dist/` directory.

### Preview Production Build
Preview the production build locally:
```bash
npm run preview
```

### Linting
Run ESLint to check for code quality issues:
```bash
npm run lint
```

## Customization

This portfolio is designed to be easily customizable. All content is centralized in `src/data/portfolio.ts`. Edit this file to update:

- Personal information (name, bio, contact details)
- Projects (descriptions, links, technologies)
- Skills and experience
- Timeline events

The website uses a dark-first theme with Tailwind CSS. Dark/light mode is toggled via a class on the `<html>` element and persisted in localStorage.

## Project Structure

- `src/data/portfolio.ts` — All portfolio content
- `src/hooks/useDarkMode.ts` — Dark mode state management
- `src/components/sections/` — Page sections (Hero, About, Projects, Experience, Contact)
- `src/components/layout/` — Layout components (Navbar, Footer, CustomCursor)
- `src/components/ui/` — Reusable UI components (ScrollReveal, ProjectCard, etc.)
- `src/index.css` — Tailwind directives and custom styles
- `src/three/` — Three.js components for 3D elements (Hero scene)

## Architecture

The app is a single-page application rendered in order by `App.tsx`. Sections are wrapped in `ScrollReveal` for Framer Motion animations. No external UI libraries are used; all components are hand-built with Tailwind CSS.

## Contributing

Feel free to fork and customize this portfolio for your own use. If you find bugs or have suggestions, open an issue or submit a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).
