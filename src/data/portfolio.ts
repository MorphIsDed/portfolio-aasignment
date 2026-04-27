// ──────────────────────────────────────────────
// TODO: Replace all placeholder content below
// with your actual information.
// ──────────────────────────────────────────────

export const personalInfo = {
  name: "Abhinay Kumar Sahu",
  role: "Full-Stack & Android Developer",
  intro:
    "BCA undergraduate focused on building responsive web experiences and offline-first mobile products. I work across React, TypeScript, Kotlin, and product-minded UI systems, with an emphasis on clean architecture, smooth interactions, and user-focused execution.",
  email: "sahuabhinay317@gmail.com",
  linkedin: "https://www.linkedin.com/in/abhinay-sahu-677846319",
  github: "https://github.com/MorphIsDed",
  resumeUrl: "/Resume.pdf",
} as const;

export interface Skill {
  name: string;
  category: "Frontend" | "Tools" | "Languages";
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
  challenge?: string;
  constraints?: string[];
  decisions?: string[];
  outcome?: string;
  highlights?: string[];
}

export const projects: Project[] = [
  {
    title: "Lavasa Travel Guide",
    description:
      "A premium one-page tourism experience for Lavasa with editorial storytelling, polished section transitions, and a streamlined mobile-first booking journey.",
    techStack: ["React.js", "TypeScript", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/MorphIsDed/lavasa-travel-guide",
    liveUrl: "https://lavasa-travel-guide.vercel.app",
    challenge:
      "Make a destination site feel immersive and premium while keeping navigation and booking interactions frictionless on smaller screens.",
    constraints: [
      "Fast first load on budget devices",
      "No router churn for a one-page experience",
      "Responsive layouts for both tourists and planners",
    ],
    decisions: [
      "Use modular React components for itinerary cards",
      "Animate page sections with subtle entrance motion",
      "Headless form patterns for booking preview interactions",
    ],
    outcome:
      "A polished tourism landing experience with stronger storytelling, clear booking flow, and fast mobile performance.",
    highlights: ["Editorial landing experience", "Responsive travel planner", "Smooth section transitions"],
  },
  {
    title: "Interactive Ping Pong Game",
    description:
      "A browser-based ping pong game built with Canvas physics, responsive controls, and a lightweight rendering loop for competitive local play.",
    techStack: ["HTML5 Canvas", "JavaScript", "CSS3"],
    githubUrl: "https://github.com/MorphIsDed/ping-pong-game",
    liveUrl: "https://morphisded.github.io/ping-pong-game",
    challenge:
      "Recreate the feel of a classic arcade game with stable ball physics, responsive input handling, and satisfying visual feedback.",
    constraints: [
      "60 FPS target across desktop and mobile",
      "Low bundle size under 200 KB",
      "Reliable keyboard controls and simple AI state",
    ],
    decisions: [
      "Use a fixed timestep game loop for stable physics",
      "Layer canvas draws with motion blur effects",
      "Add adaptive difficulty and sound feedback",
    ],
    outcome:
      "A retro-inspired game that feels tactile, responsive, and performant without relying on heavy assets or frameworks.",
    highlights: ["Stable canvas game loop", "Adaptive ball physics", "Competitive two-player gameplay"],
  },
  {
    title: "Flash Deck - Offline Study Assistant",
    description:
      "An offline-first Android study companion for flashcards, spaced repetition, and distraction-free review workflows.",
    techStack: ["Kotlin", "Android Studio", "Room Database", "Material Design 3"],
    githubUrl: "https://github.com/MorphIsDed/flash-deck",
    challenge:
      "Create a dependable study tool with polished mobile UX, local persistence, and a review flow that stays fast even offline.",
    constraints: [
      "Reliable offline-first storage",
      "Smooth animations without frame drops",
      "A clear study workflow for repeating and reviewing cards",
    ],
    decisions: [
      "Adopt MVVM with Kotlin coroutines",
      "Use Room Database for local persistence",
      "Build intuitive swipe gestures for deck review",
    ],
    outcome:
      "A clean Android app that keeps study sessions fast, dependable, and usable without constant connectivity.",
    highlights: ["Offline-first architecture", "Material 3 UI", "Smart review scheduling"],
  },
];

export interface LabNote {
  title: string;
  category: string;
  summary: string;
  details: string[];
  badge: string;
}

export const labNotes: LabNote[] = [
  {
    title: "Adaptive interaction experiments",
    category: "Experiment",
    summary:
      "Rapid prototypes exploring gesture-led navigation, responsive hover states, and scroll-aware motion systems.",
    details: [
      "Tried scroll-linked state transitions for a richer hero scene.",
      "Built adaptive hover layers that hint at deeper interactivity.",
      "Measured clarity with a lighter, more guided onboarding flow.",
    ],
    badge: "UX Lab",
  },
  {
    title: "Offline-first architecture sketch",
    category: "Architecture",
    summary:
      "A lightweight sync model built around local persistence, background queueing, and predictable failure recovery.",
    details: [
      "Store data locally with Room or IndexedDB.",
      "Sync changes via small delta payloads.",
      "Keep retry and recovery states unobtrusive for the user.",
    ],
    badge: "System Design",
  },
  {
    title: "Process clip: visual storytelling",
    category: "Studio",
    summary:
      "Mini case notes on how wireframes, motion, and content hierarchy shape a stronger portfolio narrative.",
    details: [
      "Selected content to support persona-led discovery.",
      "Layered sketches with fluid scroll behavior.",
      "Designed a sequence that leads naturally into the contact CTA.",
    ],
    badge: "Design Notes",
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
      "Coursework includes Data Structures, Algorithms, OOP, DBMS, Operating Systems, and Computer Networks. Qualified for Round 2 in Hackverse 2024.",
  },
  // Experience & Achievements
  {
    type: "experience",
    role: "Student Coordinator, Gaming Club",
    organization: "Christ University",
    duration: "2024 – Present",
    description:
      "Organized 10+ weekly game development and design sessions while coordinating events and member engagement across campus.",
  },
  {
    type: "experience",
    role: "Full-Stack Developer",
    organization: "Personal Projects",
    duration: "2024 – Present",
    description:
      "Built responsive web apps, offline-first mobile products, and interactive browser experiences with a focus on clean architecture and user experience.",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;
