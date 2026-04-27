import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/layout/Navbar";
import CustomCursor from "./components/layout/CustomCursor";
import Footer from "./components/layout/Footer";
import BackToTop from "./components/layout/BackToTop";
import StickyContactBar from "./components/layout/StickyContactBar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import { useDarkMode } from "./hooks/useDarkMode";

export default function App() {
  const { isDark, toggle } = useDarkMode();
  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.25,
  });

  return (
    <div className="relative overflow-x-hidden bg-stone-50 text-gray-900 transition-colors duration-300 dark:bg-dark-900 dark:text-gray-100">
      <motion.div
        aria-hidden="true"
        className="fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-gradient-to-r from-cyan-400 via-accent-500 to-rose-400"
        style={{ scaleX: progressScale }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_12%_10%,rgba(111,231,221,0.14),transparent_28%),radial-gradient(circle_at_86%_12%,rgba(240,138,75,0.14),transparent_24%),radial-gradient(circle_at_50%_92%,rgba(245,140,168,0.12),transparent_30%)]"
      />
      <CustomCursor />
      <Navbar isDark={isDark} onToggleTheme={toggle} />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <StickyContactBar />
      <BackToTop />
    </div>
  );
}
