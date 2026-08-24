import Link from "next/link";
import { questionsForSection } from "@/data/questions";
import type { PracticePageConfig } from "@/data/pages";
import { Quiz } from "./quiz";

export function PracticePage({ config }: { config: PracticePageConfig }) {
  const questions = questionsForSection(config.section);
  return (
    <main id="main-content">
      <div className="page-strip">
        <div className="container breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span><span>{config.title}</span>
        </div>
      </div>
      <section className="container practice-intro">
        <div>
          <p className="section-label">{config.eyebrow}</p>
          <h1>{config.title}</h1>
          <p>{config.description}</p>
        </div>
        <dl className="test-facts">
          <div><dt>Questions</dt><dd>{questions.length}</dd></div>
          <div><dt>Format</dt><dd>Multiple choice</dd></div>
          <div><dt>Feedback</dt><dd>Immediate</dd></div>
        </dl>
      </section>
      <div className="container"><Quiz questions={questions} title={config.title} /></div>
      <section className="container content-section">
        <div className="content-main">
          <p className="section-label">What this test covers</p>
          <h2>Focused practice, organized by exam objective</h2>
          <p>These original questions are written to reinforce the published EPA Section 608 topic areas. They are not copied official exam questions and should be used alongside current training material.</p>
          <ul className="coverage-list">{config.coverage.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
        <aside className="review-notice">
          <h2>Question status</h2>
          <p>This launch set remains marked as draft until reviewed by a qualified EPA 608 professional. Numeric and regulatory questions receive priority review.</p>
          <Link href="/editorial-policy">Read our question standards</Link>
        </aside>
      </section>
    </main>
  );
}
