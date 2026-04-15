import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../ui/ScrollReveal";
import { skills, personalInfo } from "../../data/portfolio";

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
    <section id="about" className="theme-section-alt py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading label="About" title="Get to know me" />

        <div className="section-frame grid items-start gap-8 md:grid-cols-[0.95fr_1.05fr] md:gap-12 lg:gap-16">
          <ScrollReveal>
            <div className="space-y-5">
              <p className="text-sm font-medium uppercase tracking-[0.26em] text-gray-500 dark:text-gray-400">
                Builder mindset
              </p>
              <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                {personalInfo.intro}
              </p>
              <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                Outside of coding, I spend time exploring new tools, playing
                badminton, and studying the kinds of motion systems and interaction
                patterns that make digital experiences feel memorable.
              </p>
              <div className="grid gap-3 pt-3 sm:grid-cols-2">
                <div className="theme-surface-muted rounded-2xl p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-gray-500 dark:text-gray-400">Focus</p>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">Motion-rich frontends with practical engineering underneath.</p>
                </div>
                <div className="theme-surface-muted rounded-2xl p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-gray-500 dark:text-gray-400">Edge</p>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">Comfortable moving between UI craft, interaction, and app architecture.</p>
                </div>
              </div>
              <img
                src="/profile.jpg"
                alt="Profile"
                className="mt-6 h-56 w-full max-w-sm rounded-[1.75rem] border border-white/60 object-cover shadow-[0_20px_50px_rgba(15,23,42,0.14)] dark:border-white/10"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="space-y-8">
              {categories.map((category) => (
                <div key={category}>
                  <h3 className="mb-3 text-sm font-semibold tracking-widest uppercase text-accent-600 dark:text-accent-400">
                    {category}
                  </h3>
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
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
