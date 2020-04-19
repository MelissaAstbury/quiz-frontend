import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import "./index.scss";
import App from "./App";
import quizReducer from "./store/reducers/quizReducer";

const rootReducer = combineReducers({
  quiz: quizReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
