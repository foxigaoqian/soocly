import Link from "next/link";
import { questionsForSection } from "@/data/questions";
import type { PracticePageConfig } from "@/data/pages";
import { Quiz } from "./quiz";

const sectionTests = [
  { href: "/epa-608-core-practice-test", label: "Core", title: "EPA 608 Core Practice Test", description: "Review regulations, refrigerant impacts, recovery terminology, and safety." },
  { href: "/epa-608-type-1-practice-test", label: "Type I", title: "EPA 608 Type I Practice Test", description: "Practice small-appliance definitions, fittings, and recovery requirements." },
  { href: "/epa-608-type-2-practice-test", label: "Type II", title: "EPA 608 Type II Practice Test", description: "Focus on high-pressure systems, leaks, pressures, and recovery procedures." },
  { href: "/epa-608-type-3-practice-test", label: "Type III", title: "EPA 608 Type III Practice Test", description: "Review low-pressure chillers, purge units, evacuation, and recharging." },
];

export function PracticePage({ config }: { config: PracticePageConfig }) {
  const questions = questionsForSection(config.section);
  const isHome = config.path === "/";
  return (
    <main id="main-content">
      {!isHome && (
        <div className="page-strip">
          <div className="container breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span><span>{config.title}</span>
          </div>
        </div>
      )}
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
      {isHome && (
        <section className="container home-section">
          <div className="section-heading">
            <div><p className="section-label">Targeted review</p><h2>Practice each EPA 608 exam section</h2></div>
            <p>Use your mixed-test result to choose the section where you need more practice.</p>
          </div>
          <div className="exam-list">
            {sectionTests.map((test) => (
              <article key={test.href} className="exam-list-item">
                <div className="exam-code">{test.label}</div>
                <div><h3>{test.title}</h3><p>{test.description}</p></div>
                <Link href={test.href} aria-label={`Start ${test.title}`}>Start test <span aria-hidden="true">→</span></Link>
              </article>
            ))}
          </div>
          <p className="section-followup">New to the certification structure? <Link href="/epa-608-study-guide">Read the EPA 608 study guide</Link>.</p>
        </section>
      )}
    </main>
  );
}
