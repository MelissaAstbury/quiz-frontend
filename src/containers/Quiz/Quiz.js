import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchQuiz } from "../../store/actions/quiz";
import Question from "../../components/Question/Question";
import "./Quiz.scss";

const Quiz = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.quiz.questions);
  const score = useSelector((state) => state.quiz.score);
  const count = useSelector((state) => state.quiz.count);

  useEffect(() => {
    dispatch(fetchQuiz());
  }, []);

  return (
    <div className="quiz-container">
      <h1 className="title">The Magical Quiz! {score}</h1>
      {questions.length > 0 ? (
        questions
          .filter((i) => {
            return i.id === count;
          })
          .map((i) => {
            return <Question key={i.id} question={i} />;
            // return <p key={i.id}>{i.question}</p>;
          })
      ) : (
        <p>No Questions Found, Sorry!</p>
      )}
    </div>
  );
};

export default Quiz;
