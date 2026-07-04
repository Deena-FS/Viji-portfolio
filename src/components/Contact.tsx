import type { ComponentType } from "react";
import { Mail, Globe, Link2, ArrowUpRight } from "lucide-react";
import { Section } from "./Section";
import { LinkedInIcon, GitHubIcon, XIcon } from "./icons";
import { site } from "@/content/site";

type IconType = ComponentType<{ className?: string }>;

const socialIcons: Record<string, IconType> = {
  email: Mail as IconType,
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  twitter: XIcon,
  x: XIcon,
  website: Globe as IconType,
};

function iconFor(label: string): IconType {
  return socialIcons[label.toLowerCase()] ?? (Link2 as IconType);
}

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something users love"
      description="I'm always up for a conversation about product, teams, or a role that fits."
      className="bg-surface"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {site.socials.map((s) => {
          const Icon = iconFor(s.label);
          const external = s.href.startsWith("http");
          return (
            <a
              key={s.label}
              href={s.href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="group flex items-center justify-between rounded-2xl border border-line bg-canvas p-6 transition-colors hover:border-brand"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm text-ink-soft">{s.label}</div>
                  <div className="font-medium text-ink">
                    {s.handle ?? s.href}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 text-ink-soft transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand" />
            </a>
          );
        })}
      </div>
    </Section>
  );
}
