import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">SOOCLY PREP</p>
          <p className="footer-copy">Source-checked practice for skilled-trade certification exams.</p>
        </div>
        <div className="footer-links">
          <Link href="/">EPA 608 practice test</Link>
          <Link href="/epa-608-study-guide">Study guide</Link>
          <Link href="/epa-608-test-questions-and-answers">Questions &amp; answers</Link>
          <Link href="/epa-608-universal-practice-test">Universal practice test</Link>
          <Link href="/epa-608-flashcards">Flashcards</Link>
          <Link href="/epa-608-exam-passing-score">Passing score</Link>
          <Link href="/epa-608-certification-online">Online exam guide</Link>
          <Link href="/epa-608-recovery-requirements">Recovery requirements</Link>
          <Link href="/epa-608-evacuation-levels">Evacuation levels</Link>
          <Link href="/epa-608-refrigerant-types">Refrigerant types</Link>
          <Link href="/how-to-get-epa-608-certified">How to get certified</Link>
          <Link href="/epa-608-exam-cost">Exam cost</Link>
          <Link href="/epa-608-certification-card-replacement">Replace a certification card</Link>
          <Link href="/editorial-policy">Editorial policy</Link>
          <Link href="/about">About</Link>
        </div>
      </div>
      <div className="container legal-note">
        Soocly Prep is an independent study resource and is not affiliated with or endorsed by the U.S. Environmental Protection Agency. EPA and Section 608 are referenced for identification of the certification program.
      </div>
    </footer>
  );
}
