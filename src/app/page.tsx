import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Timeline } from "@/components/Timeline";
import { Skills } from "@/components/Skills";
import { Work } from "@/components/Work";
import { ResumeCTA } from "@/components/ResumeCTA";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Timeline />
      <Skills />
      <Work />
      <ResumeCTA />
      <Contact />
    </>
  );
}
