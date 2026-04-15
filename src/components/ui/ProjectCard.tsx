import { motion } from "framer-motion";
import type { Project } from "../../data/portfolio";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="theme-surface group relative overflow-hidden rounded-[1.75rem]
        transition-all duration-300
        hover:-translate-y-1.5 hover:shadow-[0_32px_80px_rgba(15,23,42,0.14)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(111,231,221,0.16),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(240,138,75,0.16),transparent_28%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="h-1 w-full bg-gradient-to-r from-accent-500 via-rose-400 to-cyan-400" />

      <div className="relative p-6 sm:p-8">
        <div className="mb-5 flex items-center justify-between">
          <span className="rounded-full border border-white/60 bg-white/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-gray-500 dark:border-white/10 dark:bg-white/6 dark:text-gray-400">
            Project {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="flex items-start justify-between mb-4">
          <h3 className="font-display text-xl sm:text-2xl font-bold text-gray-900 transition-colors group-hover:text-accent-600 dark:text-white dark:group-hover:text-accent-400">
            {project.title}
          </h3>
          <div className="flex gap-3 mt-1">
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: -5 }}
              className="text-gray-500 transition-colors hover:text-accent-600 dark:text-gray-400 dark:hover:text-accent-400"
              aria-label={`GitHub repo for ${project.title}`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </motion.a>
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, rotate: 5 }}
                className="text-gray-500 transition-colors hover:text-accent-600 dark:text-gray-400 dark:hover:text-accent-400"
                aria-label={`Live demo for ${project.title}`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </motion.a>
            )}
          </div>
        </div>

        <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400 md:text-base">
          {project.description}
        </p>

        {project.challenge && (
          <div className="mb-4 rounded-3xl border border-gray-200/80 bg-gray-50 px-4 py-4 dark:border-white/10 dark:bg-white/5">
            <p className="text-xs uppercase tracking-[0.28em] text-gray-500 dark:text-gray-400">Challenge</p>
            <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              {project.challenge}
            </p>
          </div>
        )}

        {project.outcome && (
          <div className="mb-4 rounded-3xl border border-accent-500/20 bg-accent-500/10 px-4 py-4 text-sm text-gray-900 dark:bg-accent-500/10 dark:text-white">
            <p className="font-medium">Outcome</p>
            <p className="mt-2 leading-relaxed text-sm">{project.outcome}</p>
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="theme-surface-muted rounded-full px-3 py-1.5 text-xs font-medium
                transition-colors group-hover:dark:bg-accent-500/10 group-hover:dark:text-accent-400
                group-hover:bg-accent-500/10 group-hover:text-accent-600"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
