import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { personalInfo } from "../../data/portfolio";

export default function StickyContactBar() {
  const [isVisible, setIsVisible] = useState(false);
  const resumeHref = personalInfo.resumeUrl || `mailto:${personalInfo.email}?subject=Resume%20Request`;

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 360);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          className="fixed inset-x-4 bottom-4 z-40 sm:inset-x-auto sm:bottom-6 sm:left-1/2 sm:-translate-x-1/2"
        >
          <div className="editorial-panel flex items-center gap-3 rounded-full px-3 py-3 shadow-[0_28px_70px_rgba(15,23,42,0.18)]">
            <a
              href={resumeHref}
              target={personalInfo.resumeUrl ? "_blank" : undefined}
              rel={personalInfo.resumeUrl ? "noopener noreferrer" : undefined}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent-500 to-accent-600 px-4 py-2 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(220,110,49,0.28)]"
            >
              {personalInfo.resumeUrl ? "View Resume" : "Request Resume"}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-black/8 bg-white/72 px-4 py-2 text-sm font-semibold text-gray-900 transition-colors hover:text-accent-600 dark:border-white/10 dark:bg-white/6 dark:text-gray-100 dark:hover:text-accent-400"
            >
              Contact
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
