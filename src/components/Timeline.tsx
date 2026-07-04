import { Briefcase } from "lucide-react";
import { Section } from "./Section";
import { experience } from "@/content/experience";

export function Timeline() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've made an impact">
      <ol className="mt-2">
        {experience.map((job, i) => {
          const isLast = i === experience.length - 1;
          return (
            <li key={`${job.company}-${job.period}`} className="flex gap-6">
              {/* rail */}
              <div className="flex flex-col items-center">
                <span className="z-10 flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-brand shadow-sm">
                  <Briefcase className="h-4 w-4" />
                </span>
                {!isLast && <span className="mt-2 w-px flex-1 bg-line" />}
              </div>

              {/* content */}
              <div className={isLast ? "pb-0" : "pb-12"}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-xl font-semibold text-ink">{job.role}</h3>
                  <span className="text-sm font-medium text-ink-soft">
                    {job.period}
                  </span>
                </div>
                <div className="mt-1 font-medium text-brand">
                  {job.company}
                  {job.location ? (
                    <span className="text-ink-soft"> · {job.location}</span>
                  ) : null}
                </div>
                <p className="mt-3 text-ink-muted">{job.summary}</p>
                <ul className="mt-4 space-y-2">
                  {job.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-ink-muted">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/60" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
