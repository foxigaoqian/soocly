import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "About", description: "Learn why Soocly Prep is building focused, transparent practice tools for skilled-trade certification exams.", alternates: { canonical: "/about" } };

export default function AboutPage() {
  return (
    <main id="main-content">
      <div className="page-strip"><div className="container breadcrumbs"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>About</span></div></div>
      <article className="container article-layout">
        <header className="article-header"><p className="section-label">About Soocly Prep</p><h1>Focused exam practice for skilled trades.</h1><p>Soocly Prep is an independent editorial and software project that helps certification candidates identify knowledge gaps and understand the rule behind each answer.</p><div className="source-review-line"><strong>Current release:</strong> EPA 608 content source-checked August 25, 2026</div></header>
        <div className="article-body">
          <section><h2>Why start with EPA 608?</h2><p>EPA Section 608 certification is a practical entry point for HVAC technicians. Candidates need more than a list of answers—they need practice that connects regulations, recovery procedures, system types, and safety.</p></section>
          <section><h2>How the content is created</h2><p>The Soocly editorial process begins with the U.S. EPA Section 608 test topic outline. Questions are written independently, checked against current primary-source pages, assigned to an exam section and topic, and linked back to the source used for verification. Numeric and regulatory items receive an additional check against the applicable table or rule summary.</p></section>
          <section><h2>What we are building</h2><p>The first release contains 100 questions—25 each for Core, Type I, Type II, and Type III—plus a mixed diagnostic, section tests, a Universal simulation, explanations, and source links. Future exams will be added only after the same process can be repeated reliably.</p></section>
          <section><h2>What we are not</h2><p>Soocly Prep is not an EPA testing organization, certification provider, or government website. We do not claim access to confidential exam questions.</p></section>
        </div>
      </article>
    </main>
  );
}
