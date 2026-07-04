import { ArrowRight, Download, MapPin } from "lucide-react";
import { site } from "@/content/site";
import { profile } from "@/content/profile";
import { Container } from "./Container";
import { Avatar } from "./Avatar";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* soft background wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-brand-soft/60 to-canvas"
      />

      <Container className="grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.35fr_1fr]">
        <div className="fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-ink-muted shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {profile.availability}
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
            {profile.headline}
          </h1>

          <p className="mt-6 max-w-xl text-lg text-ink-muted">
            {profile.subhead}
          </p>

          <div className="mt-4 flex items-center gap-2 text-sm text-ink-soft">
            <MapPin className="h-4 w-4" />
            {site.location}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-brand-strong"
            >
              View my work
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={site.resumeHref}
              download
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-6 py-3 font-semibold text-ink transition-colors hover:border-ink-soft"
            >
              <Download className="h-4 w-4" />
              Download résumé
            </a>
          </div>
        </div>

        <div className="fade-up">
          <Avatar />
        </div>
      </Container>

      {/* stat strip */}
      <div className="border-y border-line bg-surface">
        <Container className="grid grid-cols-2 gap-y-8 py-8 sm:grid-cols-4">
          {profile.stats.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <div className="font-serif text-3xl font-semibold text-brand-strong">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-ink-soft">{s.label}</div>
            </div>
          ))}
        </Container>
      </div>
    </section>
  );
}
