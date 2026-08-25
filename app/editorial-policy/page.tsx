import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Question Standards and Editorial Policy", description: "See how Soocly Prep writes, source-checks, reviews, updates, and corrects EPA 608 practice questions.", alternates: { canonical: "/editorial-policy" } };

export default function EditorialPolicyPage() {
  return (
    <main id="main-content">
      <div className="page-strip"><div className="container breadcrumbs"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>Editorial policy</span></div></div>
      <article className="container article-layout">
        <header className="article-header"><p className="section-label">Content standards</p><h1>Question standards and editorial policy</h1><p>Certification practice content must be accurate, current, original, and transparent about who checked it and what it cannot promise.</p><div className="source-review-line"><strong>Policy updated:</strong> August 25, 2026</div></header>
        <div className="article-body policy-list">
          <section><span>01</span><div><h2>Primary-source mapping</h2><p>Every active question links to the current U.S. EPA topic, certification, service-practice, definition, or evacuation page used to check it. Secondary summaries may help explain a concept but do not replace the primary source.</p></div></section>
          <section><span>02</span><div><h2>Original wording</h2><p>Practice questions are written independently. We do not reproduce confidential, recalled, or unauthorized official exam questions.</p></div></section>
          <section><span>03</span><div><h2>Two review levels</h2><p>“Source-checked” means the Soocly editorial process compared the item with its linked primary source. “Trade-expert reviewed” is reserved for questions reviewed by an identified qualified HVAC professional. We do not use the second label until that review has occurred.</p></div></section>
          <section><span>04</span><div><h2>Higher-risk facts</h2><p>Dates, percentages, pressure values, recovery levels, refrigerant classifications, and regulatory statements receive priority review and scheduled rechecking.</p></div></section>
          <section><span>05</span><div><h2>Corrections</h2><p>When a material error is confirmed, the question is removed or corrected. The source and review date are updated before the item returns to the active bank.</p></div></section>
          <section><span>06</span><div><h2>No pass guarantee</h2><p>Practice scores show performance on the Soocly bank. They are not official results, do not guarantee a passing score, and do not replace current instructions from an EPA-approved testing organization.</p></div></section>
        </div>
      </article>
    </main>
  );
}
