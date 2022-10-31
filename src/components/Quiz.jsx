import React, { useEffect, useState } from "react";
import Question from "./Question";
import { nanoid } from "nanoid";
import { InfinitySpin } from "react-loader-spinner";

export default function Quiz(props) {
  const { countQues, difficult, type, category } = props.data;
  useEffect(function () {
    fetch(
      `https://opentdb.com/api.php?amount=${countQues}&difficulty=${difficult}&type=${type}&category=${category}`
    )
      .then((res) => res.json())
      .then((data) =>
        props.setQuestions(
          data.results.map((question) => {
            return {
              question: question.question,
              options: question.incorrect_answers
                .concat([question.correct_answer])
                .map((value) => {
                  return { value, sort: Math.random() };
                })
                .sort((a, b) => a.sort - b.sort)
                .map(({ value }) => value),
              selected_answer: undefined,
              correct_answer: question.correct_answer,
            };
          })
        )
      );
  }, []);

  function selectAnswer(event, quest_id, option_id) {
    props.setQuestions(() => {
      return props.questions.map((quest, qid) => {
        if (quest_id === qid) {
          return { ...quest, selected_answer: option_id };
        } else {
          return quest;
        }
      });
    });
  }

  return (
    <>
      {props.questions.length ? (
        props.questions.map((question, index) => {
          return (
            <Question
              id={index}
              key={nanoid()}
              question={question}
              showAnswers={props.showAnswers}
              selectAnswer={selectAnswer}
            />
          );
        })
      ) : (
        <InfinitySpin width="200" color="#293264" />
      )}
    </>
  );
}
