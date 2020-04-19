import React from "react";

import Answers from "../Answers/Answers";

import "./Question.scss";

// const Question = ({ question }) => {
const Question = (props) => {
  const onClicked = (itemClicked) => {
    console.log(itemClicked);
  };
  return (
    <div className="question-container">
      <p className="question">{props.question.name}</p>
      {props.question.answerList.map((i, index) => {
        return (
          <Answers
            key={index}
            answer={i.answer}
            correct={i.correctAnswer}
            pressed={(i) => {
              onClicked(i);
            }}
          />
        );
      })}
    </div>
  );
};

export default Question;
