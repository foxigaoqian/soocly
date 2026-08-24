import type { Metadata } from "next";
import { PracticePage } from "@/app/_components/practice-page";
import { findPracticePage } from "@/data/pages";

const config = findPracticePage("/epa-608-core-practice-test");
export const metadata: Metadata = { title: config.title, description: config.description, alternates: { canonical: config.path } };
export default function Page() { return <PracticePage config={config} />; }
