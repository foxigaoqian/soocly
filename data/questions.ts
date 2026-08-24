import seed from "./questions.json";

export type QuestionChoice = {
  key: string;
  text: string;
};

export type PracticeQuestion = {
  id: string;
  section: string;
  topic: string;
  difficulty: string;
  question: string;
  choices: QuestionChoice[];
  correctAnswer: string;
  explanation: string;
  sourceUrl: string;
  reviewStatus: string;
};

export const allQuestions: PracticeQuestion[] = seed.questions.map((question) => ({
  id: question.id,
  section: question.section,
  topic: question.topic,
  difficulty: question.difficulty,
  question: question.question,
  choices: question.choices,
  correctAnswer: question.correct_answer,
  explanation: question.explanation,
  sourceUrl: question.source_url,
  reviewStatus: question.review_status,
}));

export function questionsForSection(section?: string): PracticeQuestion[] {
  if (!section || section === "all") return allQuestions;
  return allQuestions.filter((question) => question.section === section);
}

export const sectionNames: Record<string, string> = {
  core: "Core",
  "type-i": "Type I",
  "type-ii": "Type II",
  "type-iii": "Type III",
};
