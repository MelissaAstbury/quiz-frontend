import React from "react";

import "./Question.scss";

// const Question = ({ question }) => {
const Question = (props) => {
  return <p>{props.question.name}</p>;
};

export default Question;
