import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import CustomCursor from "./components/layout/CustomCursor";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";

export default function App() {
  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.25,
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("dark");
    return () => {
      root.classList.remove("dark");
    };
  }, []);

  return (
    <div className="relative overflow-x-hidden bg-dark-900 text-gray-100">
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
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
