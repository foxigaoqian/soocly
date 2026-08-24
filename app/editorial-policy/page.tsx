import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Question Standards and Editorial Policy", description: "See how Soocly Prep sources, drafts, reviews, updates, and corrects certification practice questions.", alternates: { canonical: "/editorial-policy" } };

export default function EditorialPolicyPage() {
  return (
    <main id="main-content">
      <div className="page-strip"><div className="container breadcrumbs"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>Editorial policy</span></div></div>
      <article className="container article-layout">
        <header className="article-header"><p className="section-label">Content standards</p><h1>Question standards and editorial policy</h1><p>Certification practice content must be accurate, current, original, and transparent about its limitations.</p></header>
        <div className="article-body policy-list">
          <section><span>01</span><div><h2>Source mapping</h2><p>Every question is mapped to a published exam topic or primary regulatory source. Secondary summaries may help explain a concept but do not replace the primary source.</p></div></section>
          <section><span>02</span><div><h2>Original wording</h2><p>Practice questions are written independently. We do not reproduce confidential, recalled, or unauthorized official exam questions.</p></div></section>
          <section><span>03</span><div><h2>Professional review</h2><p>Questions remain drafts until reviewed for technical accuracy, clarity, correct answer choice, distractor quality, and alignment with current requirements.</p></div></section>
          <section><span>04</span><div><h2>Higher-risk facts</h2><p>Dates, percentages, pressure values, recovery levels, refrigerant classifications, and regulatory statements receive priority review and scheduled rechecking.</p></div></section>
          <section><span>05</span><div><h2>Corrections</h2><p>When a material error is confirmed, the question is removed or corrected. The source and review date are updated before the item returns to the active bank.</p></div></section>
        </div>
      </article>
    </main>
  );
}
