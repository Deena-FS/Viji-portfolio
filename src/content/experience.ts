import type { ExperienceEntry } from "./types";

// Work history for the Experience timeline — most recent first.
export const experience: ExperienceEntry[] = [
  {
    company: "Concentrix",
    role: "Senior Representative — Credit Risk Underwriter",
    period: "Nov 2024 — Nov 2025",
    location: "Bangalore",
    summary:
      "Underwrote home loan files daily — evaluating borrower income, assets, and repayment capacity — working directly with brokers to move applications forward cleanly and quickly.",
    highlights: [
      "Reviewed home loan files with 95% pre-approval accuracy by assessing borrower income, assets, and repayment capacity.",
      "Spotted a hidden dependency where certain files could only be processed by specific people, causing slowdowns and errors across the team.",
      "Designed a structured calculation tool covering all payslip types — cutting processing time by ~15 minutes per file and making every teammate able to handle any file independently.",
    ],
  },
  {
    company: "Coforge Business Process Solutions",
    role: "Mortgage Analyst — Senior Claims Resolution & Loan Origination",
    period: "Nov 2020 — Nov 2024",
    location: "Bangalore",
    summary:
      "Managed a high volume of mortgage and insurance claim files daily, coordinating across teams and resolving complex escalations at a consistent quality score.",
    highlights: [
      "Closed a high volume of mortgage and insurance claim files the same day, resolving complex escalations across teams.",
      "Noticed recurring documentation-error patterns during audits and mapped the root cause.",
      "Proposed process changes that lifted quality scores and kept them there consistently.",
    ],
  },
  {
    company: "TSI-Polyplay",
    role: "Associate — Loss Mitigation",
    period: "Aug 2019 — Jan 2020",
    location: "Bangalore",
    summary:
      "Worked directly with borrowers facing financial hardship, identifying the right resolution path from forbearance to property handover.",
    highlights: [
      "Guided borrowers in hardship to the right resolution — forbearance, repayment plans, or property handover.",
      "Understood each situation deeply before acting, handling every case with both accuracy and care.",
    ],
  },
  {
    company: "(24)7.ai",
    role: "Advisor Associate — Technical & Customer Support",
    period: "Apr 2018 — Jan 2019",
    location: "Bangalore",
    summary:
      "Handled 30+ customer interactions daily across technical and customer support, spotting friction patterns and improving how the team worked.",
    highlights: [
      "Handled 30+ customer interactions daily with a 93% CSAT score.",
      "Spotted recurring friction patterns in customer queries and built smarter verification workflows that made the whole team faster.",
    ],
  },
];
