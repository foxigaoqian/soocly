import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EPA 608 Study Guide",
  description: "Understand the four EPA Section 608 certification areas and choose the right practice test for Core, Type I, Type II, and Type III.",
  alternates: { canonical: "/epa-608-study-guide" },
};

const sections = [
  { name: "Core", href: "/epa-608-core-practice-test", description: "Required foundation covering environmental impacts, Section 608 regulations, recovery terminology, safety, cylinders, and service procedures." },
  { name: "Type I", href: "/epa-608-type-1-practice-test", description: "Small appliances that are factory-manufactured, charged, and hermetically sealed with five pounds or less of refrigerant." },
  { name: "Type II", href: "/epa-608-type-2-practice-test", description: "High-pressure and very-high-pressure appliances, including leak detection and active recovery procedures." },
  { name: "Type III", href: "/epa-608-type-3-practice-test", description: "Low-pressure appliances such as chillers, including purge units, evacuation, oil removal, and recharging." },
];

export default function StudyGuidePage() {
  return (
    <main id="main-content">
      <div className="page-strip"><div className="container breadcrumbs"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>EPA 608 Study Guide</span></div></div>
      <article className="container article-layout">
        <header className="article-header"><p className="section-label">Exam overview</p><h1>EPA 608 Study Guide</h1><p>Use this guide to understand how the certification sections fit together and where to focus your practice.</p></header>
        <div className="article-body">
          <section><h2>The four certification areas</h2><p>Technicians who maintain, service, repair, or dispose of equipment that could release regulated refrigerants must hold the appropriate Section 608 certification. Universal certification requires passing Core plus Types I, II, and III.</p></section>
          <div className="study-sections">{sections.map((section) => <section key={section.name}><div className="study-code">{section.name}</div><div><h2>{section.name}</h2><p>{section.description}</p><Link href={section.href}>Take the {section.name} practice test →</Link></div></section>)}</div>
          <section><h2>How to use Soocly Prep</h2><ol><li>Take the mixed diagnostic without looking up answers.</li><li>Review every explanation, including questions you answered correctly.</li><li>Use the section results to choose a focused practice test.</li><li>Confirm current numeric and regulatory requirements with approved training material.</li></ol></section>
          <div className="article-callout"><strong>Important:</strong> Soocly Prep is an independent practice resource. It does not administer certification exams and is not a substitute for an approved proctored exam or current training manual.</div>
        </div>
      </article>
    </main>
  );
}
