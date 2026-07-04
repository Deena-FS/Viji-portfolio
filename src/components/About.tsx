import { Check, GraduationCap } from "lucide-react";
import { Section } from "./Section";
import { profile } from "@/content/profile";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Product leadership, grounded in customers and data"
      className="bg-surface"
    >
      <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed text-ink-muted">
          {profile.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-line bg-canvas p-6">
            <h3 className="text-base font-semibold text-ink">What I focus on</h3>
            <ul className="mt-4 space-y-3">
              {profile.focus.map((f) => (
                <li key={f} className="flex gap-3 text-ink-muted">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-line bg-canvas p-6">
            <h3 className="text-base font-semibold text-ink">
              Education &amp; certifications
            </h3>
            <ul className="mt-4 space-y-4">
              {profile.credentials.map((c) => (
                <li key={c.title} className="flex gap-3">
                  <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <div>
                    <div className="font-medium text-ink">{c.title}</div>
                    <div className="text-sm text-ink-muted">{c.org}</div>
                    <div className="text-xs text-ink-soft">{c.period}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </Section>
  );
}
