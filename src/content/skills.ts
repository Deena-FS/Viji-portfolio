import type { SkillGroup } from "./types";

// Skills / competencies grid — grouped from Viji's résumé toolkit.
export const skills: SkillGroup[] = [
  {
    icon: "compass",
    category: "Product Management",
    items: [
      "Product strategy",
      "Product discovery",
      "Roadmapping",
      "Feature prioritization",
      "MVP definition",
      "PRD writing",
    ],
  },
  {
    icon: "map",
    category: "Research & Discovery",
    items: [
      "User research",
      "Market analysis",
      "User personas",
      "Customer journey mapping",
      "Prototype validation",
    ],
  },
  {
    icon: "rocket",
    category: "AI Product",
    items: [
      "AI product management",
      "RAG architecture",
      "Conversational AI",
      "AI-enabled product design",
      "Go-to-market strategy",
    ],
  },
  {
    icon: "bar-chart",
    category: "Financial Domain",
    items: [
      "Credit risk analysis",
      "Loan underwriting",
      "Mortgage servicing",
      "Loss mitigation",
      "Claims resolution",
      "KYC & compliance",
    ],
  },
  {
    icon: "users",
    category: "Collaboration & Delivery",
    items: [
      "Cross-functional collaboration",
      "Stakeholder management",
      "North-star metrics",
      "Sprint planning",
      "Backlog grooming",
    ],
  },
  {
    icon: "wrench",
    category: "AI Tools & Craft",
    items: [
      "Claude · ChatGPT · Perplexity",
      "Google AI Studio · NotebookLM",
      "ChatPRD",
      "Pika · Motion AI",
      "Figma",
    ],
  },
];
