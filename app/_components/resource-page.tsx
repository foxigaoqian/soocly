import Link from "next/link";
import type { ResourcePageConfig } from "@/data/resources";
import { officialSources } from "@/data/resources";
import { diagnosticQuestions } from "@/data/questions";
import { QuestionSamples } from "./question-samples";
import { FlashcardDeck } from "./flashcard-deck";

const relatedLinks = [
  { href: "/", label: "Free EPA 608 practice test" },
  { href: "/epa-608-study-guide", label: "EPA 608 study guide" },
  { href: "/epa-608-test-questions-and-answers", label: "Questions and answers" },
  { href: "/epa-608-exam-passing-score", label: "Passing score" },
  { href: "/epa-608-certification-online", label: "Online certification guide" },
];

export function ResourcePage({ config }: { config: ResourcePageConfig }) {
  const breadcrumbJson = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://soocly.com" },
      { "@type": "ListItem", position: 2, name: config.title, item: `https://soocly.com${config.path}` },
    ],
  };

  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson) }} />
      <div className="page-strip">
        <div className="container breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span><span>{config.title}</span>
        </div>
      </div>
      <article className="container resource-layout">
        <header className="resource-header">
          <p className="section-label">{config.eyebrow}</p>
          <h1>{config.title}</h1>
          <p>{config.intro}</p>
          <div className="source-review-line"><strong>Source review:</strong> August 25, 2026 · U.S. EPA pages linked below</div>
        </header>

        <dl className="resource-facts">
          {config.quickFacts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}
        </dl>

        <div className="resource-grid">
          <div className="resource-body">
            {config.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
                {section.callout && <div className="resource-callout">{section.callout}</div>}
              </section>
            ))}

            {config.showQuestionSamples && <QuestionSamples questions={diagnosticQuestions(5)} heading="20 EPA 608 questions with answers" />}
            {config.showFlashcards && <FlashcardDeck />}

            <section className="faq-section">
              <p className="section-label">Common questions</p>
              <h2>EPA 608 questions about this topic</h2>
              <div className="faq-list">
                {config.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}
              </div>
            </section>

            <section className="official-sources">
              <p className="section-label">Primary sources</p>
              <h2>Official references used for this page</h2>
              <ul>
                {config.sources.map((key) => {
                  const source = officialSources[key];
                  return <li key={key}><a href={source.url} target="_blank" rel="noreferrer">{source.label}</a></li>;
                })}
              </ul>
            </section>
          </div>

          <aside className="resource-sidebar">
            <strong>Continue studying</strong>
            <nav aria-label="Related EPA 608 resources">
              {relatedLinks.filter((item) => item.href !== config.path).map((item) => <Link href={item.href} key={item.href}>{item.label}<span aria-hidden="true">→</span></Link>)}
            </nav>
            <p>Independent preparation only. Soocly is not affiliated with or endorsed by the U.S. EPA.</p>
          </aside>
        </div>
      </article>
    </main>
  );
}
