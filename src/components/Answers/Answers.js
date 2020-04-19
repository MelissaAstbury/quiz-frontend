import React from "react";
import { useDispatch } from "react-redux";

import { answerClicked } from "../../store/actions/quiz";
import "./Answers.scss";

const Answers = (props) => {
  const dispatch = useDispatch();

  return (
    <div
      className="answer-container"
      onClick={() => {
        dispatch(answerClicked(props.correct));
      }}
    >
      <p>{props.answer}</p>
    </div>
  );
};

export default Answers;
