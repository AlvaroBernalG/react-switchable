import React from "react";
import ReactDOM from "react-dom";
import { Switch, State } from "../src/";
import { proxy } from "../src/Switch";

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

  it("proxy() should be able to intercept function calls.", () => {
    const mockCallback = jest.fn();

    const fn = proxy(mockCallback)(mockCallback);

    fn();

    expect(mockCallback.mock.calls.length).toBe(2);
  });

  it("proxy() should call the original func and ignore undefined funcs.", () => {
    const mockCallback = jest.fn();

    const fn = proxy(mockCallback)(undefined);

    fn();

    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
