// ──────────────────────────────────────────────
// TODO: Replace all placeholder content below
// with your actual information.
// ──────────────────────────────────────────────

export const personalInfo = {
  name: "Abhinay Kumar Sahu",
  role: "Full-Stack & Android Developer",
  intro:
    "BCA undergraduate building offline-first mobile apps and modern web experiences. Skilled in Android development with Kotlin, React-based web design, and core computer science principles. Passionate about delivering clean code and user-focused solutions.",
  email: "sahuabhinay317@gmail.com",
  linkedin: "https://www.linkedin.com/in/abhinay-sahu-677846319",
  github: "https://github.com/MorphIsDed",
  resumeUrl: "#",
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
      "A premium tourism showcase for Lavasa designed as an immersive one-page experience with a refined mobile-first booking workflow.",
    techStack: ["React.js", "TypeScript", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/MorphIsDed/lavasa-travel-guide",
    liveUrl: "https://lavasa-travel-guide.vercel.app",
    challenge:
      "Make an inviting travel guide feel editorial and easy to explore while keeping the booking flow seamless on mobile.",
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
      "A polished tourism destination page with rich storytelling, strong mobile performance, and a 4x faster perceived load time.",
    highlights: ["Responsive travel planner", "Smooth section transitions", "Short-form architecture"],
  },
  {
    title: "Interactive Ping Pong Game",
    description:
      "A competitive browser-based game built with precise Canvas physics and crisp controls for two-player local matches.",
    techStack: ["HTML5 Canvas", "JavaScript", "CSS3"],
    githubUrl: "https://github.com/MorphIsDed/ping-pong-game",
    liveUrl: "https://morphisded.github.io/ping-pong-game",
    challenge:
      "Deliver a classic arcade game experience with responsive collision physics and polished visual feedback.",
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
      "A smooth, retro-inspired experience that feels tactile and responsive on every device.",
    highlights: ["Adaptive ball physics", "Minimal asset overhead", "Competitive two-player gameplay"],
  },
  {
    title: "Flash Deck - Offline Study Assistant",
    description:
      "An Android study companion built for offline-first flashcards, spaced repetition, and fast-review workflows.",
    techStack: ["Kotlin", "Android Studio", "Room Database", "Material Design 3"],
    githubUrl: "https://github.com/MorphIsDed/flash-deck",
    challenge:
      "Create an offline study tool with a polished mobile UI, custom animations, and local sync support.",
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
      "A clean Android app that keeps study sessions moving with fast load times and dependable offline performance.",
    highlights: ["Offline sync architecture", "Material 3 UI", "Smart review scheduling"],
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
      "Rapid prototypes for gesture-driven navigation, responsive hover states and scroll-aware motion." ,
    details: [
      "Tried scroll-linked state transitions for a richer hero scene.",
      "Built adaptive hover layers that hint at deeper interactivity.",
      "Measured ease-of-use with a simplified onboarding flow." ,
    ],
    badge: "UX Lab",
  },
  {
    title: "Offline-first architecture sketch",
    category: "Architecture",
    summary:
      "A lightweight sync model with local persistence, background queueing, and clear failure recovery." ,
    details: [
      "Store data locally with Room or IndexedDB.",
      "Sync changes via small delta payloads.",
      "Keep network retries invisible to the user." ,
    ],
    badge: "System Design",
  },
  {
    title: "Process clip: visual storytelling",
    category: "Studio",
    summary:
      "Mini-case notes showing how wireframes, motion, and content hierarchy drive a stronger portfolio narrative.",
    details: [
      "Selected content to support persona-led discovery.",
      "Layered sketches with fluid scroll behavior.",
      "Designed a sequence that leads to the contact call to action." ,
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
