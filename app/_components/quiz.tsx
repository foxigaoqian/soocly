"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { PracticeQuestion } from "@/data/questions";
import { sectionNames } from "@/data/questions";

type QuizProps = {
  questions: PracticeQuestion[];
  title: string;
};

export function Quiz({ questions, title }: QuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [finished, setFinished] = useState(false);
  const currentQuestion = questions[currentIndex];
  const selectedAnswer = answers[currentIndex];
  const answered = selectedAnswer !== undefined;

  const score = useMemo(
    () => questions.reduce((total, question, index) => total + (answers[index] === question.correctAnswer ? 1 : 0), 0),
    [answers, questions],
  );

  const sectionResults = useMemo(() => {
    const sections = Array.from(new Set(questions.map((question) => question.section)));
    return sections.map((section) => {
      const matching = questions.map((question, index) => ({ question, index })).filter(({ question }) => question.section === section);
      const correct = matching.filter(({ question, index }) => answers[index] === question.correctAnswer).length;
      return { section, correct, total: matching.length };
    });
  }, [answers, questions]);

  function selectAnswer(key: string) {
    if (answered) return;
    setAnswers((previous) => ({ ...previous, [currentIndex]: key }));
  }

  function nextQuestion() {
    if (currentIndex === questions.length - 1) {
      setFinished(true);
      document.getElementById("practice-test")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    setCurrentIndex((index) => index + 1);
  }

  function restart() {
    setAnswers({});
    setCurrentIndex(0);
    setFinished(false);
    document.getElementById("practice-test")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  if (finished) {
    const percent = Math.round((score / questions.length) * 100);
    return (
      <section className="results-panel" id="practice-test" aria-labelledby="results-heading">
        <div className="results-heading-row">
          <div>
            <p className="section-label">Test complete</p>
            <h2 id="results-heading">Your practice test result</h2>
          </div>
          <div className="score-box" aria-label={`${percent} percent`}>
            <strong>{percent}%</strong>
            <span>{score} of {questions.length} correct</span>
          </div>
        </div>

        <div className="result-status" role="status">
          <strong>{percent >= 80 ? "Good foundation" : percent >= 70 ? "Close, but review is recommended" : "Focused review recommended"}</strong>
          <p>This diagnostic is a study aid, not a prediction or guarantee of your official exam result.</p>
        </div>

        <div className="result-table-wrap">
          <table className="result-table">
            <caption>Accuracy by test section</caption>
            <thead><tr><th scope="col">Section</th><th scope="col">Correct</th><th scope="col">Accuracy</th></tr></thead>
            <tbody>
              {sectionResults.map((result) => {
                const accuracy = Math.round((result.correct / result.total) * 100);
                return <tr key={result.section}><th scope="row">{sectionNames[result.section] ?? result.section}</th><td>{result.correct} / {result.total}</td><td>{accuracy}%</td></tr>;
              })}
            </tbody>
          </table>
        </div>

        <div className="result-actions">
          <button className="button button-primary" type="button" onClick={restart}>Retake this test</button>
          <Link className="button button-secondary" href="/epa-608-study-guide">Review the study guide</Link>
        </div>
      </section>
    );
  }

  const progress = Math.round(((currentIndex + (answered ? 1 : 0)) / questions.length) * 100);
  return (
    <section className="quiz-layout" id="practice-test" aria-label={title}>
      <div className="quiz-main">
        <div className="quiz-toolbar">
          <div>
            <span className="question-count">Question {currentIndex + 1} of {questions.length}</span>
            <span className="question-section">{sectionNames[currentQuestion.section] ?? currentQuestion.section}</span>
          </div>
          <span className="question-topic">{currentQuestion.topic.replaceAll("-", " ")}</span>
        </div>
        <div className="progress-track" aria-label={`${progress}% complete`}><span style={{ width: `${progress}%` }} /></div>

        <div className="question-body">
          <h2>{currentQuestion.question}</h2>
          <div className="answer-list" role="radiogroup" aria-label="Answer choices">
            {currentQuestion.choices.map((choice) => {
              const selected = selectedAnswer === choice.key;
              const correct = choice.key === currentQuestion.correctAnswer;
              const state = answered && correct ? "answer-correct" : answered && selected ? "answer-incorrect" : answered ? "answer-muted" : "";
              return (
                <button
                  className={`answer-row ${state}`}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  disabled={answered}
                  key={choice.key}
                  onClick={() => selectAnswer(choice.key)}
                >
                  <span className="answer-key">{choice.key}</span>
                  <span className="answer-text">{choice.text}</span>
                  {answered && correct && <span className="answer-state">Correct</span>}
                  {answered && selected && !correct && <span className="answer-state">Your answer</span>}
                </button>
              );
            })}
          </div>

          {answered && (
            <div className={`explanation ${selectedAnswer === currentQuestion.correctAnswer ? "is-correct" : "is-incorrect"}`} aria-live="polite">
              <h3>{selectedAnswer === currentQuestion.correctAnswer ? "Correct answer" : `Correct answer: ${currentQuestion.correctAnswer}`}</h3>
              <p>{currentQuestion.explanation}</p>
              <div className="explanation-footer">
                <a href={currentQuestion.sourceUrl} target="_blank" rel="noreferrer">View supporting EPA topic</a>
                <button className="button button-primary" type="button" onClick={nextQuestion}>{currentIndex === questions.length - 1 ? "View results" : "Next question"}</button>
              </div>
            </div>
          )}
        </div>
      </div>

      <aside className="quiz-sidebar" aria-label="Test progress">
        <h2>Test progress</h2>
        <dl className="progress-summary">
          <div><dt>Answered</dt><dd>{Object.keys(answers).length}/{questions.length}</dd></div>
          <div><dt>Correct</dt><dd>{score}</dd></div>
        </dl>
        <ol className="question-map" aria-label="Question status">
          {questions.map((question, index) => {
            const isAnswered = answers[index] !== undefined;
            const isCurrent = index === currentIndex;
            return <li key={question.id} className={`${isAnswered ? "is-answered" : ""} ${isCurrent ? "is-current" : ""}`} aria-label={`Question ${index + 1}${isAnswered ? ", answered" : ""}${isCurrent ? ", current" : ""}`}>{index + 1}</li>;
          })}
        </ol>
        <div className="sidebar-note">
          <strong>Practice mode</strong>
          <p>Answers lock after selection. Explanations appear immediately.</p>
        </div>
      </aside>
    </section>
  );
}
