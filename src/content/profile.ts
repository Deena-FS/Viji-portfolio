import type { Stat, Credential } from "./types";

// Hero + About copy — Vijayashanthi Chandrasekar.
export const profile = {
  // Hero
  headline: "I turn messy financial problems into AI products people trust.",
  subhead:
    "Product Manager with 6 years in credit risk, mortgage, and loss mitigation — now designing and shipping AI products end to end.",
  availability: "Open to Product Manager roles",

  // Hero stat strip — every figure is grounded in real work.
  stats: [
    { value: "6 yrs", label: "In credit risk & mortgage" },
    { value: "3", label: "AI products shipped" },
    { value: "95%", label: "Loan pre-approval accuracy" },
    { value: "93%", label: "CSAT in customer support" },
  ] satisfies Stat[],

  // About section
  about: [
    "For six years I lived inside the part of the financial system most people never see — underwriting home loans, resolving mortgage and insurance claims, and guiding borrowers through hardship. I learned to read risk carefully, coordinate across teams, and close every file cleanly, because in lending the details are never just details.",
    "Then I completed an AI Product Management programme and started building. I've shipped AI products end to end — from a RAG-based HR policy assistant to a multilingual voice-ordering feature — pairing that financial-domain judgment with user research, product discovery, and a bias for shipping something real.",
  ],

  // Short list of what she's known for (About sidebar)
  focus: [
    "0→1 AI product discovery & definition",
    "User research & customer journey mapping",
    "Credit risk & mortgage domain expertise",
    "PRD writing, roadmapping & GTM strategy",
  ],

  // Education & certifications (About sidebar)
  credentials: [
    {
      title: "AI Product Management Programme",
      org: "HelloPM",
      period: "Certification",
    },
    {
      title: "B.E. — First Class",
      org: "Dhirajlal Gandhi College of Technology, Salem",
      period: "2013–2017",
    },
  ] satisfies Credential[],
};
