import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../ui/ScrollReveal";
import { skills } from "../../data/portfolio";

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
    <section id="about" className="py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading label="About" title="Get to know me" />

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Summary */}
          <ScrollReveal>
            <div className="space-y-5">
              <p className="dark:text-gray-300 text-gray-900 leading-relaxed">
                I'm a full-stack developer who loves creating intuitive, accessible,
                and performant web experiences. I focus on writing clean code and
                building component-driven interfaces that are a joy to use.
              </p>
              <p className="dark:text-gray-400 text-gray-800 leading-relaxed">
                When I'm not coding, you'll find me exploring new top,
                playing badminton, or reading about design systems and
                user experience patterns.
              </p>
              <img
                src="/profile.jpg"
                alt="Profile"
                className="mt-6 w-48 h-48 rounded-2xl object-cover border-2 border-accent-500/20"
              />
            </div>
          </ScrollReveal>

          {/* Skills */}
          <ScrollReveal delay={0.15}>
            <div className="space-y-8">
              {categories.map((category) => (
                <div key={category}>
                  <h3 className="text-sm font-semibold tracking-widest uppercase dark:text-accent-400 text-accent-600 mb-3">
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
                          className="text-sm px-4 py-1.5 rounded-full font-medium
                            dark:bg-dark-700 dark:text-gray-300 dark:border-dark-600
                            bg-gray-100 text-gray-700 border-gray-200
                            border transition-colors
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
