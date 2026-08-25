import type { Metadata } from "next";
import { PracticePage } from "@/app/_components/practice-page";
import { findPracticePage } from "@/data/pages";

const config = findPracticePage("/");

export const metadata: Metadata = {
  title: { absolute: "Free EPA 608 Practice Test 2026 | Soocly Prep" },
  description: "Take a free EPA 608 practice test for 2026. Practice 100 source-checked Core, Type I, Type II, and Type III questions with instant explanations.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "Free EPA 608 Practice Test 2026",
    description: "Practice 100 source-checked EPA Section 608 questions across Core and Types I, II, and III with immediate explanations.",
    url: "https://soocly.com",
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Soocly Prep",
    url: "https://soocly.com",
    description: "Independent EPA Section 608 practice tests with source-checked explanations.",
  };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><PracticePage config={config} /></>;
}
