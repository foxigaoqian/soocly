import type { PracticeQuestion } from "@/data/questions";

const sections = [
  { key: "core", label: "Core", id: "core-questions" },
  { key: "type-i", label: "Type I", id: "type-i-questions" },
  { key: "type-ii", label: "Type II", id: "type-ii-questions" },
  { key: "type-iii", label: "Type III", id: "type-iii-questions" },
] as const;

export function QuestionBankReview({ questions }: { questions: PracticeQuestion[] }) {
  return (
    <section className="full-question-bank" aria-labelledby="question-bank-heading">
      <p className="section-label">Complete review bank</p>
      <h2 id="question-bank-heading">100 EPA 608 practice questions with explained answers</h2>
      <p className="question-samples-intro">
        Work through one exam section at a time. Each answer includes the rule or service principle behind it and the primary EPA page used for source checking.
      </p>

      <nav className="question-bank-nav" aria-label="Question bank sections">
        {sections.map((section) => (
          <a href={`#${section.id}`} key={section.key}>
            <span>{section.label}</span>
            <strong>25 questions</strong>
          </a>
        ))}
      </nav>

      {sections.map((section) => {
        const sectionQuestions = questions.filter((question) => question.section === section.key);
        return (
          <section className="question-bank-section" id={section.id} key={section.key}>
            <header>
              <div>
                <p className="section-label">EPA 608 {section.label}</p>
                <h3>{section.label} questions and answers</h3>
              </div>
              <span>{sectionQuestions.length} questions</span>
            </header>
            <div className="question-sample-list">
              {sectionQuestions.map((question, index) => (
                <details key={question.id}>
                  <summary>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {question.question}
                  </summary>
                  <div className="sample-answer">
                    <strong>
                      Answer: {question.correctAnswer}. {question.choices.find((choice) => choice.key === question.correctAnswer)?.text}
                    </strong>
                    <p>{question.explanation}</p>
                    <a href={question.sourceUrl} target="_blank" rel="noreferrer">
                      Source: {question.sourceLabel}
                    </a>
                  </div>
                </details>
              ))}
            </div>
            <a className="back-to-bank" href="#question-bank-heading">Back to question bank</a>
          </section>
        );
      })}
    </section>
  );
}
