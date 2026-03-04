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
      {/* Vertical line */}
      <div className="absolute left-[7px] top-3 bottom-0 w-px dark:bg-dark-600 bg-gray-200 group-last:hidden" />

      {/* Dot */}
      <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 dark:border-accent-500 border-accent-500 dark:bg-dark-900 bg-white transition-colors group-hover:bg-accent-500" />

      {/* Content */}
      <div className="dark:bg-dark-800 bg-gray-50 rounded-xl p-5 sm:p-6 border dark:border-dark-600 border-gray-200 transition-all hover:border-accent-500/30">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
          <h3 className="font-display font-bold text-lg dark:text-white text-gray-900">
            {entry.role}
          </h3>
          <span className="text-xs font-medium dark:text-accent-400 text-accent-600 tracking-wide">
            {entry.duration}
          </span>
        </div>
        <p className="text-sm font-medium dark:text-gray-300 text-gray-700 mb-2">
          {entry.organization}
        </p>
        <p className="text-sm dark:text-gray-400 text-gray-600 leading-relaxed">
          {entry.description}
        </p>
      </div>
    </motion.div>
  );
}
