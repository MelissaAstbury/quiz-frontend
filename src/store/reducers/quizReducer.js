import * as actionTypes from "../actions/actionTypes";

const initialState = {
  questions: [],
  score: 0,
  count: 1,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_QUESTIONS_START:
      return { ...state, loading: true };
    case actionTypes.FETCH_QUESTIONS_SUCCESS:
      return { ...state, questions: action.payload, loading: false };
    case actionTypes.FETCH_QUESTIONS_FAIL:
      return { ...state, error: action.error, loading: false };
    case actionTypes.ANSWER_CLICKED:
      return {
        ...state,
        count: state.count === 11 ? state.count : state.count + 1,
        score: action.data ? state.score + 1 : state.score,
      };
    default:
      return state;
  }
};

export default reducer;
