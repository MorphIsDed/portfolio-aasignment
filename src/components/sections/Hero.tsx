import { motion } from "framer-motion";
import { personalInfo } from "../../data/portfolio";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-accent-600/20 blur-[120px] animate-float" />
        <div className="absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full bg-cyan-400/15 blur-[100px] animate-float [animation-delay:3s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-accent-500/10 blur-[80px] animate-float [animation-delay:1.5s]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Greeting chip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 rounded-full border dark:border-dark-600 border-gray-300 dark:bg-dark-800/60 bg-gray-100/60 px-4 py-1.5 mb-8 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          <span className="text-sm dark:text-gray-300 text-gray-900 font-medium">
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight dark:text-white text-gray-900 mb-4"
        >
          {personalInfo.name}
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="font-display text-xl sm:text-2xl md:text-3xl font-medium bg-gradient-to-r from-accent-400 to-cyan-400 bg-clip-text text-transparent mb-6"
        >
          {personalInfo.role}
        </motion.p>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl dark:text-gray-300 text-gray-900 leading-relaxed mb-10"
        >
          {personalInfo.intro}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 px-5 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-accent-500/25 transition-all hover:shadow-xl hover:shadow-accent-500/30 hover:-translate-y-0.5"
          >
            View Projects
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border dark:border-dark-500 border-gray-400 px-5 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold dark:text-gray-200 text-gray-800 transition-all hover:border-accent-500 hover:text-accent-600 dark:hover:text-accent-400 hover:-translate-y-0.5"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 dark:border-dark-500 border-gray-300 flex justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full dark:bg-gray-500 bg-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
