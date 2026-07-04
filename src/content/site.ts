import type { NavLink, SocialLink } from "./types";

// -------------------------------------------------------------------------
// Site-wide config — Vijayashanthi Chandrasekar's real details.
// -------------------------------------------------------------------------
export const site = {
  name: "Viji", // display name / logo
  fullName: "Vijayashanthi Chandrasekar",
  role: "Product Manager",
  location: "Tamil Nadu, India",
  email: "vijibin94@gmail.com",
  phone: "+91 95979 82684",
  resumeHref: "/resume.pdf", // real résumé lives at public/resume.pdf
  url: "https://viji-portfolio-three.vercel.app", // live Vercel domain — feeds metadataBase / OpenGraph

  meta: {
    title: "Vijayashanthi Chandrasekar — Product Manager",
    description:
      "Product Manager bringing 6 years of credit-risk and mortgage expertise into AI product management — from 0→1 discovery to shipped AI products.",
  },

  nav: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavLink[],

  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/vijaya-shanthi",
      handle: "in/vijaya-shanthi",
    },
    {
      label: "Email",
      href: "mailto:vijibin94@gmail.com",
      handle: "vijibin94@gmail.com",
    },
  ] satisfies SocialLink[],
};
