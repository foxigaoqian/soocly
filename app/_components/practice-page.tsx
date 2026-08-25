import Link from "next/link";
import { diagnosticQuestions, questionsForSection } from "@/data/questions";
import type { PracticePageConfig } from "@/data/pages";
import { Quiz } from "./quiz";
import { QuestionSamples } from "./question-samples";
import { HomeSeoContent } from "./home-seo-content";
import { serializeJsonLd } from "@/app/_lib/json-ld";

const sectionTests = [
  { href: "/epa-608-core-practice-test", label: "Core", title: "EPA 608 Core Practice Test", description: "Review regulations, refrigerant impacts, recovery terminology, and safety." },
  { href: "/epa-608-type-1-practice-test", label: "Type I", title: "EPA 608 Type I Practice Test", description: "Practice small-appliance definitions, fittings, and recovery requirements." },
  { href: "/epa-608-type-2-practice-test", label: "Type II", title: "EPA 608 Type II Practice Test", description: "Focus on high-pressure systems, leaks, pressures, and recovery procedures." },
  { href: "/epa-608-type-3-practice-test", label: "Type III", title: "EPA 608 Type III Practice Test", description: "Review low-pressure chillers, purge units, evacuation, and recharging." },
  { href: "/epa-608-universal-practice-test", label: "Universal", title: "EPA 608 Universal Practice Test", description: "Finish with a 100-question simulation covering Core and all three Type sections." },
];

export function PracticePage({ config }: { config: PracticePageConfig }) {
  const isHome = config.path === "/";
  const sectionQuestions = questionsForSection(config.section);
  const questions = isHome ? diagnosticQuestions(5) : sectionQuestions.slice(0, config.questionLimit);
  const sampleQuestions = isHome ? diagnosticQuestions(2) : questions.slice(0, 6);
  const pageUrl = `https://soocly.com${config.path === "/" ? "" : config.path}`;
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Quiz",
        "@id": `${pageUrl}#quiz`,
        name: config.title,
        description: config.description,
        url: pageUrl,
        about: { "@type": "Thing", name: "EPA Section 608 Technician Certification" },
        assesses: config.coverage.join(", "),
        educationalLevel: "Professional certification preparation",
        educationalUse: "Practice",
        interactivityType: "active",
        isAccessibleForFree: true,
        inLanguage: "en-US",
        provider: { "@id": "https://soocly.com/#organization" },
        dateModified: "2026-08-25",
      },
      ...(isHome ? [] : [{
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://soocly.com" },
          { "@type": "ListItem", position: 2, name: config.title, item: pageUrl },
        ],
      }]),
    ],
  };
  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(pageJsonLd) }} />
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
          <div><dt>Feedback</dt><dd>{config.examMode ? "After scoring" : "Immediate"}</dd></div>
        </dl>
      </section>
      <div className="container"><Quiz questions={questions} title={config.title} examMode={config.examMode} /></div>
      <section className="container content-section">
        <div className="content-main">
          <p className="section-label">What this test covers</p>
          <h2>Focused practice, organized by exam objective</h2>
          <p>These original questions follow the EPA&apos;s published Section 608 topic outline. Each explanation links to the primary EPA page used for source checking. They are not copied official exam questions.</p>
          <ul className="coverage-list">{config.coverage.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
        <aside className="review-notice">
          <h2>Source status</h2>
          <p>100 original questions were checked against current EPA topic, certification, service-practice, and evacuation pages on August 25, 2026. Independent trade-expert review is the final pre-launch step.</p>
          <Link href="/editorial-policy">Read our question standards</Link>
        </aside>
      </section>
      <div className="container"><QuestionSamples questions={sampleQuestions} heading={isHome ? "Free EPA 608 sample questions and answers" : `${config.title} sample questions`} /></div>
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
          <div className="home-answer-grid">
            <article><span>100</span><h3>Source-checked questions</h3><p>Twenty-five questions for each exam section, with explanations and primary EPA links.</p></article>
            <article><span>4</span><h3>Section scores</h3><p>See Core, Type I, Type II, and Type III performance separately after the diagnostic.</p></article>
            <article><span>0</span><h3>Signup required</h3><p>Start the diagnostic and review every answer without creating an account.</p></article>
          </div>
        </section>
      )}
      {isHome && <HomeSeoContent />}
      {!isHome && (
        <section className="container related-test-section" aria-labelledby="related-tests-heading">
          <div className="section-heading">
            <div><p className="section-label">Continue practicing</p><h2 id="related-tests-heading">Compare your score across every EPA 608 section</h2></div>
            <p>Each technical area is scored separately. Move to another section or take the complete Universal simulation.</p>
          </div>
          <div className="related-test-grid">
            {sectionTests.filter((test) => test.href !== config.path).map((test) => (
              <Link href={test.href} key={test.href}>
                <span>{test.label}</span><strong>{test.title}</strong><small>Start test →</small>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
