import React from "react";
import ReactDOM from "react-dom";
import { Switch, State } from "../src/";

const SnapShot = () => {
  return (
    <Switch>
      <State>Works 1</State>
      <State>Works 2</State>
    </Switch>
  );
};

describe("<Switch />", () => {

  it("renders without crashing", () => {
    const div = document.createElement("div");


    ReactDOM.unmountComponentAtNode(div);
  });
});
