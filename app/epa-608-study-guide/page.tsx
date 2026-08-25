import Link from "next/link";
import { serializeJsonLd } from "@/app/_lib/json-ld";
import { createPageMetadata } from "@/app/_lib/metadata";

export const metadata = createPageMetadata({
  title: "EPA 608 Study Guide",
  description: "Study the EPA 608 exam structure, Core, Type I, Type II, Type III, Universal certification, recovery terminology, safety, and official EPA sources.",
  path: "/epa-608-study-guide",
});

const sections = [
  { name: "Core", href: "/epa-608-core-practice-test", guideHref: "/epa-608-refrigerant-types", description: "Required foundation covering environmental impacts, Section 608 regulations, recovery terminology, safety, cylinders, and service procedures." },
  { name: "Type I", href: "/epa-608-type-1-practice-test", guideHref: "/epa-608-type-1-study-guide", description: "Small appliances that are factory-manufactured, charged, and hermetically sealed with five pounds or less of refrigerant." },
  { name: "Type II", href: "/epa-608-type-2-practice-test", guideHref: "/epa-608-type-2-study-guide", description: "High-pressure and very-high-pressure appliances, including leak detection and active recovery procedures." },
  { name: "Type III", href: "/epa-608-type-3-practice-test", guideHref: "/epa-608-type-3-study-guide", description: "Low-pressure appliances such as chillers, including purge units, evacuation, oil removal, and recharging." },
];

export default function StudyGuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "EPA 608 Study Guide",
        description: metadata.description,
        url: "https://soocly.com/epa-608-study-guide",
        mainEntityOfPage: "https://soocly.com/epa-608-study-guide",
        datePublished: "2026-08-24",
        dateModified: "2026-08-25",
        author: { "@id": "https://soocly.com/#organization" },
        publisher: { "@id": "https://soocly.com/#organization" },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://soocly.com" },
          { "@type": "ListItem", position: 2, name: "EPA 608 Study Guide", item: "https://soocly.com/epa-608-study-guide" },
        ],
      },
    ],
  };
  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />
      <div className="page-strip"><div className="container breadcrumbs"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>EPA 608 Study Guide</span></div></div>
      <article className="container article-layout">
        <header className="article-header"><p className="section-label">2026 exam overview</p><h1>EPA 608 Study Guide</h1><p>Understand how the four certification sections fit together, what the EPA says each section covers, and how to turn practice results into a focused study plan.</p><div className="source-review-line"><strong>Published by:</strong> Soocly Prep · <strong>Source review:</strong> August 25, 2026 · Based on current U.S. EPA Section 608 pages</div></header>
        <div className="article-body">
          <section><h2>Who needs Section 608 certification?</h2><p>EPA regulations require certification for technicians who maintain, service, repair, or dispose of covered stationary refrigeration and air-conditioning equipment when their work could release regulated refrigerant. Activities such as attaching gauges, adding or removing refrigerant, opening the refrigerant circuit, or cutting a refrigerant line can fall within the technician definition.</p><p>The official exam must be administered by an EPA-approved certification organization. Soocly provides preparation only and does not issue certification cards.</p></section>
          <section><h2>The four certification areas</h2><p>Core provides the common environmental, regulatory, recovery, and safety foundation. A technician then needs the Type section that corresponds to the equipment being serviced. Universal covers all three Type categories together with Core.</p></section>
          <div className="study-sections">{sections.map((section) => <section key={section.name}><div className="study-code">{section.name}</div><div><h2>{section.name}</h2><p>{section.description}</p><div className="study-links"><Link href={section.guideHref}>Read the {section.name} guide →</Link><Link href={section.href}>Take the practice test →</Link></div></div></section>)}</div>
          <div className="study-universal-callout"><div><strong>Preparing for Universal?</strong><p>Combine Core, Type I, Type II, and Type III in one 100-question practice simulation.</p></div><Link href="/epa-608-universal-practice-test">Take the Universal practice test →</Link></div>
          <section><h2>Core topics to understand</h2><p>Do not reduce Core to vocabulary alone. Be able to explain why chlorine from CFC and HCFC refrigerants affects stratospheric ozone, how the Clean Air Act venting prohibition applies, who may purchase refrigerant, and how recover, recycle, and reclaim differ.</p><ul><li>Refrigerant classes and environmental effects</li><li>Clean Air Act and Montreal Protocol concepts</li><li>Recovery equipment and the three R definitions</li><li>Substitute refrigerants, oils, blends, and fractionation</li><li>Cylinders, personal protection, nitrogen, and shipping safety</li></ul></section>
          <section><h2>Recovery values need their conditions</h2><p>A recovery number is only useful when you also know the appliance pressure class, refrigerant charge, recovery-equipment manufacture date, compressor condition, and whether the work is a major repair, non-major repair, or disposal. Use the current EPA evacuation table when reviewing numeric questions.</p></section>
          <section><h2>How to use Soocly Prep</h2><ol><li>Take the mixed diagnostic without looking up answers.</li><li>Review every explanation, including questions you answered correctly.</li><li>Use the section results to choose a focused practice test.</li><li>Confirm current numeric and regulatory requirements with approved training material.</li></ol></section>
          <section><h2>Plan the official test</h2><p>When your section scores are consistent, compare <Link href="/epa-608-certification-online">online testing requirements</Link>, review <Link href="/epa-608-exam-cost">which provider fees to confirm</Link>, and use the EPA list to verify the organization before paying.</p></section>
          <section><h2>Official sources</h2><ul><li><a href="https://www.epa.gov/section608/section-608-technician-certification-requirements" target="_blank" rel="noreferrer">EPA certification requirements</a></li><li><a href="https://www.epa.gov/section608/test-topics" target="_blank" rel="noreferrer">EPA Section 608 test topics</a></li><li><a href="https://www.epa.gov/section608/required-level-evacuation-appliances" target="_blank" rel="noreferrer">EPA appliance evacuation levels</a></li><li><a href="https://www.epa.gov/section608/certification-programs-section-608-technicians" target="_blank" rel="noreferrer">EPA-approved certification programs</a></li></ul></section>
          <div className="article-callout"><strong>Important:</strong> Soocly Prep is an independent practice resource. It does not administer certification exams and is not a substitute for an approved proctored exam or current training manual.</div>
        </div>
      </article>
    </main>
  );
}
