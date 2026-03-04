// ──────────────────────────────────────────────
// TODO: Replace all placeholder content below
// with your actual information.
// ──────────────────────────────────────────────

export const personalInfo = {
  name: "Abhinay Kumar Sahu",
  role: "Full-Stack Developer",
  intro:
    "BCA undergraduate building offline-first mobile apps and modern web experiences. Skilled in Android development with Kotlin, React-based web design, and core computer science principles. Passionate about delivering clean code and user-focused solutions.",
  email: "sahuabhinay317@gmail.com",
  linkedin: "https://www.linkedin.com/in/abhinay-sahu-677846319",
  github: "https://github.com/MorphIsDed",
  resumeUrl: "#",
} as const;

export interface Skill {
  name: string;
  category: "Frontend" | "Tools" | "Languages" | "Other";
}

export const skills: Skill[] = [
  // Frontend
  { name: "React.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "HTML5 & CSS3", category: "Frontend" },
  { name: "JavaScript (ES6+)", category: "Frontend" },
  { name: "Framer Motion", category: "Frontend" },
  { name: "Responsive Design", category: "Frontend" },
  { name: "Canvas API", category: "Frontend" },
  // Mobile & Backend
  { name: "Kotlin", category: "Frontend" },
  { name: "Android Studio", category: "Frontend" },
  { name: "Firebase", category: "Frontend" },
  { name: "Room Database", category: "Frontend" },
  // Tools & Languages
  { name: "Git & GitHub", category: "Tools" },
  { name: "VS Code", category: "Tools" },
  { name: "Figma", category: "Tools" },
  { name: "Android Studio", category: "Tools" },
  { name: "Vite", category: "Tools" },
  { name: "C++", category: "Languages" },
  { name: "Java", category: "Languages" },
  { name: "SQL", category: "Languages" },
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
    title: "Lavasa Travel Guide",
    description:
      "Single-page tourism web application showcasing attractions, accommodations, and activities across Lavasa. Features dynamic tour planning with reusable React components and smooth transitions. Fully responsive across all devices with zero page reloads for seamless user experience.",
    techStack: ["React.js", "JavaScript", "CSS3", "HTML5"],
    githubUrl: "https://github.com/MorphIsDed/lavasa-travel-guide",
    liveUrl: "https://lavasa-travel-guide.vercel.app",
  },
  {
    title: "Interactive Ping Pong Game",
    description:
      "Browser-based 2-player game with Canvas API rendering at stable 60fps. Features velocity-based ball physics, per-frame collision detection, and OOP design for paddle and ball entities. Complete game-state management with score tracking and keyboard-driven controls.",
    techStack: ["HTML5 Canvas", "JavaScript", "CSS3"],
    githubUrl: "https://github.com/MorphIsDed/ping-pong-game",
    liveUrl: "https://morphisded.github.io/ping-pong-game",
  },
  {
    title: "Flash Deck - Offline Study Assistant",
    description:
      "Native Android flashcard app with integrated AI chatbot supporting unlimited decks and spaced-repetition scheduling. 100% offline functionality via Room Database and SQLite. MVVM architecture with Kotlin coroutines maintains 60fps performance. Material Design 3 UI with custom card-flip animations.",
    techStack: ["Kotlin", "Android Studio", "Room Database", "Material Design 3"],
    githubUrl: "https://github.com/MorphIsDed/flash-deck",
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
  // Education
  {
    type: "education",
    role: "Bachelor of Computer Applications (BCA)",
    organization: "Christ University, Pune Lavasa Campus",
    duration: "2024 – 2028",
    description:
      "Coursework: Data Structures, Algorithms, OOP, DBMS, Operating Systems, Computer Networks. Qualified for Round 2 in Hackverse 2024.",
  },
  // Experience & Achievements
  {
    type: "experience",
    role: "Student Coordinator, Gaming Club",
    organization: "Christ University",
    duration: "2024 – Present",
    description:
      "Organized 10+ weekly game-dev and design sessions. Managed club events and member engagement activities across campus.",
  },
  {
    type: "experience",
    role: "Full-Stack Developer",
    organization: "Personal Projects",
    duration: "2024 – Present",
    description:
      "Built and deployed production-grade applications including offline-first mobile apps, responsive web applications, and interactive games with focus on clean architecture and user experience.",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;
