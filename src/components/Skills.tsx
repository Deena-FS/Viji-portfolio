import {
  Compass,
  Map,
  BarChart3,
  Rocket,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Section } from "./Section";
import { skills } from "@/content/skills";
import type { SkillGroup } from "@/content/types";

const icons: Record<SkillGroup["icon"], LucideIcon> = {
  compass: Compass,
  map: Map,
  "bar-chart": BarChart3,
  rocket: Rocket,
  users: Users,
  wrench: Wrench,
};

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="A full-stack product toolkit"
      description="From first user interview to shipped experiment — the craft I bring to every team."
      className="bg-surface"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => {
          const Icon = icons[group.icon];
          return (
            <div
              key={group.category}
              className="rounded-2xl border border-line bg-canvas p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-base font-semibold text-ink">
                  {group.category}
                </h3>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line bg-surface px-3 py-1 text-sm text-ink-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
