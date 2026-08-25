import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The requested Soocly Prep page could not be found.",
  alternates: { canonical: null },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main id="main-content" className="not-found-page">
      <div className="container not-found-layout">
        <div><p className="section-label">404 · Page not found</p><h1>This study page is not in the question bank.</h1><p>The address may have changed, or the page may no longer exist. Continue with one of the current EPA 608 resources.</p><Link className="button button-primary" href="/">Take the free practice test</Link></div>
        <nav aria-label="Suggested pages">
          <Link href="/epa-608-study-guide"><strong>EPA 608 study guide</strong><span>Review the complete exam structure →</span></Link>
          <Link href="/epa-608-test-questions-and-answers"><strong>100 questions and answers</strong><span>Browse the source-checked bank →</span></Link>
          <Link href="/epa-608-universal-practice-test"><strong>Universal practice test</strong><span>Take the full 100-question simulation →</span></Link>
        </nav>
      </div>
    </main>
  );
}
