import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetGame } from "../../store/actions/quiz";

import "./FinishedCard.scss";

const FinishedCard = () => {
  const dispatch = useDispatch();
  const score = useSelector((state) => state.quiz.score);
  // const resetClicked = () => {
  // useDispatch()
  // };
  return (
    <>
      <div className="score">
        <p>Your score is {score}</p>
      </div>
      <div
        className="play-again"
        onClick={() => {
          dispatch(resetGame());
        }}
      >
        {/* <div className="play-again" onClick={resetClicked}> */}
        <p>Want to play again?</p>
      </div>
    </>
  );
};

export default FinishedCard;
