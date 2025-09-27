import React, { useState } from "react";
import "./App.css";

const Questions = [
  {
    questionText: "1) What is the capital city of France?",
    answerOptions: [
      { answerText: "a)   Kampala", isCorrect: false },
      { answerText: "b)   London", isCorrect: false },
      { answerText: "c)   Paris", isCorrect: true },
      { answerText: "d)   Dublin", isCorrect: false },
    ],
  },
  {
    questionText: "2) Smallest country in the world?",
    answerOptions: [
      { answerText: "a) Burundi", isCorrect: false },
      { answerText: "b) Vatican city", isCorrect: true },
      { answerText: "c) haiti", isCorrect: false },
      { answerText: "d) Rwanda", isCorrect: false },
    ],
  },

    {
    questionText: "3) Country Without a Rive?",
    answerOptions: [
      { answerText: "a) Libiya", isCorrect: false },
      { answerText: "b) Sudan", isCorrect: false },
      { answerText: "c) Kenya", isCorrect: false },
      { answerText: "d) Saudi Arabia", isCorrect: true },
    ],
  },

    {
    questionText: "4) which country without an Army?",
    answerOptions: [
      { answerText: "a) congo", isCorrect: false },
      { answerText: "b) Rwanda", isCorrect: true },
      { answerText: "c) Costa Rica", isCorrect: false },
      { answerText: "d) somalia", isCorrect: false },
    ],
  },

   {
    questionText: "5) Who is the CEO of Tesla?",
    answerOptions: [
      { answerText: "a) Jeff Bezos", isCorrect: false },
      { answerText: "b) Elon Musk", isCorrect: true },
      { answerText: "c) Bill Gates", isCorrect: false },
      { answerText: "d) Mark Zuckerberg", isCorrect: false },
    ],
  },

   {
    questionText: "6)Country Without Police?",
    answerOptions: [
      { answerText: "a) kwati", isCorrect: false },
      { answerText: "b) japan", isCorrect: false},
      { answerText: "c) Uganad", isCorrect: false },
      { answerText: "d) Vatican City", isCorrect: true},
    ],
  },

   {
    questionText: "7) Countries Without a Lake?",
    answerOptions: [
      
      { answerText: "a) Qatar", isCorrect: true },
      { answerText: "b) Zambia", isCorrect: false},
      { answerText: "c) RDC congo", isCorrect: false },
      { answerText: "d) Cade", isCorrect: false },
    ],
  },

   {
    questionText: "8) Countries Entirely in the Desert?",
    answerOptions: [
      { answerText: "a) pakistan", isCorrect: false },
      { answerText: "b) Oman", isCorrect: true },
      { answerText: "c) brazvil", isCorrect: false },
      { answerText: "d) Zuckerberg", isCorrect: false },
    ],
  },

   {
    questionText: "9) The higest mountain in the world?",
    answerOptions: [
      { answerText: "a) Mt mororto", isCorrect: false },
      { answerText: "b) Mt everest", isCorrect: true },
      { answerText: "c) Mt elgon", isCorrect: false },
      { answerText: "d) Mt Rwenzori", isCorrect: false },
    ],
  },

   {
    questionText: "Mention the longest River in the world?",
    answerOptions: [
      { answerText: "Nile", isCorrect: true },
      { answerText: "Amazon", isCorrect: false },
      { answerText: "mississippi", isCorrect: false },
      { answerText: "Yenisei", isCorrect: false },
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
      alert(`Your Quiz Questions are finished! Your score: ${score}/${Questions.length}`);
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
