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
      className="group relative rounded-2xl overflow-hidden
        dark:bg-dark-800 bg-gray-50
        border dark:border-dark-600 border-gray-200
        transition-all duration-300
        hover:shadow-2xl hover:shadow-accent-500/10
        hover:-translate-y-1"
    >
      {/* Gradient top bar */}
      <div className="h-1 w-full bg-gradient-to-r from-accent-500 to-cyan-400" />

      <div className="p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <h3 className="font-display text-xl sm:text-2xl font-bold dark:text-white text-gray-900 group-hover:text-accent-400 transition-colors">
            {project.title}
          </h3>
          <div className="flex gap-3 mt-1">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-gray-400 text-gray-500 hover:text-accent-400 transition-colors"
              aria-label={`GitHub repo for ${project.title}`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-gray-400 text-gray-500 hover:text-accent-400 transition-colors"
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
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="dark:text-gray-400 text-gray-700 text-sm md:text-base leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium px-3 py-1 rounded-full
                dark:bg-dark-600 dark:text-gray-300
                bg-gray-200 text-gray-700
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
