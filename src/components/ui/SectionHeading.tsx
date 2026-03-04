import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  label: string;
  title: string;
}

export default function SectionHeading({ label, title }: SectionHeadingProps) {
  return (
    <ScrollReveal className="mb-12 md:mb-16">
      <p className="text-accent-400 font-medium text-sm tracking-widest uppercase mb-2">
        {label}
      </p>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold dark:text-white text-gray-900">
        {title}
      </h2>
    </ScrollReveal>
  );
}
