import React, { useEffect, useState } from "react";
import Quiz from "./components/Quiz";
import Start from "./components/Start";
import blob from "./img/blob.png";

function App() {
  //заводим переменные состояния (1 значение - само состояние 2 - функция для изменения состояния)
  const [start, setStart] = useState(true);
  const [showAnswers, setShowAnswers] = useState(false);
  const [allComplete, setAllComplete] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [counter, setCounter] = useState(0);
  const [formData, setFormData] = useState({
    countQues: 5,
    difficult: "",
    type: "",
    category: "",
  });
  //проверяем есть ли ответ на все вопросы при каждорм изменении массива questions
  useEffect(() => {
    setAllComplete(
      questions.every((question) => question.selected_answer !== undefined)
    );
  }, [questions]);
  //при изменении состояния showAnswers вызываем функцию. проверки ответов
  useEffect(() => {
    checkAnswers(questions);
  }, [showAnswers]);
//функция проверки ответов срабатывает только когда на все вопросы был дан ответ
  function checkAnswers(questions) {
    if (showAnswers) {
      questions.map((question) => {
        if (
          question.options[question.selected_answer] === question.correct_answer
        ) {
          setCounter((prev) => prev + 1);
        }
      });
    }
  }
//функция обнуления 
  function handleStart(event) {
    event.preventDefault();
    setCounter(0);
    setShowAnswers(false);
    setQuestions([]);
    setStart((prevStart) => !prevStart);
  }
  //возвращаем компонент start если еще не были были выбраны вопросы иначе возвращаем список этих вопросов
  return (
    <>
      {start ? (
        <Start
          formData={formData}
          setFormData={setFormData}
          handleStart={handleStart}
        />
      ) : (
        <div className="question__list">
          <Quiz
            data={formData}
            showAnswers={showAnswers}
            questions={questions}
            setQuestions={setQuestions}
          />

          {showAnswers ? (
            <div className="score">
              <div className="score-title">
                You scored {counter} / {questions.length} correct answers
              </div>
              <button
                onClick={handleStart}
                className="start-btn play-again-btn"
              >
                Play again
              </button>
            </div>
          ) : (
            <button
              className="start-btn check-btn"
              onClick={() => setShowAnswers(true)}
              disabled={!allComplete}
            >
              Check answers
            </button>
          )}
        </div>
      )}
      {/* <img className="blob1" src={blob} alt="" />
      <img className="blob2" src={blob} alt="" /> */}
    </>
  );
}

export default App;
