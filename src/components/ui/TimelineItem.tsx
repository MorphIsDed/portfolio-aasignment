import { motion } from "framer-motion";
import type { TimelineEntry } from "../../data/portfolio";

interface TimelineItemProps {
  entry: TimelineEntry;
  index: number;
}

export default function TimelineItem({ entry, index }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="relative pl-8 pb-10 last:pb-0 group"
    >
      <div className="absolute bottom-0 left-[7px] top-3 w-px bg-gradient-to-b from-accent-500/60 to-transparent group-last:hidden" />

      <div className="absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-2 border-accent-500 bg-stone-50 shadow-[0_0_0_6px_rgba(240,138,75,0.12)] transition-colors group-hover:bg-accent-500 dark:bg-dark-900" />

      <div className="theme-surface rounded-[1.5rem] p-5 transition-all hover:border-accent-500/30 hover:shadow-[0_26px_70px_rgba(15,23,42,0.12)] sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
          <h3 className="font-display font-bold text-lg dark:text-white text-gray-900">
            {entry.role}
          </h3>
          <span className="text-xs font-medium dark:text-accent-400 text-accent-600 tracking-wide">
            {entry.duration}
          </span>
        </div>
        <p className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          {entry.organization}
        </p>
        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          {entry.description}
        </p>
      </div>
    </motion.div>
  );
}
