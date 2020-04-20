import axios from "axios";

import * as actionTypes from "../actions/actionTypes";

const api = "http://localhost:8081/api/question";

export const fetchStart = () => {
  return {
    type: actionTypes.FETCH_QUESTIONS_START,
  };
};

export const fetchQuestionsSuccess = (questions) => {
  return {
    type: actionTypes.FETCH_QUESTIONS_SUCCESS,
    payload: questions,
  };
};

export const fetchQuestionsFail = (error) => {
  return {
    type: actionTypes.FETCH_QUESTIONS_FAIL,
    error: error,
  };
};

export const fetchQuestions = () => {
  return (dispatch) => {
    dispatch(fetchStart());

    axios
      .get(api)
      .then((res) => {
        console.log("here");
        dispatch(fetchQuestionsSuccess(res.data));
      })
      .catch((err) => {
        console.log("comes into here");
        dispatch(fetchQuestionsFail(err));
      });
  };
};

export const answerClicked = () => {
  return {
    type: actionTypes.ANSWER_CLICKED,
  };
};
