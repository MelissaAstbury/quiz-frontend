import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { answerClicked } from "../../store/actions/quiz";
import "./Answers.scss";

const Answers = (props) => {
  const [style, setStyle] = useState(null);
  const dispatch = useDispatch();

  const answerChosen = () => {
    setStyle("#36d1e6");
    setTimeout(() => {
      setStyle(null);
      dispatch(answerClicked(props.correct));
    }, 250);
  };

  return (
    <div
      className="answer-container"
      style={{ backgroundColor: style }}
      onClick={() => {
        answerChosen();
      }}
    >
      <p>{props.answer}</p>
    </div>
  );
};

export default Answers;
