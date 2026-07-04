import { Download } from "lucide-react";
import { site } from "@/content/site";
import { Container } from "./Container";

export function ResumeCTA() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-brand-strong px-8 py-14 text-center sm:px-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand/40 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-brand/20 blur-3xl"
          />
          <h2 className="relative text-3xl font-semibold text-white sm:text-4xl">
            Want the full picture?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-white/70">
            Grab my résumé for the complete history, or reach out and let&apos;s
            talk about your product.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={site.resumeHref}
              download
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-brand-strong transition-colors hover:bg-white/90"
            >
              <Download className="h-5 w-5" />
              Download résumé
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Get in touch
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
