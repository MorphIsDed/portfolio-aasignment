// ──────────────────────────────────────────────
// TODO: Replace all placeholder content below
// with your actual information.
// ──────────────────────────────────────────────

export const personalInfo = {
  name: "Aditya Sahu", // TODO: Replace with your name
  role: "Frontend Developer",
  intro:
    "I craft modern, responsive web experiences with clean code and thoughtful design. Passionate about turning ideas into polished digital products.",
  email: "your.email@example.com", // TODO: Replace
  linkedin: "https://linkedin.com/in/yourprofile", // TODO: Replace
  github: "https://github.com/yourusername", // TODO: Replace
  resumeUrl: "#", // TODO: Replace with actual resume link
} as const;

export interface Skill {
  name: string;
  category: "Frontend" | "Tools" | "Languages" | "Other";
}

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "HTML5 / CSS3", category: "Frontend" },
  { name: "JavaScript (ES6+)", category: "Frontend" },
  { name: "Framer Motion", category: "Frontend" },
  { name: "Responsive Design", category: "Frontend" },
  // Tools
  { name: "Git & GitHub", category: "Tools" },
  { name: "VS Code", category: "Tools" },
  { name: "Figma", category: "Tools" },
  { name: "Vite", category: "Tools" },
  { name: "npm", category: "Tools" },
  // Languages
  { name: "TypeScript", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "C++", category: "Languages" },
];

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "E-Commerce Dashboard", // TODO: Replace with your project
    description:
      "A full-featured admin dashboard with real-time analytics, inventory management, and order tracking. Built with a component-driven architecture.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    githubUrl: "https://github.com/yourusername/project-1", // TODO: Replace
    liveUrl: "https://project-1.vercel.app", // TODO: Replace
  },
  {
    title: "Weather App", // TODO: Replace with your project
    description:
      "A clean weather application that displays current conditions and 7-day forecasts using geolocation and the OpenWeather API with smooth animations.",
    techStack: ["React", "TypeScript", "REST API", "CSS Modules"],
    githubUrl: "https://github.com/yourusername/project-2", // TODO: Replace
    liveUrl: "https://project-2.vercel.app", // TODO: Replace
  },
  {
    title: "Task Management Tool", // TODO: Replace with your project
    description:
      "A drag-and-drop Kanban board for managing tasks with persistent local storage, filtering, and keyboard shortcuts for power users.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "DnD Kit"],
    githubUrl: "https://github.com/yourusername/project-3", // TODO: Replace
    liveUrl: "https://project-3.vercel.app", // TODO: Replace
  },
];

export interface TimelineEntry {
  type: "experience" | "education";
  role: string;
  organization: string;
  duration: string;
  description: string;
}

export const timeline: TimelineEntry[] = [
  // Experience
  {
    type: "experience",
    role: "Frontend Developer Intern", // TODO: Replace
    organization: "Company Name", // TODO: Replace
    duration: "Jun 2025 – Present", // TODO: Replace
    description:
      "Built and maintained responsive web applications using React, TypeScript, and Tailwind CSS. Collaborated with design and backend teams.", // TODO: Replace
  },
  {
    type: "experience",
    role: "Freelance Web Developer", // TODO: Replace
    organization: "Self-employed", // TODO: Replace
    duration: "Jan 2024 – May 2025", // TODO: Replace
    description:
      "Delivered modern landing pages and web apps for small businesses. Focused on performance and accessibility.", // TODO: Replace
  },
  // Education
  {
    type: "education",
    role: "B.Tech in Computer Science", // TODO: Replace
    organization: "Your University", // TODO: Replace
    duration: "2022 – 2026", // TODO: Replace
    description:
      "Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems.", // TODO: Replace
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;
