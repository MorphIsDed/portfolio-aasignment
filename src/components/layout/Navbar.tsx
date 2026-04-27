import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../../data/portfolio";

const primaryLinks = [{ href: "#hero", label: "Home" }, ...navLinks];

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export default function Navbar({ isDark, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = primaryLinks.map((link) => link.href.replace("#", ""));

    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      let current = "hero";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.getBoundingClientRect().top <= 140) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    onScroll();
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
      ? "font-semibold text-accent-500 dark:text-accent-400"
      : "text-gray-700 transition-colors hover:text-accent-600 dark:text-gray-100/85 dark:hover:text-accent-400";
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
            ? "border-white/50 bg-white/78 shadow-[0_24px_70px_rgba(15,23,42,0.12)] backdrop-blur-2xl dark:border-white/12 dark:bg-dark-900/75 dark:shadow-[0_24px_70px_rgba(2,6,23,0.5)]"
            : "border-white/70 bg-white/45 backdrop-blur-md dark:border-white/8 dark:bg-white/4"
        }`}
      >
        <a
          href="#hero"
          className="flex flex-col leading-none text-gray-900 transition-colors hover:text-accent-600 dark:text-white dark:hover:text-accent-400"
        >
          <span className="font-display text-base font-bold sm:text-lg">Abhinay Sahu</span>
          <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.28em] text-gray-500 dark:text-gray-400">
            Full-stack • UI • Android
          </span>
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
            type="button"
            onClick={onToggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="rounded-full border border-black/8 bg-white/70 p-2.5 text-gray-700 transition-colors hover:text-accent-600 dark:border-white/10 dark:bg-white/6 dark:text-gray-100 dark:hover:text-accent-400"
          >
            {isDark ? (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5m0 15V21m9-9h-1.5m-15 0H3m15.364 6.364l-1.06-1.06M6.697 6.697l-1.06-1.06m12.727 0l-1.06 1.06M6.697 17.303l-1.06 1.06M15.75 12A3.75 3.75 0 118.25 12a3.75 3.75 0 017.5 0z" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3c-.02.25-.03.5-.03.75A7.5 7.5 0 0018.75 11.25c.25 0 .5-.01.75-.03z" />
              </svg>
            )}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="rounded-full border border-black/8 bg-white/70 p-2 text-gray-900 dark:border-white/10 dark:bg-white/6 dark:text-gray-100 md:hidden"
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
            className="mt-2 overflow-hidden rounded-[2rem] border border-white/60 bg-white/88 backdrop-blur-2xl dark:border-white/10 dark:bg-dark-900/92 md:hidden"
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
