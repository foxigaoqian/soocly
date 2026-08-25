import Link from "next/link";
import { createPageMetadata } from "@/app/_lib/metadata";

export const metadata = createPageMetadata({ title: "Question Standards and Editorial Policy", description: "See how Soocly Prep writes, source-checks, reviews, updates, and corrects EPA 608 practice questions.", path: "/editorial-policy" });

export default function EditorialPolicyPage() {
  return (
    <main id="main-content">
      <div className="page-strip"><div className="container breadcrumbs"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>Editorial policy</span></div></div>
      <article className="container article-layout">
        <header className="article-header"><p className="section-label">Content standards</p><h1>Question standards and editorial policy</h1><p>Certification practice content must be accurate, current, original, and transparent about who checked it and what it cannot promise.</p><div className="source-review-line"><strong>Policy updated:</strong> August 25, 2026</div></header>
        <div className="article-body policy-list">
          <section><span>01</span><div><h2>Who publishes the material</h2><p>Soocly Prep maintains the active question bank and is accountable for source mapping, updates, and corrections. We do not imply that an unnamed person is a certified technician, instructor, or EPA representative.</p></div></section>
          <section><span>02</span><div><h2>Primary-source mapping</h2><p>Every active question links to the current U.S. EPA topic, certification, service-practice, definition, evacuation, or eCFR page used to check it. Secondary summaries may help explain a concept but do not replace the primary source.</p></div></section>
          <section><span>03</span><div><h2>Original wording</h2><p>Practice questions are written independently. We do not reproduce confidential, recalled, or unauthorized official exam questions.</p></div></section>
          <section><span>04</span><div><h2>AI-assisted workflow</h2><p>AI tools may assist with drafting original wording, organizing the topic map, and checking consistency across choices and explanations. Automation does not approve a question for publication. Each live item must be compared with its linked primary source before it receives the source-checked label.</p></div></section>
          <section><span>05</span><div><h2>Two review levels</h2><p>“Source-checked” means the Soocly editorial process compared the item with its linked primary source. “Trade-expert reviewed” is reserved for questions reviewed by an identified qualified HVAC professional. The current release is source-checked and has not received the second label.</p></div></section>
          <section><span>06</span><div><h2>Higher-risk facts</h2><p>Dates, percentages, pressure values, recovery levels, refrigerant classifications, and regulatory statements receive priority review and scheduled rechecking.</p></div></section>
          <section><span>07</span><div><h2>Corrections</h2><p>When a material error is confirmed, the question is removed or corrected. The source and review date are updated before the item returns to the active bank.</p></div></section>
          <section><span>08</span><div><h2>No pass guarantee</h2><p>Practice scores show performance on the Soocly bank. They are not official results, do not guarantee a passing score, and do not replace current instructions from an EPA-approved testing organization.</p></div></section>
        </div>
      </article>
    </main>
  );
}
