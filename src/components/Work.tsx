import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "./Section";
import { caseStudies } from "@/content/caseStudies";

export function Work() {
  return (
    <Section
      id="work"
      eyebrow="Selected work"
      title="Case studies"
      description="A few problems I'm proud of solving — the context, the approach, and the outcome."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {caseStudies.map((cs) => {
          // Each case study links straight to its self-contained HTML page
          // (served verbatim from /public/case-studies). `Link` is kept as a
          // fallback for any future entry defined without an `href`.
          const Card = cs.href ? "a" : Link;
          const cardHref = cs.href ?? `/work/${cs.slug}`;
          return (
          <Card
            key={cs.slug}
            href={cardHref}
            className={`group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-all hover:-translate-y-1 hover:shadow-lg ${
              cs.featured ? "md:col-span-2" : ""
            }`}
          >
            <div
              className={`relative overflow-hidden ${
                cs.featured ? "h-52 md:h-64" : "h-44 md:h-52"
              }`}
            >
              {cs.coverImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={cs.coverImage}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div
                  className={`absolute inset-0 bg-linear-to-br ${cs.cover}`}
                />
              )}
              {/* Scrim so the tags stay legible over the illustration */}
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent" />
              <div className="absolute inset-0 flex items-end p-6">
                <div className="flex flex-wrap gap-2">
                  {cs.tags.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-black/35 px-2.5 py-1 text-xs font-medium text-white backdrop-blur"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <div className="text-sm font-medium text-brand">
                {cs.company} · {cs.timeframe}
              </div>
              <h3 className="mt-2 text-xl font-semibold text-ink transition-colors group-hover:text-brand">
                {cs.title}
              </h3>
              <p className="mt-3 flex-1 text-ink-muted">{cs.summary}</p>

              <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
                {cs.metrics.slice(0, 3).map((m) => (
                  <div key={m.label}>
                    <div className="font-serif text-lg font-semibold text-brand-strong">
                      {m.value}
                    </div>
                    <div className="text-xs text-ink-soft">{m.label}</div>
                  </div>
                ))}
              </div>

              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                Read case study
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </Card>
          );
        })}
      </div>
    </Section>
  );
}
