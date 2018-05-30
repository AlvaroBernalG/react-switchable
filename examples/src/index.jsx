import React from "react";
import ReactDOM from "react-dom";
import Switch, { State } from "../../src/";
import "./Example.scss";

const App = () => (
  <div className="demo">
    <div className="quiz">
      <Switch className="test">
        <State value="state 0">State 0</State>
        <State value="State 2">State 2</State>
        <State value="State 3">State 3</State>
      </Switch>
      <Switch>
        <State value="State 1">State 1</State>
        <State value="State 2">State 2</State>
        <State default value="State 3">State 3</State>
        <State value="State 3">State 4</State>
      </Switch>
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
