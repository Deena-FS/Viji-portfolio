import type { CaseStudy } from "./types";

// Case studies power the "Work" cards. Viji's real case study (AskHR) links
// straight to its self-contained HTML page in /public/case-studies — the card
// metadata below (cover, tags, metrics) is only what renders on the card itself.
export const caseStudies: CaseStudy[] = [
  {
    slug: "askhr-hr-assistant",
    href: "/case-studies/askhr.html",
    title: "AskHR — answering a new hire's question in 3 seconds, not 13 hours",
    company: "Course project · illustrative 200-person company",
    timeframe: "2026 · 4 weeks",
    role: "Product Manager · end-to-end",
    summary:
      "A RAG-based AI assistant built into Slack that gives employees instant, sourced answers to HR policy questions — instead of waiting hours on a human who's asleep, in a meeting, or simply offline.",
    tags: ["AI · RAG", "0→1 Product", "Slack-native", "HR Tech"],
    cover: "from-[#2f4a3c] to-[#1e3128]",
    coverImage: "/case-studies/askhr-cover.jpg",
    metrics: [
      { value: "3 sec", label: "Target answer time, vs 13 hrs" },
      { value: "0→1", label: "AI product definition" },
      { value: "100%", label: "Answers cite their source" },
    ],
    context:
      "Set at an illustrative 200-person company and built as a four-week course exercise in 0→1 AI product definition. The information new hires needed existed — it just cost far more to find than it should, scattered across outdated Slack threads, a twelve-subfolder HR drive with no clear labels, an 'under review' policy PDF, and a wiki with two conflicting answers.",
    problem:
      "A new hire's simple question — can I carry unused leave forward, or do I lose it on December 31? — took thirteen hours to answer. After thirty minutes searching on his own he gave up and messaged HR directly, apologising for 'bothering them,' then waited until the next morning. The real problem wasn't missing information; it was that finding it cost too much, especially for someone new who didn't yet know which questions were 'allowed.'",
    process: [
      {
        heading: "Choose retrieval, not a chatbot or a custom model",
        body: "Three options were on the table. A generic ChatGPT-style assistant had no knowledge of this company's policies and would guess — dangerous on HR rules. Fine-tuning a custom model was slow and expensive to update and solved the wrong problem. I chose retrieval-augmented generation: it searches the actual policy documents at the moment of the question and cites the exact source, so when a policy changes you just update the document — no retraining.",
      },
      {
        heading: "Make it feel like asking a colleague",
        body: "The assistant lives in Slack — no new app to learn. Behind the scenes it runs a small chain: ask → search → sort → answer → show its work. The last step matters most: every answer carries a footnote like 'PTO Policy, Section 4.2' pointing to the exact paragraph, so people can verify it themselves instead of taking the bot's word.",
      },
      {
        heading: "Design for the silent failures",
        body: "The two failure modes that worried me most are invisible until someone is hurt by them. Repeated page footers ('Confidential, Page 3 of 18') can be indexed as real content and pollute results — fixed by stripping headers and footers before indexing. And a policy can quietly go stale when an updated document is never re-uploaded, producing confident answers grounded in outdated numbers — fixed by monitoring how old the source documents are, not just whether the system is online.",
      },
      {
        heading: "Keep privacy simple by controlling what gets indexed",
        body: "I framed it as a notice board, not a locked cabinet. General policies — leave, expenses, guidelines — are meant for everyone and get indexed. Salaries, performance reviews, and individual contracts are never given to the assistant at all — not protected by clever access logic, simply never indexed in the first place. That single decision avoids most of the complexity a full permissions system would need.",
      },
      {
        heading: "Validate with real conversations, not a metrics table",
        body: "Instead of a target-number dashboard, I stress-tested five scenarios the assistant has to handle: a simple lookup, a multi-policy synthesis, honest uncertainty ('I couldn't find a policy on this — I've logged the question'), a sensitive escalation handed straight to a human, and an out-of-scope question pointed to the right channel.",
      },
    ],
    outcome:
      "This was a course exercise, never deployed — so the honest outcome is the reasoning, not a results table. I'm confident in the product decisions: the RAG choice, the failure modes tied to specific documents, and a privacy model built around what gets indexed at all. I hold the numbers loosely — any response-time, accuracy, or satisfaction figure is a reasonable estimate from similar tools, not measured data. Taken into a real company, the first thing I'd do differently is run it past a small group for a few weeks before committing to any target number.",
  },
  {
    slug: "flow-wellness-app",
    href: "/case-studies/flow.html",
    title:
      "Flow — a health companion built for your worst days, not your best",
    company: "Group project · AI PM programme",
    timeframe: "2026 · 4-person team",
    role: "Research & GTM Strategy Lead",
    summary:
      "A gentle, adaptive wellness app that replaces guilt-driven streaks with a design built around recovery — so missing a day never means starting over.",
    tags: ["Wellness", "0→1 Concept", "UX Research", "GTM"],
    cover: "from-[#2c4a3e] to-[#1e3329]",
    coverImage: "/case-studies/flow-cover.jpg",
    metrics: [
      { value: "0→1", label: "Concept to live prototype" },
      { value: "4", label: "Person team" },
      { value: "Live", label: "Clickable prototype" },
    ],
  },
  {
    slug: "swiggy-voice-to-order",
    href: "/case-studies/swiggy.html",
    title:
      "Voice to Order — letting 140M+ elderly Indians order food without typing a word",
    company: "Capstone project · Swiggy concept",
    timeframe: "2026 · 4 weeks",
    role: "Product Manager, end-to-end",
    summary:
      "An AI-powered, multilingual voice ordering feature for Swiggy — removing reading, typing, and screen navigation as barriers so anyone can order food just by speaking, in their own language.",
    tags: ["AI Voice", "0→1 Feature", "Accessibility", "India"],
    cover: "from-[#fc8019] to-[#1c1c1c]",
    coverImage: "/case-studies/swiggy-cover.jpg",
    metrics: [
      { value: "140M+", label: "Elderly users addressed" },
      { value: "6", label: "Voice languages" },
      { value: "0→1", label: "Feature definition" },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
