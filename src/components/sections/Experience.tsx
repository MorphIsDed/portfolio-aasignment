import SectionHeading from "../ui/SectionHeading";
import TimelineItem from "../ui/TimelineItem";
import ScrollReveal from "../ui/ScrollReveal";
import { timeline } from "../../data/portfolio";

export default function Experience() {
  const experience = timeline.filter((e) => e.type === "experience");
  const education = timeline.filter((e) => e.type === "education");

  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading label="Experience" title="Where I've worked" />

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Experience column */}
          <div>
            <ScrollReveal>
              <h3 className="text-sm font-semibold tracking-widest uppercase dark:text-accent-400 text-accent-600 mb-6">
                Work Experience
              </h3>
            </ScrollReveal>
            <div>
              {experience.map((entry, i) => (
                <TimelineItem key={`${entry.role}-${entry.organization}`} entry={entry} index={i} />
              ))}
            </div>
          </div>

          {/* Education column */}
          <div>
            <ScrollReveal>
              <h3 className="text-sm font-semibold tracking-widest uppercase dark:text-accent-400 text-accent-600 mb-6">
                Education
              </h3>
            </ScrollReveal>
            <div>
              {education.map((entry, i) => (
                <TimelineItem key={`${entry.role}-${entry.organization}`} entry={entry} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
