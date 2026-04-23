import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const primaryLinks = [
  { href: "#hero", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const sections = ["hero", "projects", "contact"];
      let current = "hero";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.getBoundingClientRect().top <= 100) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const getLinkClass = (href: string) => {
    const sectionId = href.replace("#", "");
    const isActive = activeSection === sectionId;
    return isActive
      ? "text-accent-400 font-semibold"
      : "text-gray-100/85 hover:text-accent-400";
  };

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-3 pt-3 transition-all duration-300 sm:px-4 sm:pt-4"
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-3 sm:px-6 md:py-4 ${
          scrolled
            ? "border-white/12 bg-dark-900/75 shadow-[0_24px_70px_rgba(2,6,23,0.5)] backdrop-blur-2xl"
            : "border-white/8 bg-white/4 backdrop-blur-md"
        }`}
      >
        <a
          href="#"
          className="font-display text-base font-bold text-white transition-colors hover:text-accent-400 sm:text-lg"
        >
          Abhinay Sahu
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {primaryLinks.map((link) => (
            <li key={link.href}>
              <motion.a
                href={link.href}
                whileHover={{ y: -2 }}
                className={`text-sm font-medium transition-colors ${getLinkClass(link.href)}`}
              >
                {link.label}
                {activeSection === link.href.replace("#", "") && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="mt-1 h-0.5 w-full rounded-full bg-gradient-to-r from-accent-500 to-accent-400"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="rounded-full border border-white/10 bg-white/6 p-2 text-gray-100 md:hidden"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-2 overflow-hidden rounded-[2rem] border border-white/10 bg-dark-900/92 backdrop-blur-2xl md:hidden"
          >
            <ul className="flex flex-col items-center gap-6 py-8">
              {primaryLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-lg font-medium transition-colors ${getLinkClass(link.href)}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
