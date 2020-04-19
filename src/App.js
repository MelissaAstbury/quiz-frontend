import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";

import Home from "./containers/Home/Home";
import Quiz from "./containers/Quiz/Quiz";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/quiz" component={Quiz} />
    </Switch>
  );
}

export default App;
