"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";
import { site } from "@/content/site";
import { Container } from "./Container";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-canvas/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-ink"
        >
          {site.name}
          <span className="text-brand">.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {site.nav.map((l) => (
            <a
              key={l.href}
              href={`/${l.href}`}
              className="text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={site.resumeHref}
          download
          className="hidden items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-strong md:inline-flex"
        >
          <Download className="h-4 w-4" />
          Resume
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink hover:bg-line-soft md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div className="border-b border-line bg-canvas md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {site.nav.map((l) => (
              <a
                key={l.href}
                href={`/${l.href}`}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-ink-muted hover:bg-line-soft hover:text-ink"
              >
                {l.label}
              </a>
            ))}
            <a
              href={site.resumeHref}
              download
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-4 py-2.5 text-sm font-semibold text-white"
            >
              <Download className="h-4 w-4" />
              Download résumé
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
