import type { PracticeQuestion } from "@/data/questions";

export function QuestionSamples({ questions, heading = "Sample questions with answers" }: { questions: PracticeQuestion[]; heading?: string }) {
  return (
    <section className="question-samples">
      <p className="section-label">Crawlable review set</p>
      <h2>{heading}</h2>
      <p className="question-samples-intro">Open each answer to review the explanation and the primary EPA source used to check it.</p>
      <div className="question-sample-list">
        {questions.map((question, index) => (
          <details key={question.id}>
            <summary><span>{String(index + 1).padStart(2, "0")}</span>{question.question}</summary>
            <div className="sample-answer">
              <strong>Answer: {question.correctAnswer}. {question.choices.find((choice) => choice.key === question.correctAnswer)?.text}</strong>
              <p>{question.explanation}</p>
              <a href={question.sourceUrl} target="_blank" rel="noreferrer">Source: {question.sourceLabel}</a>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

