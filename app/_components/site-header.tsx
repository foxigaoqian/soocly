import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <div className="utility-bar">
        <div className="container utility-inner">
          <span>Independent trade exam preparation</span>
          <span>Content reviewed before publication</span>
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
          <Link href="/editorial-policy">Question standards</Link>
          <Link href="/about">About</Link>
        </nav>
        <Link className="header-action" href="/">Start free test</Link>
      </div>
    </header>
  );
}
