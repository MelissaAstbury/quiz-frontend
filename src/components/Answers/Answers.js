import React from "react";
import { useDispatch } from "react-redux";

import { answerClicked } from "../../store/actions/quiz";
import "./Answers.scss";

const Answers = (props) => {
  const dispatch = useDispatch();

  const answerChosen = () => {
    setTimeout(() => {
      dispatch(answerClicked(props.correct));
    }, 1000);
  };

  return (
    <div
      className="answer-container"
      onClick={() => {
        answerChosen();
      }}
    >
      <p>{props.answer}</p>
    </div>
  );
};

export default Answers;
