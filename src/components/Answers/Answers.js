import React from "react";

import "./Answers.scss";

const Answers = (props) => {
  return (
    <div
      className="answer-container"
      onClick={() => {
        props.pressed(props.correct);
      }}
    >
      <p>{props.answer}</p>
    </div>
  );
};

export default Answers;
