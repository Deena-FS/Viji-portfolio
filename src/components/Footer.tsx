import { site } from "@/content/site";
import { Container } from "./Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-brand-strong text-white/70">
      <Container className="flex flex-col gap-8 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-sm">
          <div className="text-lg font-semibold text-white">
            {site.name}
            <span className="text-brand">.</span>
          </div>
          <p className="mt-3 text-sm text-white/60">
            {site.fullName} — {site.role} based in {site.location}.
          </p>
        </div>

        <div className="flex gap-12">
          <nav className="flex flex-col gap-2 text-sm">
            <span className="mb-1 font-semibold text-white/90">Explore</span>
            {site.nav.map((l) => (
              <a
                key={l.href}
                href={`/${l.href}`}
                className="text-white/60 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <nav className="flex flex-col gap-2 text-sm">
            <span className="mb-1 font-semibold text-white/90">Connect</span>
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  s.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="text-white/60 transition-colors hover:text-white"
              >
                {s.label}
              </a>
            ))}
            <a
              href={site.resumeHref}
              download
              className="text-white/60 transition-colors hover:text-white"
            >
              Résumé
            </a>
          </nav>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/50 sm:flex-row">
          <span>
            © {year} {site.fullName}. All rights reserved.
          </span>
          <span>Built with Next.js &amp; Tailwind CSS.</span>
        </Container>
      </div>
    </footer>
  );
}
