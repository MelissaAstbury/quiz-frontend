import React from "react";

import Answers from "../Answers/Answers";

import "./Question.scss";

// const Question = ({ question }) => {
const Question = (props) => {
  return (
    <div className="question-container">
      <p className="question">{props.question.name}</p>
      {props.question.answerList.map((i, index) => {
        return (
          <Answers key={index} answer={i.answer} correct={i.correctAnswer} />
        );
      })}
    </div>
  );
};

export default Question;
