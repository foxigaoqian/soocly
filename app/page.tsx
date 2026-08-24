import type { Metadata } from "next";
import Link from "next/link";
import { practicePages } from "@/data/pages";

export const metadata: Metadata = {
  title: "Trade Certification Practice Tests",
  description: "Prepare for the EPA 608 certification exam with original practice questions, immediate explanations, and section-focused review.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const sectionTests = practicePages.filter((page) => page.section !== "all");
  return (
    <main id="main-content">
      <section className="home-hero">
        <div className="container hero-grid">
          <div>
            <p className="section-label light">EPA SECTION 608 EXAM PREP</p>
            <h1>Practice for the certification. Understand every answer.</h1>
            <p className="hero-copy">Original EPA 608 practice questions covering Core, Type I, Type II, and Type III—with immediate technical explanations and no registration required.</p>
            <div className="hero-actions">
              <Link className="button button-light" href="/epa-608-practice-test">Start the free 20-question test</Link>
              <Link className="text-link-light" href="/epa-608-study-guide">Review the exam sections</Link>
            </div>
          </div>
          <aside className="exam-summary" aria-label="EPA 608 practice test summary">
            <p className="summary-kicker">AVAILABLE NOW</p>
            <h2>EPA 608 Practice Test</h2>
            <dl>
              <div><dt>Sections covered</dt><dd>4</dd></div>
              <div><dt>Launch questions</dt><dd>20</dd></div>
              <div><dt>Answer explanations</dt><dd>Included</dd></div>
              <div><dt>Cost</dt><dd>Free</dd></div>
            </dl>
            <p className="summary-note">Independent study material. Not an official EPA examination.</p>
          </aside>
        </div>
      </section>

      <section className="trust-bar">
        <div className="container trust-grid">
          <div><strong>Original questions</strong><span>Written for practice—not copied exam items</span></div>
          <div><strong>Current source topics</strong><span>Mapped to published EPA Section 608 objectives</span></div>
          <div><strong>Clear explanations</strong><span>Understand the principle behind the answer</span></div>
        </div>
      </section>

      <section className="container home-section">
        <div className="section-heading">
          <div><p className="section-label">Choose a practice test</p><h2>Study by certification section</h2></div>
          <p>Start with the mixed diagnostic, then focus on the section where you need the most review.</p>
        </div>
        <div className="exam-list">
          {sectionTests.map((test) => (
            <article key={test.path} className="exam-list-item">
              <div className="exam-code">{test.title.replace("EPA 608 ", "").replace(" Practice Test", "")}</div>
              <div><h3>{test.title}</h3><p>{test.description}</p></div>
              <Link href={test.path} aria-label={`Start ${test.title}`}>Start test <span aria-hidden="true">→</span></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section">
        <div className="container process-grid">
          <div>
            <p className="section-label">Built for useful review</p>
            <h2>A straightforward practice process</h2>
            <p>Soocly Prep avoids game mechanics and unnecessary distractions. Answer the question, review the explanation, and see where your knowledge needs work.</p>
          </div>
          <ol className="process-list">
            <li><span>01</span><div><strong>Choose an answer</strong><p>Each item presents one technical decision in a standard multiple-choice format.</p></div></li>
            <li><span>02</span><div><strong>Review the reasoning</strong><p>Immediate feedback explains the underlying rule, process, or safety principle.</p></div></li>
            <li><span>03</span><div><strong>Focus your study</strong><p>Your results separate performance by test section so the next step is clear.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="container standards-section">
        <div><p className="section-label">Content standards</p><h2>Trust starts with transparent sourcing.</h2></div>
        <div><p>Every question includes a source reference and review status. Regulatory facts and numeric requirements are flagged for priority professional review before the full public launch.</p><Link className="button button-secondary" href="/editorial-policy">How questions are reviewed</Link></div>
      </section>
    </main>
  );
}
