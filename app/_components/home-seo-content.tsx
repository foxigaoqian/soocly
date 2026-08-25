import Link from "next/link";

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

export function HomeSeoContent() {
  return (
    <>
      <section className="exam-structure-section">
        <div className="container">
          <p className="section-label">Know the exam</p>
          <h2>EPA 608 practice for every certification section</h2>
          <p className="section-lead">Start with Core, then practice the Type section that matches the equipment you plan to service. Universal combines all four areas.</p>
          <div className="exam-structure-table" role="table" aria-label="EPA 608 exam sections">
            <div className="exam-structure-row is-heading" role="row"><span role="columnheader">Section</span><span role="columnheader">Equipment</span><span role="columnheader">Study focus</span></div>
            {examSections.map((section) => <div className="exam-structure-row" role="row" key={section.name}><strong role="cell">{section.name}</strong><span role="cell">{section.equipment}</span><span role="cell">{section.focus}</span></div>)}
          </div>
          <p className="structure-note">The EPA requires the appropriate technician certification for work that could release regulated refrigerant from covered stationary equipment. Official tests are administered by <a href="https://www.epa.gov/section608/certification-programs-section-608-technicians" target="_blank" rel="noreferrer">EPA-approved certification programs</a>.</p>
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
          <li><span>04</span><div><strong>Finish with Universal</strong><p>Take the complete 100-question simulation only after every section is consistently strong.</p></div></li>
        </ol>
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

