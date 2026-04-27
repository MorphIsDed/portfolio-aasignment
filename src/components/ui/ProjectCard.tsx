import { motion } from "framer-motion";
import type { Project } from "../../data/portfolio";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const previewThemes = [
  {
    shell: "from-cyan-500/20 via-white/70 to-accent-500/20 dark:from-cyan-500/15 dark:via-dark-800/90 dark:to-accent-500/10",
    accent: "bg-cyan-500",
    surface: "bg-white/80 dark:bg-dark-800/80",
  },
  {
    shell: "from-accent-500/20 via-white/70 to-rose-400/18 dark:from-accent-500/15 dark:via-dark-800/90 dark:to-rose-400/10",
    accent: "bg-accent-500",
    surface: "bg-white/80 dark:bg-dark-800/80",
  },
  {
    shell: "from-rose-400/18 via-white/70 to-cyan-500/18 dark:from-rose-400/10 dark:via-dark-800/90 dark:to-cyan-500/12",
    accent: "bg-rose-400",
    surface: "bg-white/80 dark:bg-dark-800/80",
  },
];

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const theme = previewThemes[index % previewThemes.length];

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="editorial-panel group relative overflow-hidden rounded-[1.75rem]
        transition-all duration-300
        hover:-translate-y-1.5 hover:shadow-[0_32px_80px_rgba(15,23,42,0.14)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(111,231,221,0.16),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(240,138,75,0.16),transparent_28%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="h-1 w-full bg-gradient-to-r from-accent-500 via-rose-400 to-cyan-400" />

      <div className="relative z-10 p-6 sm:p-8">
        <div className="mb-5 flex items-center justify-between gap-3">
          <span className="rounded-full border border-white/60 bg-white/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-gray-500 dark:border-white/10 dark:bg-white/6 dark:text-gray-400">
            Project {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-gray-500 dark:text-gray-400">
            {project.techStack.slice(0, 2).join(" / ")}
          </span>
        </div>

        <div className="mb-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <div className={`relative overflow-hidden rounded-[1.6rem] border border-black/6 bg-gradient-to-br ${theme.shell} p-4 dark:border-white/10`}>
            <div className="mb-3 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-accent-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
            </div>
            <div className={`rounded-[1.3rem] border border-black/6 p-4 shadow-[0_16px_36px_rgba(15,23,42,0.08)] dark:border-white/10 ${theme.surface}`}>
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-gray-500 dark:text-gray-400">
                    Preview
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </p>
                </div>
                <span className={`h-3 w-3 rounded-full ${theme.accent}`} />
              </div>
              <div className="grid gap-3">
                <div className="grid grid-cols-[1.4fr_0.6fr] gap-3">
                  <div className="rounded-2xl border border-black/6 bg-white/80 p-3 dark:border-white/10 dark:bg-white/6">
                    <div className="h-2.5 w-20 rounded-full bg-gray-300/80 dark:bg-white/15" />
                    <div className="mt-3 h-20 rounded-[1rem] bg-gradient-to-br from-gray-900/10 to-accent-500/20 dark:from-white/10 dark:to-accent-500/12" />
                  </div>
                  <div className="rounded-2xl border border-black/6 bg-white/80 p-3 dark:border-white/10 dark:bg-white/6">
                    <div className="h-full rounded-[1rem] bg-gradient-to-b from-cyan-400/20 to-transparent dark:from-cyan-400/12" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {(project.highlights ?? project.techStack.slice(0, 3)).slice(0, 3).map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-black/6 bg-white/80 px-2 py-3 text-center text-[11px] font-medium text-gray-700 dark:border-white/10 dark:bg-white/6 dark:text-gray-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between">
        <div className="mb-6 flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <h3 className="font-display text-2xl font-bold text-gray-900 transition-colors group-hover:text-accent-600 dark:text-white dark:group-hover:text-accent-400 sm:text-3xl">
              {project.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400 md:text-base">
              {project.description}
            </p>
          </div>
          <div className="flex gap-3">
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08, rotate: -3 }}
              className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white/72 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-accent-600 dark:border-white/10 dark:bg-white/6 dark:text-gray-300 dark:hover:text-accent-400"
              aria-label={`GitHub repo for ${project.title}`}
            >
              Code
            </motion.a>
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08, rotate: 3 }}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 px-4 py-2 text-sm font-medium text-white shadow-[0_18px_40px_rgba(220,110,49,0.22)]"
                aria-label={`Live demo for ${project.title}`}
              >
                Demo
              </motion.a>
            )}
          </div>
        </div>

        <div className="mb-6 grid gap-4 lg:grid-cols-[1fr_1fr]">
          {project.challenge && (
            <div className="rounded-[1.5rem] border border-black/6 bg-white/72 px-4 py-4 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs uppercase tracking-[0.28em] text-gray-500 dark:text-gray-400">Challenge</p>
              <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                {project.challenge}
              </p>
            </div>
          )}

          {project.outcome && (
            <div className="rounded-[1.5rem] border border-accent-500/20 bg-accent-500/10 px-4 py-4 text-sm text-gray-900 dark:bg-accent-500/10 dark:text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-700 dark:text-accent-300">Outcome</p>
              <p className="mt-2 leading-relaxed text-sm">{project.outcome}</p>
            </div>
          )}
        </div>
          </div>
        </div>

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
