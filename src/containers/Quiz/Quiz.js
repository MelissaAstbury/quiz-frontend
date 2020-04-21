import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchQuestions } from "../../store/actions/quiz";
import Question from "../../components/Question/Question";
import FinishedCard from "../../components/FinishedCard/FinishedCard";
import "./Quiz.scss";

const Quiz = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.quiz.questions);
  const count = useSelector((state) => state.quiz.count);

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  return (
    <div className="quiz-container">
      <h1 className="title">The Magical Quiz!</h1>
      {count === 11 ? (
        <FinishedCard />
      ) : questions.length > 0 ? (
        questions
          .filter((question) => {
            return question.id === count;
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
