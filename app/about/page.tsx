import Link from "next/link";
import { createPageMetadata } from "@/app/_lib/metadata";

export const metadata = createPageMetadata({ title: "About", openGraphTitle: "About Soocly Prep", description: "Learn why Soocly Prep is building focused, transparent practice tools for skilled-trade certification exams.", path: "/about" });

export default function AboutPage() {
  return (
    <main id="main-content">
      <div className="page-strip"><div className="container breadcrumbs"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>About</span></div></div>
      <article className="container article-layout">
        <header className="article-header"><p className="section-label">About Soocly Prep</p><h1>Focused exam practice for skilled trades.</h1><p>Soocly Prep is an independent editorial and software project that helps certification candidates identify knowledge gaps and understand the rule behind each answer.</p><div className="source-review-line"><strong>Published by:</strong> Soocly Prep · <strong>Current release:</strong> EPA 608 content source-checked August 25, 2026</div></header>
        <div className="article-body">
          <section><h2>Why start with EPA 608?</h2><p>EPA Section 608 certification is a practical entry point for HVAC technicians. Candidates need more than a list of answers—they need practice that connects regulations, recovery procedures, system types, and safety.</p></section>
          <section><h2>Who publishes the content</h2><p>Soocly Prep is responsible for selecting topics, maintaining the question bank, documenting sources, and correcting published material. Soocly does not present its publishing process as an EPA-approved testing organization or as a substitute for a qualified HVAC instructor.</p></section>
          <section><h2>How the content is created</h2><p>The process begins with the U.S. EPA Section 608 test topic outline. AI tools may assist with drafting original question wording, organizing topics, and checking consistency. Every live question must then be compared with its linked EPA or eCFR source, assigned to the correct exam section, and reviewed again when it contains a date, percentage, pressure value, evacuation level, or regulatory statement.</p></section>
          <section><h2>What source-checked means</h2><p>The current release is source-checked, not trade-expert reviewed. That means the wording and answer were compared with the linked primary source, but an identified independent HVAC professional has not yet reviewed the full bank. We will not use an expert-reviewed label until that review is completed.</p></section>
          <section><h2>What we are building</h2><p>The first release contains 100 questions—25 each for Core, Type I, Type II, and Type III—plus a mixed diagnostic, section tests, a Universal simulation, explanations, and source links. Future exams will be added only after the same process can be repeated reliably.</p></section>
          <section><h2>What we are not</h2><p>Soocly Prep is not an EPA testing organization, certification provider, or government website. We do not claim access to confidential exam questions.</p></section>
        </div>
      </article>
    </main>
  );
}
