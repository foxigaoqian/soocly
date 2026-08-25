import Link from "next/link";
import { serializeJsonLd } from "@/app/_lib/json-ld";

const examSections = [
  { name: "Core", equipment: "Required foundation", focus: "Environmental effects, regulations, recovery terms, safety, cylinders, and shipping" },
  { name: "Type I", equipment: "Small appliances", focus: "Factory-sealed appliances with five pounds or less of refrigerant, recovery methods, and access fittings" },
  { name: "Type II", equipment: "High and very-high pressure", focus: "Leak detection, recovery requirements, pressure relationships, components, and service safety" },
  { name: "Type III", equipment: "Low pressure", focus: "Chillers, inward leaks, purge units, evacuation, oil removal, freeze protection, and recharging" },
];

const faqs = [
  { question: "Is this EPA 608 practice test free?", answer: "Yes. The 20-question diagnostic, four 25-question section tests, explanations, and source links are available without creating an account." },
  { question: "Are these official EPA exam questions?", answer: "No. They are original questions written to the EPA's published Section 608 topics. Soocly does not reproduce confidential or recalled official exam items." },
  { question: "What does Universal certification cover?", answer: "Universal covers Core plus Type I, Type II, and Type III. The official credential requires passing the applicable tests through an EPA-approved certification organization." },
  { question: "Does EPA 608 certification expire?", answer: "No. The EPA states that Section 608 Technician Certification credentials do not expire." },
  { question: "Can I get certified by finishing this test?", answer: "No. This is preparation only. Certification requires an EPA-approved test administered by an approved organization." },
];

const topicGuides = [
  { href: "/epa-608-recovery-requirements", label: "Recovery requirements", note: "Choose the correct rule by appliance, charge, date, and compressor condition." },
  { href: "/epa-608-evacuation-levels", label: "Evacuation levels", note: "Read vacuum units and the current EPA table without mixing conditions." },
  { href: "/epa-608-refrigerant-types", label: "Refrigerant types", note: "Review CFC, HCFC, HFC, ozone impact, and blend fractionation." },
  { href: "/recover-recycle-reclaim-refrigerant", label: "Recover, recycle, reclaim", note: "Separate the three definitions and ownership rules." },
  { href: "/epa-608-leak-repair-requirements", label: "Leak repair", note: "Connect detection, calculated leak rate, verification, and records." },
  { href: "/how-to-get-epa-608-certified", label: "Certification steps", note: "Choose a level and find an EPA-approved test provider." },
];

const candidateProblems = [
  { title: "I pass practice questions but still feel unprepared", answer: "Do not memorize wording alone. Read the explanation, check the linked rule, then retry only the questions you missed.", href: "/epa-608-test-questions-and-answers", linkLabel: "Review explained answers" },
  { title: "I do not know which section to study", answer: "Start with the mixed diagnostic. Its Core, Type I, Type II, and Type III breakdown shows where focused practice will help most.", href: "/epa-608-study-guide", linkLabel: "Compare the four sections" },
  { title: "There are too many numbers and conditions", answer: "Study each value with its appliance type, charge, date, compressor condition, and pressure unit instead of treating it as an isolated number.", href: "/epa-608-evacuation-levels", linkLabel: "Review evacuation levels" },
  { title: "I need to know whether I am ready for Universal", answer: "Use the 100-question simulation and judge every section separately. A strong total cannot hide a weak Core or Type section.", href: "/epa-608-universal-practice-test", linkLabel: "Take the Universal simulation" },
];

export function HomeSeoContent() {
  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqJson) }} />
      <section className="exam-structure-section">
        <div className="container">
          <p className="section-label">Know the exam</p>
          <h2>EPA 608 practice for every certification section</h2>
          <p className="section-lead">Start with Core, then practice the Type section that matches the equipment you plan to service. Universal combines all four areas.</p>
          <div className="exam-structure-table" role="table" aria-label="EPA 608 exam sections">
            <div className="exam-structure-row is-heading" role="row"><span role="columnheader">Section</span><span role="columnheader">Equipment</span><span role="columnheader">Study focus</span></div>
            {examSections.map((section) => <div className="exam-structure-row" role="row" key={section.name}><strong role="cell">{section.name}</strong><span role="cell">{section.equipment}</span><span role="cell">{section.focus}</span></div>)}
          </div>
          <p className="structure-note">Appendix D sets a 70% passing score for closed-book Type I, Type II, Type III, and Universal tests. Each relevant group contains 25 questions, and Universal contains 100. Official tests are administered by <a href="https://www.epa.gov/section608/certification-programs-section-608-technicians" target="_blank" rel="noreferrer">EPA-approved certification programs</a>. <Link href="/epa-608-exam-passing-score">See the complete score breakdown</Link>.</p>
        </div>
      </section>

      <section className="container study-method-section">
        <div>
          <p className="section-label">A practical study sequence</p>
          <h2>Use the diagnostic to decide what to study next</h2>
        </div>
        <ol>
          <li><span>01</span><div><strong>Take the mixed diagnostic</strong><p>Answer five questions from each exam section without looking up the rules.</p></div></li>
          <li><span>02</span><div><strong>Read every explanation</strong><p>A lucky guess is not mastery. Follow the source link for values and regulatory conditions.</p></div></li>
          <li><span>03</span><div><strong>Practice the weakest section</strong><p>Use a focused 25-question Core, Type I, Type II, or Type III test.</p></div></li>
          <li><span>04</span><div><strong>Finish with Universal</strong><p>Take the <Link href="/epa-608-universal-practice-test">complete 100-question Universal simulation</Link> only after every section is consistently strong.</p></div></li>
        </ol>
      </section>

      <section className="pain-point-section">
        <div className="container">
          <div className="section-heading">
            <div><p className="section-label">Common study problems</p><h2>Start with the problem that is slowing you down</h2></div>
            <p>Use the test as a diagnostic tool, not a list of answers to memorize.</p>
          </div>
          <div className="pain-point-grid">
            {candidateProblems.map((problem) => (
              <article key={problem.title}>
                <h3>{problem.title}</h3>
                <p>{problem.answer}</p>
                <Link href={problem.href}>{problem.linkLabel} <span aria-hidden="true">→</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="topic-hub-section">
        <div className="container">
          <div className="section-heading">
            <div><p className="section-label">Topic review</p><h2>Build the knowledge behind the answers</h2></div>
            <p>Use these focused guides when a practice result shows a repeat weakness.</p>
          </div>
          <div className="topic-hub-grid">
            {topicGuides.map((guide, index) => (
              <Link href={guide.href} key={guide.href}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{guide.label}</strong>
                <p>{guide.note}</p>
                <small>Read guide →</small>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-home-section">
        <div className="container faq-home-grid">
          <div><p className="section-label">Before you begin</p><h2>EPA 608 practice test FAQ</h2><p>Clear answers about what this test covers and what still requires an approved certification provider.</p><Link href="/epa-608-study-guide">Read the complete study guide →</Link></div>
          <div className="faq-list">
            {faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}
          </div>
        </div>
      </section>
    </>
  );
}
