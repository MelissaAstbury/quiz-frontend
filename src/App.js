import React from "react";
import { Route, Switch } from "react-router-dom";

import Quiz from "./containers/Quiz/Quiz";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Quiz} />
    </Switch>
  );
}

export default App;
