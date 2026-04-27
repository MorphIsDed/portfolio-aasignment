import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="theme-section relative py-24 md:py-32 lg:py-36">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-16 h-56 bg-[radial-gradient(circle_at_center,rgba(240,138,75,0.12),transparent_46%)]" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading label="Project Constellation" title="Case studies that prove product thinking" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="editorial-panel mb-12 p-6 md:p-8"
        >
          <div className="relative z-10 grid gap-6 md:grid-cols-[1.3fr_0.7fr] md:items-end">
            <p className="max-w-3xl text-base leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg">
              Each project is treated like a system, not just a visual demo. The layout now leads with context first, then the build choices and measurable outcomes.
            </p>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
              <div className="rounded-[1.4rem] border border-black/6 bg-white/72 px-4 py-4 dark:border-white/10 dark:bg-white/6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gray-500 dark:text-gray-400">Lens</p>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">Problem, constraints, decisions, outcome.</p>
              </div>
              <div className="rounded-[1.4rem] border border-black/6 bg-white/72 px-4 py-4 dark:border-white/10 dark:bg-white/6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gray-500 dark:text-gray-400">Signal</p>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">More product thinking, less filler showcase.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid gap-8"
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

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 grid gap-4 md:grid-cols-3"
        >
          <div className="editorial-panel px-5 py-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gray-500 dark:text-gray-400">Recruiter Read</p>
            <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              Clear project framing, concise decisions, and outcome-first storytelling.
            </p>
          </div>
          <div className="editorial-panel px-5 py-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gray-500 dark:text-gray-400">Design Read</p>
            <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              Intentional surfaces, consistent pacing, and stronger visual hierarchy.
            </p>
          </div>
          <div className="editorial-panel px-5 py-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gray-500 dark:text-gray-400">Engineer Read</p>
            <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              Constraints, architecture choices, and implementation judgment stay visible.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
