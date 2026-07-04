// Shared content types. Sections read from typed data in this folder so all
// copy lives in one place — swapping in real content means editing data, not JSX.

export type NavLink = { label: string; href: string };

export type SocialLink = {
  label: string;
  href: string;
  handle?: string;
};

export type Stat = { value: string; label: string };

export type Credential = { title: string; org: string; period: string };

export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  highlights: string[];
};

export type SkillGroup = {
  /** lucide-react icon name key, mapped in the Skills component */
  icon: "compass" | "map" | "bar-chart" | "rocket" | "users" | "wrench";
  category: string;
  items: string[];
};

export type Metric = { value: string; label: string };

export type CaseStudy = {
  slug: string;
  title: string;
  company: string;
  timeframe: string;
  role: string;
  /**
   * The card links straight to this URL — a self-contained HTML case study
   * served verbatim from /public (e.g. "/case-studies/askhr.html"). Omit it to
   * route the card to the built-in detail page at /work/<slug>, which renders
   * the long-form fields below.
   */
  href?: string;
  /** live, external clickable prototype (e.g. a Lovable / Figma link) */
  prototypeUrl?: string;
  /**
   * a richer, self-contained HTML telling of the same study served from
   * /public — surfaced as a secondary link on the built-in detail page.
   */
  interactiveHref?: string;
  /** short summary used on cards */
  summary: string;
  tags: string[];
  /** tailwind gradient classes for the placeholder cover */
  cover: string;
  /** optional real image used as the card cover (served from /public) */
  coverImage?: string;
  featured?: boolean;
  metrics: Metric[];
  // Long-form fields below are optional: entries that render as their own
  // self-contained HTML page (via `href`) don't need them.
  context?: string;
  problem?: string;
  process?: { heading: string; body: string }[];
  outcome?: string;
};
