import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">SOOCLY PREP</p>
          <p className="footer-copy">Focused practice for skilled-trade certification exams.</p>
        </div>
        <div className="footer-links">
          <Link href="/">EPA 608 practice test</Link>
          <Link href="/epa-608-study-guide">Study guide</Link>
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
