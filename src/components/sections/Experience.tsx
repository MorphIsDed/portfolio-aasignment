import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../ui/ScrollReveal";
import { timeline } from "../../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="theme-section-alt py-24 md:py-32 lg:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading label="Experience" title="Meaningful outcomes, not filler" />

        <p className="max-w-3xl text-base leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg">
          This section surfaces the real work behind the portfolio: the roles, contributions, and outcomes that shaped the skills you see on the page.
        </p>

        <div className="mt-12 grid gap-6 xl:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="theme-surface col-span-1 rounded-[2rem] border border-gray-200/70 p-8 dark:border-white/10 dark:bg-dark-900/80"
          >
            <p className="text-sm uppercase tracking-[0.32em] text-accent-500 dark:text-accent-400">Timeline</p>
            <h3 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">Selected milestones</h3>
            <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              Clear, future-ready experience that demonstrates your engineering and product instincts.
            </p>
          </motion.div>

          <div className="xl:col-span-2 space-y-6">
            {timeline.map((entry) => (
              <ScrollReveal key={`${entry.role}-${entry.organization}`}>
                <motion.article
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="theme-surface group rounded-[2rem] border border-gray-200/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-dark-900/80"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-sm uppercase tracking-[0.32em] text-accent-500 dark:text-accent-400">{entry.type === "experience" ? "Experience" : "Education"}</p>
                      <h3 className="mt-3 text-2xl font-semibold text-gray-900 dark:text-white">{entry.role}</h3>
                    </div>
                    <p className="text-sm font-medium text-gray-400 dark:text-gray-300">{entry.duration}</p>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {entry.organization}
                  </p>
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
