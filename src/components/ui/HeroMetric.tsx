import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface HeroMetricProps {
  value: string;
  label: string;
  delay?: number;
}

function AnimatedCounter({ target }: { target: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = target / 30;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 50);
    return () => clearInterval(timer);
  }, [target]);

  return count;
}

export default function HeroMetric({ value, label, delay = 0 }: HeroMetricProps) {
  const numericValue = parseInt(value);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="theme-surface-muted rounded-[1.4rem] border px-4 py-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/30 hover:bg-white/85 dark:hover:bg-dark-700/60"
    >
      <p className="font-display text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
        <AnimatedCounter target={numericValue} />+
      </p>
      <p className="mt-1 text-xs uppercase tracking-[0.24em] text-gray-500 dark:text-gray-300">
        {label}
      </p>
    </motion.div>
  );
}
