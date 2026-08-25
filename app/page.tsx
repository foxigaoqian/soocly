import { PracticePage } from "@/app/_components/practice-page";
import { createPageMetadata } from "@/app/_lib/metadata";
import { findPracticePage } from "@/data/pages";

const config = findPracticePage("/");

export const metadata = createPageMetadata({
  title: "Free EPA 608 Practice Test 2026",
  absoluteTitle: "Free EPA 608 Practice Test 2026 | Soocly Prep",
  openGraphTitle: "Free EPA 608 Practice Test 2026",
  description: "Take a free EPA 608 practice test for 2026. Practice 100 source-checked Core, Type I, Type II, and Type III questions with instant explanations.",
  path: "/",
});

export default function HomePage() {
  return <PracticePage config={config} />;
}
