import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../ui/ScrollReveal";
import { timeline } from "../../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="theme-section-alt relative py-24 md:py-32 lg:py-36">
      <div aria-hidden="true" className="section-grid pointer-events-none absolute inset-x-0 top-10 h-64 opacity-55 dark:opacity-35" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading label="Experience" title="Meaningful outcomes, not filler" />

        <div className="editorial-panel relative mb-12 p-6 md:p-8">
          <div className="relative z-10 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
            <p className="max-w-3xl text-base leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg">
              This section surfaces the real work behind the portfolio: the roles, contributions, and outcomes that shaped the skills you see on the page.
            </p>
            <div className="rounded-[1.4rem] border border-black/6 bg-white/72 px-4 py-4 dark:border-white/10 dark:bg-white/6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gray-500 dark:text-gray-400">Read it as</p>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">A timeline of responsibility, not a list of titles.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 xl:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="editorial-panel col-span-1 p-8"
          >
            <p className="text-sm uppercase tracking-[0.32em] text-accent-500 dark:text-accent-400">Timeline</p>
            <h3 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">Selected milestones</h3>
            <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              Clear, future-ready experience that demonstrates your engineering and product instincts.
            </p>
            <div className="mt-6 space-y-3">
              <div className="rounded-[1.35rem] border border-black/6 bg-white/72 px-4 py-4 dark:border-white/10 dark:bg-white/5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gray-500 dark:text-gray-400">What stands out</p>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">Strong overlap between UI execution, app logic, and student leadership.</p>
              </div>
              <div className="rounded-[1.35rem] border border-black/6 bg-white/72 px-4 py-4 dark:border-white/10 dark:bg-white/5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gray-500 dark:text-gray-400">Signals</p>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">Hands-on building, ownership, and consistent product curiosity.</p>
              </div>
            </div>
          </motion.div>

          <div className="relative space-y-6 xl:col-span-2">
            <div aria-hidden="true" className="absolute bottom-6 left-[1.05rem] top-6 hidden w-px bg-gradient-to-b from-accent-500/50 via-cyan-400/35 to-transparent md:block" />
            {timeline.map((entry, index) => (
              <ScrollReveal key={`${entry.role}-${entry.organization}`}>
                <motion.article
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="editorial-panel group relative p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(15,23,42,0.08)] md:ml-10"
                >
                  <div className="absolute left-[-2.95rem] top-8 hidden md:flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-600 shadow-[0_12px_28px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-dark-800 dark:text-gray-300">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <div className="relative z-10 flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <p className="text-sm uppercase tracking-[0.32em] text-accent-500 dark:text-accent-400">{entry.type === "experience" ? "Experience" : "Education"}</p>
                        <span className="rounded-full border border-black/6 bg-white/72 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-gray-500 dark:border-white/10 dark:bg-white/6 dark:text-gray-400">
                          {entry.organization}
                        </span>
                      </div>
                      <h3 className="mt-3 text-2xl font-semibold text-gray-900 dark:text-white">{entry.role}</h3>
                    </div>
                    <p className="rounded-full border border-accent-500/20 bg-accent-500/10 px-3 py-1 text-sm font-medium text-accent-700 dark:text-accent-300">
                      {entry.duration}
                    </p>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {entry.description}
                  </p>
                </motion.article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
