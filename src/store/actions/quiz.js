import axios from "axios";

import * as actionTypes from "../actions/actionTypes";

// My backend API which returns questions
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
        dispatch(fetchQuestionsSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchQuestionsFail(err));
      });
  };
};

export const answerClicked = (data) => {
  return {
    type: actionTypes.ANSWER_CLICKED,
    data: data,
  };
};

export const resetGame = () => {
  return { type: actionTypes.RESET_GAME };
};
