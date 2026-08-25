import { allQuestions } from "./question-bank";
import type { PracticeQuestion } from "./question-bank";
export { allQuestions } from "./question-bank";
export type { PracticeQuestion, QuestionChoice } from "./question-bank";

export function questionsForSection(section?: string): PracticeQuestion[] {
  if (!section || section === "all") return allQuestions;
  return allQuestions.filter((question) => question.section === section);
}

export function diagnosticQuestions(perSection = 5): PracticeQuestion[] {
  return ["core", "type-i", "type-ii", "type-iii"].flatMap((section) =>
    allQuestions.filter((question) => question.section === section).slice(0, perSection),
  );
}

export const sectionNames: Record<string, string> = {
  core: "Core",
  "type-i": "Type I",
  "type-ii": "Type II",
  "type-iii": "Type III",
};
