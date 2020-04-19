import axios from "axios";

import * as actionTypes from "../actions/actionTypes";

export const fetchQuiz = () => {
  return (dispatch) => {
    const api = "http://localhost:8081/api/question";

    axios
      .get(api)
      .then((res) => {
        dispatch(sendData(res.data));
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
};

const sendData = (data) => {
  return {
    type: actionTypes.FETCH_QUESTIONS,
    data: data,
  };
};

export const answerClicked = (data) => {
  return (dispatch) => {
    dispatch(sendAnswer(data));
  };
};

const sendAnswer = (data) => {
  return {
    type: actionTypes.ANSWER_CLICKED,
    data: data,
  };
};
