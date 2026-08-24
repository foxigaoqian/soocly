import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "About", description: "Learn why Soocly Prep is building focused, transparent practice tools for skilled-trade certification exams.", alternates: { canonical: "/about" } };

export default function AboutPage() {
  return (
    <main id="main-content">
      <div className="page-strip"><div className="container breadcrumbs"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>About</span></div></div>
      <article className="container article-layout">
        <header className="article-header"><p className="section-label">About Soocly Prep</p><h1>Focused exam practice for skilled trades.</h1><p>Soocly Prep is being built to help certification candidates identify knowledge gaps and understand the reason behind each answer.</p></header>
        <div className="article-body">
          <section><h2>Why start with EPA 608?</h2><p>EPA Section 608 certification is a practical entry point for HVAC technicians. Candidates need more than a list of answers—they need practice that connects regulations, recovery procedures, system types, and safety.</p></section>
          <section><h2>What we are building</h2><p>The first release combines section-specific practice tests, immediate explanations, transparent sources, and clear review status. Future exams may be added only after the same content process can be repeated reliably.</p></section>
          <section><h2>What we are not</h2><p>Soocly Prep is not an EPA testing organization, certification provider, or government website. We do not claim access to confidential exam questions.</p></section>
        </div>
      </article>
    </main>
  );
}
