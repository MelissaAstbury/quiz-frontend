import React, { useState, useEffect } from "react";
import axios from "axios";

import Question from "../../components/Question/Question";
import "./Quiz.scss";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  // const [api, setApi] = useState("http://localhost:8081/api/question");
  const api = "http://localhost:8081/api/question";

  useEffect(() => {
    // fetch(api)
    //   .then((resp) => resp.json())
    //   .then((data) => {
    //     setQuestions(data);
    //   });

    axios
      .get(api)
      .then((res) => {
        console.log(res.data);
        setQuestions(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      <p>Start the Quiz now!</p>
      {questions.length > 0 ? (
        questions.map((i) => {
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
