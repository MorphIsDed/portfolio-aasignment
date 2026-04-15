import { motion } from "framer-motion";
import { lazy, Suspense, useEffect, useState } from "react";
import { personalInfo, projects, skills, timeline } from "../../data/portfolio";
import RenderErrorBoundary from "../ui/RenderErrorBoundary";

const HeroScene = lazy(() => import("../../three/components/HeroScene"));

const heroMetrics = [
  { value: `${projects.length}+`, label: "Projects shipped" },
  { value: `${skills.length}+`, label: "Tools in rotation" },
  { value: `${timeline.length}+`, label: "Experience entries" },
];

export default function Hero() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [webglAvailable] = useState(() => {
    if (typeof window === "undefined") return false;
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl2") ?? canvas.getContext("webgl");
    return Boolean(gl);
  });

  const hasProjects = projects.length > 0;
  const safeActiveProjectIndex = hasProjects
    ? Math.min(projects.length - 1, Math.max(0, activeProjectIndex))
    : 0;

  useEffect(() => {
    let rafId = 0;

    const updateActiveProject = () => {
      const projectsTop = document.getElementById("projects")?.offsetTop ?? window.innerHeight;
      const contactTop = document.getElementById("contact")?.offsetTop ?? projectsTop + window.innerHeight * 1.4;
      const scrollCenter = window.scrollY + window.innerHeight * 0.45;

      if (!hasProjects || scrollCenter < projectsTop) {
        setActiveProjectIndex((prev) => (prev === 0 ? prev : 0));
      } else if (projects.length > 0) {
        const relative = Math.min(1, Math.max(0, (scrollCenter - projectsTop) / Math.max(1, contactTop - projectsTop)));
        const index = Math.min(projects.length - 1, Math.floor(relative * projects.length));
        setActiveProjectIndex((prev) => (prev === index ? prev : index));
      }

      const heroHeight = document.getElementById("hero")?.offsetHeight ?? window.innerHeight;
      const progress = Math.min(1, Math.max(0, window.scrollY / Math.max(1, heroHeight - window.innerHeight)));
      setScrollProgress((prev) => (Math.abs(prev - progress) < 0.01 ? prev : progress));
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        updateActiveProject();
        rafId = 0;
      });
    };

    updateActiveProject();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateActiveProject);
    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateActiveProject);
    };
  }, [hasProjects]);

  return (
    <section
      id="hero"
      className="theme-section relative flex min-h-screen items-center overflow-hidden pt-24 text-gray-900 dark:text-gray-100 sm:pt-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(111,231,221,0.12),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(240,138,75,0.12),transparent_28%)]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:pb-24">
        <div className="section-frame">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 metal-label"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
            </span>
            Open to ambitious product and frontend roles
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mb-5 text-sm font-medium uppercase tracking-[0.35em] text-gray-300"
          >
            Interactive Full-Stack Portfolio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.36 }}
            className="mb-5 max-w-3xl font-display text-5xl font-bold tracking-[-0.06em] text-white sm:text-6xl md:text-7xl"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mb-6 max-w-2xl bg-gradient-to-r from-accent-500 via-gray-700 to-cyan-500 bg-clip-text font-display text-xl font-medium text-transparent dark:from-accent-400 dark:via-white dark:to-cyan-400 sm:text-2xl md:text-3xl"
          >
            {personalInfo.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.56 }}
            className="mb-10 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg"
          >
            {personalInfo.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.68 }}
            className="mb-10 flex flex-col items-start gap-4 sm:flex-row"
          >
            <motion.a
              href="#projects"
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_50px_rgba(220,110,49,0.28)] transition-all hover:-translate-y-0.5 hover:shadow-[0_28px_70px_rgba(220,110,49,0.34)]"
            >
              Explore Projects
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5l6 6m0 0l-6 6m6-6h-15" />
              </svg>
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-6 py-3 text-sm font-semibold text-gray-950 transition-all hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-100 dark:hover:text-cyan-300"
            >
              Start a Conversation
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid gap-3 sm:grid-cols-3"
          >
            {heroMetrics.map((metric) => (
              <div key={metric.label} className="theme-surface-muted rounded-2xl px-4 py-4">
                <p className="font-display text-2xl font-bold text-white">{metric.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.24em] text-gray-300">
                  {metric.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="premium-shell relative min-h-[28rem] overflow-hidden rounded-[2.2rem] p-4 sm:min-h-[34rem] sm:p-6"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.22),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.12),transparent_45%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.05),transparent_40%)]" />
          <div className="absolute inset-0">
            {webglAvailable ? (
              <RenderErrorBoundary
                fallback={<div className="h-full w-full bg-gradient-to-br from-transparent via-accent-500/5 to-cyan-400/10" />}
              >
                <Suspense
                  fallback={<div className="h-full w-full bg-gradient-to-br from-transparent via-accent-500/5 to-cyan-400/10" />}
                >
                  <HeroScene activeProjectIndex={safeActiveProjectIndex} scrollProgress={scrollProgress} />
                </Suspense>
              </RenderErrorBoundary>
            ) : (
              <div className="h-full w-full bg-gradient-to-br from-transparent via-accent-500/5 to-cyan-400/10" />
            )}
          </div>
          <div className="pointer-events-none absolute left-5 top-5 rounded-2xl border border-white/10 bg-dark-900/65 px-4 py-3 backdrop-blur-xl">
            <p className="text-[10px] uppercase tracking-[0.28em] text-gray-400">Current mode</p>
            <p className="mt-1 font-display text-lg font-semibold text-white">Liquid Glass Lab</p>
          </div>
          <div className="pointer-events-none absolute bottom-5 right-5 max-w-[14rem] rounded-2xl border border-white/10 bg-dark-900/65 px-4 py-3 backdrop-blur-xl">
            <p className="text-[10px] uppercase tracking-[0.28em] text-gray-400">Design signal</p>
            <p className="mt-1 text-sm leading-relaxed text-gray-300">
              Real-time shader motion, editorial spacing, and tactile glass surfaces.
            </p>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-16 flex flex-wrap justify-center gap-3 px-4 text-sm">
            {projects.map((project, index) => (
              <span
                key={project.title}
                className={`rounded-full border px-3 py-2 transition-all ${
                  index === activeProjectIndex
                    ? "border-accent-500 bg-accent-500 text-white shadow-[0_10px_30px_rgba(139,92,246,0.24)]"
                    : "border-white/15 bg-white/10 text-gray-400 dark:border-white/10 dark:bg-dark-700/70 dark:text-gray-500"
                }`}
              >
                {project.title}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="flex h-10 w-6 justify-center rounded-full border-2 border-gray-300/80 bg-white/50 pt-2 dark:border-dark-500 dark:bg-white/5"
        >
          <div className="h-2 w-1 rounded-full bg-gray-500 dark:bg-gray-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
