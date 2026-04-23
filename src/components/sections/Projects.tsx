import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="theme-section py-24 md:py-32 lg:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading label="Project Constellation" title="Case studies that prove product thinking" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mb-10 rounded-[2rem] border border-gray-200/80 bg-white/70 p-6 shadow-xl shadow-black/5 backdrop-blur-xl dark:border-white/10 dark:bg-dark-800/70 dark:shadow-white/5 md:p-8"
        >
          <p className="max-w-3xl text-base leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg">
            Each project is treated like a system — not just a visual demo. Read the problem, the constraints, the decisions made, and the outcome for a more convincing portfolio narrative.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid gap-6"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <ProjectCard project={project} index={i} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
