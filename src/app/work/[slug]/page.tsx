import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/Container";
import { caseStudies, getCaseStudy } from "@/content/caseStudies";
import { site } from "@/content/site";

// The built-in detail page renders case studies that don't ship as their own
// self-contained HTML page (i.e. no `href`). The long-form fields — context,
// problem, process, outcome — supply the content. Case studies that link out to
// a bespoke HTML page (AskHR, Swiggy) are handled by that page instead.
export function generateStaticParams() {
  return caseStudies
    .filter((cs) => !cs.href && cs.process)
    .map((cs) => ({ slug: cs.slug }));
}

// Static export: only the params above exist — any other slug is a 404.
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return {
    title: cs.title,
    description: cs.summary,
    openGraph: {
      title: `${cs.title} · ${site.name}`,
      description: cs.summary,
      images: cs.coverImage ? [cs.coverImage] : undefined,
    },
  };
}

/** Small section header shared by the article's sections. */
function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-6">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">{title}</h2>
    </div>
  );
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  // Only entries with long-form content render here (see generateStaticParams).
  if (!cs || !cs.process) notFound();

  return (
    <article className="pb-24 pt-12 sm:pt-16">
      {/* Header */}
      <Container>
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted transition-colors hover:text-brand"
        >
          <ArrowLeft className="h-4 w-4" />
          All case studies
        </Link>

        <div className="mt-8 max-w-3xl">
          <p className="text-sm font-semibold text-brand">
            {cs.company} · {cs.timeframe}
          </p>
          <h1 className="mt-3 text-3xl font-semibold sm:text-4xl md:text-5xl">
            {cs.title}
          </h1>
          <p className="mt-5 text-lg text-ink-muted sm:text-xl">{cs.summary}</p>

          {/* Facts */}
          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-widest text-ink-soft">
                Role
              </dt>
              <dd className="mt-1 font-medium text-ink">{cs.role}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-widest text-ink-soft">
                Focus
              </dt>
              <dd className="mt-1 flex flex-wrap gap-2">
                {cs.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-brand-soft px-2.5 py-1 text-xs font-medium text-brand-strong"
                  >
                    {t}
                  </span>
                ))}
              </dd>
            </div>
          </dl>

          {/* CTAs */}
          {(cs.prototypeUrl || cs.interactiveHref) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {cs.prototypeUrl && (
                <a
                  href={cs.prototypeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-strong"
                >
                  Open the live prototype
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
              {cs.interactiveHref && (
                <a
                  href={cs.interactiveHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
                >
                  View the visual case study
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </div>
          )}
        </div>
      </Container>

      {/* Cover */}
      {cs.coverImage && (
        <Container className="mt-12">
          <div className="relative aspect-[16/7] w-full overflow-hidden rounded-2xl border border-line">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={cs.coverImage}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </Container>
      )}

      {/* Metrics */}
      <Container className="mt-12">
        <div className="grid grid-cols-1 gap-6 rounded-2xl border border-line bg-surface p-6 sm:grid-cols-3 sm:p-8">
          {cs.metrics.map((m) => (
            <div key={m.label}>
              <div className="font-serif text-3xl font-semibold text-brand-strong">
                {m.value}
              </div>
              <div className="mt-1 text-sm text-ink-soft">{m.label}</div>
            </div>
          ))}
        </div>
      </Container>

      {/* Body */}
      <Container className="mt-16">
        <div className="max-w-3xl space-y-16">
          {cs.context && (
            <section>
              <SectionHeading eyebrow="Context" title="Where this started" />
              <p className="text-lg leading-relaxed text-ink-muted">
                {cs.context}
              </p>
            </section>
          )}

          {cs.problem && (
            <section>
              <SectionHeading eyebrow="The problem" title="The day that never should have happened" />
              <p className="text-lg leading-relaxed text-ink-muted">
                {cs.problem}
              </p>
            </section>
          )}

          <section>
            <SectionHeading eyebrow="Process" title="How I approached it" />
            <ol className="space-y-10">
              {cs.process.map((step, i) => (
                <li key={step.heading} className="flex gap-5">
                  <span
                    aria-hidden
                    className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand font-serif text-sm font-semibold text-white"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-ink">
                      {step.heading}
                    </h3>
                    <p className="mt-2 leading-relaxed text-ink-muted">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {cs.outcome && (
            <section>
              <SectionHeading eyebrow="Outcome" title="What it added up to" />
              <p className="text-lg leading-relaxed text-ink-muted">
                {cs.outcome}
              </p>
            </section>
          )}
        </div>
      </Container>

      {/* Bottom CTA */}
      <Container className="mt-20">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-line bg-brand-soft p-8 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-semibold text-brand-strong">
              Want to see it in motion?
            </h2>
            <p className="mt-1 text-ink-muted">
              {cs.prototypeUrl
                ? "The prototype is clickable end to end — try it yourself."
                : "Explore the rest of my work, or get in touch."}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {cs.prototypeUrl && (
              <a
                href={cs.prototypeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-strong"
              >
                Open the live prototype
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
            >
              <ArrowLeft className="h-4 w-4" />
              All case studies
            </Link>
          </div>
        </div>
      </Container>
    </article>
  );
}
