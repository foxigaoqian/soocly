import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <div className="utility-bar">
        <div className="container utility-inner">
          <span>Independent trade exam preparation</span>
          <span>100 original questions · Sources checked August 2026</span>
        </div>
      </div>
      <div className="container header-main">
        <Link className="brand" href="/" aria-label="Soocly Prep home">
          <span className="brand-mark" aria-hidden="true">SP</span>
          <span><strong>SOOCLY</strong><small>PREP</small></span>
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="/">Practice test</Link>
          <Link href="/epa-608-study-guide">Study guide</Link>
          <Link href="/epa-608-test-questions-and-answers">Q&amp;A</Link>
          <Link href="/editorial-policy">Question standards</Link>
          <Link href="/about">About</Link>
        </nav>
        <div className="header-actions">
          <a
            className="support-action"
            href="https://ko-fi.com/sooclyprep"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Support Soocly Prep on Ko-fi (opens in a new tab)"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
              <path d="M12 20.3 10.6 19C5.4 14.3 2 11.2 2 7.4 2 4.3 4.4 2 7.5 2c1.7 0 3.4.8 4.5 2.1A6 6 0 0 1 16.5 2C19.6 2 22 4.3 22 7.4c0 3.8-3.4 6.9-8.6 11.6L12 20.3Z" />
            </svg>
            <span>Support us</span>
          </a>
          <Link className="header-action" href="/">Start free test</Link>
        </div>
      </div>
    </header>
  );
}
