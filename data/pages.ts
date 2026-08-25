export type PracticePageConfig = {
  path: string;
  eyebrow: string;
  title: string;
  description: string;
  section: "all" | "core" | "type-i" | "type-ii" | "type-iii";
  questionLimit?: number;
  examMode?: boolean;
  coverage: string[];
};

export const practicePages: PracticePageConfig[] = [
  {
    path: "/",
    eyebrow: "Free EPA 608 practice test",
    title: "Free EPA 608 Practice Test 2026",
    description: "Take a free 20-question diagnostic across Core, Type I, Type II, and Type III, then continue into a 100-question source-checked EPA 608 practice bank.",
    section: "all",
    questionLimit: 20,
    coverage: ["Core regulations and safety", "Small appliances", "High-pressure systems", "Low-pressure systems"],
  },
  {
    path: "/epa-608-core-practice-test",
    eyebrow: "EPA 608 section practice",
    title: "EPA 608 Core Practice Test",
    description: "Practice foundational Section 608 topics including refrigerant impacts, recovery terminology, technician requirements, and safety.",
    section: "core",
    questionLimit: 25,
    coverage: ["Environmental impacts", "Section 608 requirements", "Recovery cylinders", "Service safety"],
  },
  {
    path: "/epa-608-type-1-practice-test",
    eyebrow: "EPA 608 section practice",
    title: "EPA 608 Type I Practice Test",
    description: "Review small-appliance definitions, system-dependent recovery, access fittings, and recovery requirements.",
    section: "type-i",
    questionLimit: 25,
    coverage: ["Small appliances", "Passive recovery", "Access fittings", "Recovery percentages"],
  },
  {
    path: "/epa-608-type-2-practice-test",
    eyebrow: "EPA 608 section practice",
    title: "EPA 608 Type II Practice Test",
    description: "Practice high-pressure appliance topics including leak detection, recovery techniques, refrigerant charge limits, and pressure relationships.",
    section: "type-ii",
    questionLimit: 25,
    coverage: ["Leak detection", "Liquid recovery", "Pressure rebound", "PSIG and PSIA"],
  },
  {
    path: "/epa-608-type-3-practice-test",
    eyebrow: "EPA 608 section practice",
    title: "EPA 608 Type III Practice Test",
    description: "Review low-pressure chillers, purge units, oil removal, evacuation safety, and recharging procedures.",
    section: "type-iii",
    questionLimit: 25,
    coverage: ["Low-pressure leaks", "Purge units", "Chiller evacuation", "Safe recharging"],
  },
  {
    path: "/epa-608-universal-practice-test",
    eyebrow: "All four EPA 608 sections",
    title: "EPA 608 Universal Practice Test",
    description: "Take a 100-question Universal simulation covering 25 source-checked questions from each EPA 608 section.",
    section: "all",
    questionLimit: 100,
    examMode: true,
    coverage: ["Core", "Type I", "Type II", "Type III"],
  },
];

export function findPracticePage(path: string): PracticePageConfig {
  const page = practicePages.find((item) => item.path === path);
  if (!page) throw new Error(`Practice page config not found: ${path}`);
  return page;
}
