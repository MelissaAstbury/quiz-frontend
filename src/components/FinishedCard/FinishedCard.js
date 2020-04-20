import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./FinishedCard.scss";

const FinishedCard = () => {
  const score = useSelector((state) => state.quiz.score);
  return (
    <div className="score">
      <p>Your score is {score}</p>
    </div>
  );
};

export default FinishedCard;
