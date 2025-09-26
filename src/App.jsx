import React, { useState } from "react";
import "./App.css";

const Questions = [
  {
    questionText: "What is the capital city of France?",
    answerOptions: [
      { answerText: "Kampala", isCorrect: false },
      { answerText: "London", isCorrect: false },
      { answerText: "Paris", isCorrect: true },
      { answerText: "Dublin", isCorrect: false },
    ],
  },
  {
    questionText: "Who is the CEO of Tesla?",
    answerOptions: [
      { answerText: "Jeff Bezos", isCorrect: false },
      { answerText: "Elon Musk", isCorrect: true },
      { answerText: "Bill Gates", isCorrect: false },
      { answerText: "Mark Zuckerberg", isCorrect: false },
    ],
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const handleAnswer = (index, isCorrect) => {
    setAnswered(true);
    setSelectedAnswer(index);
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < Questions.length - 1) {
      setAnswered(false);
      setSelectedAnswer(null);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert(`Quiz finished! Your score: ${score}/${Questions.length}`);
    }
  };

  return (
    <div className="App">
      <div className="quiz-container">
        <h1 className="title">🌍 Quiz App</h1>

        <div className="question-card">
          <h2 className="question-text">
            {Questions[currentQuestion].questionText}
          </h2>

          <div className="options">
            {Questions[currentQuestion].answerOptions.map((option, index) => {
              let btnClass = "option-btn";
              if (answered) {
                if (option.isCorrect) {
                  btnClass += " correct"; // ✅ green
                } else if (selectedAnswer === index) {
                  btnClass += " wrong"; // ❌ red
                } else {
                  btnClass += " neutral"; // 🚫 gray
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index, option.isCorrect)}
                  className={btnClass}
                  disabled={answered}
                >
                  {option.answerText}
                </button>
              );
            })}
          </div>

          <button
            className={`next-btn ${answered ? "active" : "disabled"}`}
            disabled={!answered}
            onClick={nextQuestion}
          >
            Next Question →
          </button>

          <p className="progress">
            Question {currentQuestion + 1} of {Questions.length}
          </p>
          <p className="score">Score: {score} / {Questions.length}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
