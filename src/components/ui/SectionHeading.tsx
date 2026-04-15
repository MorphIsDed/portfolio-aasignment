import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  label: string;
  title: string;
}

export default function SectionHeading({ label, title }: SectionHeadingProps) {
  return (
    <ScrollReveal className="mb-12 md:mb-16 lg:mb-20">
      <div className="mb-4 flex items-center gap-4">
        <p className="metal-label">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
          {label}
        </p>
        <span className="hidden h-px flex-1 bg-gradient-to-r from-accent-500/40 to-transparent sm:block" />
      </div>
      <h2 className="max-w-3xl font-display text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl md:text-5xl lg:text-6xl">
        {title}
      </h2>
    </ScrollReveal>
  );
}
