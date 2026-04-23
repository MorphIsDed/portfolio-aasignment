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
      className="theme-surface-muted rounded-2xl px-4 py-4 backdrop-blur-md hover:bg-dark-700/60 transition-colors"
    >
      <p className="font-display text-2xl sm:text-3xl font-bold text-white">
        <AnimatedCounter target={numericValue} />+
      </p>
      <p className="mt-1 text-xs uppercase tracking-[0.24em] text-gray-300">
        {label}
      </p>
    </motion.div>
  );
}
