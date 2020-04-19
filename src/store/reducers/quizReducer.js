import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  questions: [],
  score: 0,
  count: 1,
};

const fetchQuestions = (state, action) => {
  return updateObject(state, {
    questions: action.data,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_QUESTIONS:
      return fetchQuestions(state, action);
    case actionTypes.ANSWER_CLICKED:
      return updateObject(state, {
        count: state.count + 1,
        score: action.data ? state.score + 1 : state.score,
      });
    default:
      return state;
  }
};

export default reducer;
