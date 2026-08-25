"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { PracticeQuestion } from "@/data/questions";
import { sectionNames } from "@/data/questions";

type QuizProps = {
  questions: PracticeQuestion[];
  title: string;
  examMode?: boolean;
};

function shuffled(items: PracticeQuestion[]) {
  const next = [...items];
  for (let index = next.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [next[index], next[swapIndex]] = [next[swapIndex], next[index]];
  }
  return next;
}

export function Quiz({ questions, title, examMode = false }: QuizProps) {
  const [activeQuestions, setActiveQuestions] = useState(questions);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [finished, setFinished] = useState(false);
  const currentQuestion = activeQuestions[currentIndex];
  const selectedAnswer = answers[currentIndex];
  const answered = selectedAnswer !== undefined;

  const score = useMemo(
    () => activeQuestions.reduce((total, question, index) => total + (answers[index] === question.correctAnswer ? 1 : 0), 0),
    [activeQuestions, answers],
  );

  const sectionResults = useMemo(() => {
    const sections = Array.from(new Set(activeQuestions.map((question) => question.section)));
    return sections.map((section) => {
      const matching = activeQuestions.map((question, index) => ({ question, index })).filter(({ question }) => question.section === section);
      const correct = matching.filter(({ question, index }) => answers[index] === question.correctAnswer).length;
      return { section, correct, total: matching.length };
    });
  }, [activeQuestions, answers]);

  function selectAnswer(key: string) {
    if (answered) return;
    setAnswers((previous) => ({ ...previous, [currentIndex]: key }));
  }

  function nextQuestion() {
    if (currentIndex === activeQuestions.length - 1) {
      setFinished(true);
      document.getElementById("practice-test")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    setCurrentIndex((index) => index + 1);
  }

  function restart() {
    setActiveQuestions(shuffled(questions));
    setAnswers({});
    setCurrentIndex(0);
    setFinished(false);
    document.getElementById("practice-test")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function practiceMissed() {
    const missed = activeQuestions.filter((question, index) => answers[index] !== question.correctAnswer);
    if (!missed.length) return;
    setActiveQuestions(missed);
    setAnswers({});
    setCurrentIndex(0);
    setFinished(false);
    document.getElementById("practice-test")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  if (finished) {
    const percent = Math.round((score / activeQuestions.length) * 100);
    const passedEverySection = sectionResults.every((result) => result.correct >= Math.ceil(result.total * 0.7));
    return (
      <section className="results-panel" id="practice-test" aria-labelledby="results-heading">
        <div className="results-heading-row">
          <div>
            <p className="section-label">Test complete</p>
            <h2 id="results-heading">Your practice test result</h2>
          </div>
          <div className="score-box" aria-label={`${percent} percent`}>
            <strong>{percent}%</strong>
            <span>{score} of {activeQuestions.length} correct</span>
          </div>
        </div>

        <div className="result-status" role="status">
          <strong>{examMode ? (passedEverySection ? "Practice threshold reached in every section" : "One or more sections need review") : percent >= 80 ? "Good foundation" : percent >= 70 ? "Close, but review is recommended" : "Focused review recommended"}</strong>
          <p>{examMode ? "Universal preparation must be evaluated section by section. This simulation is not an official score or pass guarantee." : "This diagnostic is a study aid, not a prediction or guarantee of your official exam result."}</p>
        </div>

        {examMode && (
          <div className="exam-review">
            <h3>Review your answers</h3>
            {activeQuestions.map((question, index) => {
              const selected = answers[index];
              const correctChoice = question.choices.find((choice) => choice.key === question.correctAnswer);
              const selectedChoice = question.choices.find((choice) => choice.key === selected);
              return (
                <details key={question.id}>
                  <summary><span>{index + 1}</span><strong>{selected === question.correctAnswer ? "Correct" : "Review"}</strong>{question.question}</summary>
                  <div><p><strong>Your answer:</strong> {selected}. {selectedChoice?.text}</p><p><strong>Correct answer:</strong> {question.correctAnswer}. {correctChoice?.text}</p><p>{question.explanation}</p><a href={question.sourceUrl} target="_blank" rel="noreferrer">Source: {question.sourceLabel}</a></div>
                </details>
              );
            })}
          </div>
        )}

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
          <button className="button button-primary" type="button" onClick={restart}>Retake with a new order</button>
          {score < activeQuestions.length && <button className="button button-secondary" type="button" onClick={practiceMissed}>Practice {activeQuestions.length - score} missed questions</button>}
          <Link className="button button-secondary" href="/epa-608-study-guide">Review the study guide</Link>
        </div>
      </section>
    );
  }

  const progress = Math.round(((currentIndex + (answered ? 1 : 0)) / activeQuestions.length) * 100);
  return (
    <section className="quiz-layout" id="practice-test" aria-label={title}>
      <div className="quiz-main">
        <div className="quiz-toolbar">
          <div>
            <span className="question-count">Question {currentIndex + 1} of {activeQuestions.length}</span>
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
              const state = examMode && answered ? (selected ? "answer-selected" : "answer-muted") : answered && correct ? "answer-correct" : answered && selected ? "answer-incorrect" : answered ? "answer-muted" : "";
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
                  {answered && !examMode && correct && <span className="answer-state">Correct</span>}
                  {answered && selected && (!correct || examMode) && <span className="answer-state">Your answer</span>}
                </button>
              );
            })}
          </div>

          {answered && !examMode && (
            <div className={`explanation ${selectedAnswer === currentQuestion.correctAnswer ? "is-correct" : "is-incorrect"}`} aria-live="polite">
              <h3>{selectedAnswer === currentQuestion.correctAnswer ? "Correct answer" : `Correct answer: ${currentQuestion.correctAnswer}`}</h3>
              <p>{currentQuestion.explanation}</p>
              <div className="explanation-footer">
                <a href={currentQuestion.sourceUrl} target="_blank" rel="noreferrer">Source: {currentQuestion.sourceLabel}</a>
                <button className="button button-primary" type="button" onClick={nextQuestion}>{currentIndex === activeQuestions.length - 1 ? "View results" : "Next question"}</button>
              </div>
            </div>
          )}
          {answered && examMode && <div className="exam-next"><p>Answer recorded. Explanations will appear after the final question.</p><button className="button button-primary" type="button" onClick={nextQuestion}>{currentIndex === activeQuestions.length - 1 ? "Score this exam" : "Next question"}</button></div>}
        </div>
      </div>

      <aside className="quiz-sidebar" aria-label="Test progress">
        <h2>Test progress</h2>
        <dl className="progress-summary">
          <div><dt>Answered</dt><dd>{Object.keys(answers).length}/{activeQuestions.length}</dd></div>
          <div><dt>{examMode ? "Score" : "Correct"}</dt><dd>{examMode ? "Hidden" : score}</dd></div>
        </dl>
        <ol className="question-map" aria-label="Question status">
          {activeQuestions.map((question, index) => {
            const isAnswered = answers[index] !== undefined;
            const isCurrent = index === currentIndex;
            return <li key={question.id} className={`${isAnswered ? "is-answered" : ""} ${isCurrent ? "is-current" : ""}`} aria-label={`Question ${index + 1}${isAnswered ? ", answered" : ""}${isCurrent ? ", current" : ""}`}>{index + 1}</li>;
          })}
        </ol>
        <div className="sidebar-note">
          <strong>{examMode ? "Exam mode" : "Practice mode"}</strong>
          <p>{examMode ? "Answers lock after selection. Explanations appear after scoring." : "Answers lock after selection. Explanations appear immediately."}</p>
        </div>
      </aside>
    </section>
  );
}
