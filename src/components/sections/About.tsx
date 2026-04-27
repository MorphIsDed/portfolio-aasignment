import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../ui/ScrollReveal";
import { skills, personalInfo, labNotes } from "../../data/portfolio";

const categories = ["Frontend", "Tools", "Languages"] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04 },
  },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export default function About() {
  return (
    <section id="about" className="theme-section-alt relative py-20 md:py-28 lg:py-32">
      <div aria-hidden="true" className="section-grid pointer-events-none absolute inset-x-0 top-0 h-48 opacity-60 dark:opacity-40" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading label="About" title="Get to know me" />

        <div className="section-frame grid items-start gap-8 md:grid-cols-[0.95fr_1.05fr] md:gap-12 lg:gap-16">
          <ScrollReveal>
            <div className="space-y-6">
              <p className="text-sm font-medium uppercase tracking-[0.32em] text-accent-600 dark:text-accent-400">
                Builder mindset
              </p>
              <p className="max-w-xl font-display text-3xl font-semibold leading-tight tracking-[-0.04em] text-gray-900 dark:text-white sm:text-4xl">
                Frontend polish backed by practical engineering judgment.
              </p>
              <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                {personalInfo.intro}
              </p>
              <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                Outside of coding, I spend time exploring new tools, playing
                badminton, and studying the kinds of motion systems and interaction
                patterns that make digital experiences feel memorable.
              </p>
              <div className="grid gap-3 pt-2 sm:grid-cols-2">
                <div className="editorial-panel p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-gray-500 dark:text-gray-400">Focus</p>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">Motion-rich frontends with practical engineering underneath.</p>
                </div>
                <div className="editorial-panel p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-gray-500 dark:text-gray-400">Edge</p>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">Comfortable moving between UI craft, interaction, and app architecture.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="space-y-8">
              <div className="editorial-panel p-3">
                <img
                  src="/profile.jpg"
                  alt="Profile"
                  className="h-64 w-full rounded-[1.5rem] object-cover object-center shadow-[0_20px_50px_rgba(15,23,42,0.12)] sm:h-72"
                />
              </div>
              <div className="editorial-panel p-5 sm:p-6">
                <div className="relative z-10">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-accent-600 dark:text-accent-400">
                      Studio Notes
                    </h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400">How I think</span>
                  </div>
                  <div className="grid gap-3">
                    {labNotes.slice(0, 2).map((note) => (
                      <div
                        key={note.title}
                        className="rounded-[1.35rem] border border-black/6 bg-white/72 px-4 py-4 dark:border-white/10 dark:bg-white/5"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-sm font-semibold text-gray-900 dark:text-white">{note.title}</p>
                          <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-gray-500 dark:text-gray-400">
                            {note.badge}
                          </span>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                          {note.summary}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {categories.map((category) => (
                <div key={category} className="editorial-panel p-5 sm:p-6">
                  <div className="relative z-10">
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <h3 className="text-sm font-semibold tracking-[0.28em] uppercase text-accent-600 dark:text-accent-400">
                        {category}
                      </h3>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {skills.filter((s) => s.category === category).length} skills
                      </span>
                    </div>
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-2"
                  >
                    {skills
                      .filter((s) => s.category === category)
                      .map((skill) => (
                        <motion.span
                          key={skill.name}
                          variants={pillVariants}
                          className="theme-surface-muted rounded-full px-4 py-2 text-sm font-medium
                            transition-colors
                            hover:border-accent-500/40 hover:dark:bg-accent-500/10 hover:dark:text-accent-400
                            hover:bg-accent-500/10 hover:text-accent-600"
                        >
                          {skill.name}
                        </motion.span>
                      ))}
                  </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
