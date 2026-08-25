import { PracticePage } from "@/app/_components/practice-page";
import { createPageMetadata } from "@/app/_lib/metadata";
import { findPracticePage } from "@/data/pages";

const config = findPracticePage("/epa-608-type-2-practice-test");
export const metadata = createPageMetadata(config);
export default function Page() { return <PracticePage config={config} />; }
