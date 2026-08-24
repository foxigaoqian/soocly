import type { Metadata } from "next";
import { PracticePage } from "@/app/_components/practice-page";
import { findPracticePage } from "@/data/pages";

const config = findPracticePage("/");

export const metadata: Metadata = {
  title: { absolute: "Free EPA 608 Practice Test 2026 | Soocly Prep" },
  description: "Take a free EPA 608 practice test for 2026 with questions covering Core, Type I, Type II, and Type III, plus instant answers and explanations.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "Free EPA 608 Practice Test 2026",
    description: "Practice EPA Section 608 questions across Core and Types I, II, and III with immediate explanations.",
    url: "https://soocly.com",
  },
};

export default function HomePage() {
  return <PracticePage config={config} />;
}
