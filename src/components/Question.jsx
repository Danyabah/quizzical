import React, { useState } from "react";
import parse from "html-react-parser";

export default function Question(props) {
  function styler(option, index) {
    if (props.showAnswers === true) {
      if (props.question.correct_answer === option) {
        return { backgroundColor: "#94D7A2" };
      } else if (props.question.selected_answer === index) {
        return { backgroundColor: "#F8BCBC" };
      } else {
        return { backgroundColor: "#F5F7FB" };
      }
    } else {
      return props.question.selected_answer === index
        ? { backgroundColor: "#D6DBF5" }
        : { backgroundColor: "#F5F7FB" };
    }
  }

  const options = props.question.options.map((option, index) => (
    <button
      key={index}
      onClick={(event) => props.selectAnswer(event, props.id, index)}
      style={styler(option, index)}
      disabled={props.showAnswers}
      className="answer-btn"
    >
      {parse(option)}
    </button>
  ));

  return (
    <div className="question">
      <div className="question-title">{parse(props.question.question)}</div>
      <div className="answers">{options}</div>
    </div>
  );
}
