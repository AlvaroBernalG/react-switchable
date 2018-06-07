import React from "react";
import sinon from "sinon";
import { mount } from "enzyme";
import Switch, { State } from "../src/";
import { proxy } from "../src/Switch";

const SnapShot = () => (
  <Switch>
    <State value="cold">cold</State>
    <State active value="hot">
      hot
    </State>
  </Switch>
);

describe("<Switch />", () => {
  it("should mount state children.", () => {
    const children = mount(<SnapShot />).find("State");
    expect(children.length).toBe(2);
  });

  it("should correctly render state text.", () => {
    const snap = mount(<SnapShot />);
    expect(snap.text()).toBe("coldhot");
  });

  it("should call an eventHandler whenever state changes.", () => {
    const onValueChangeHandler = sinon.spy();
    const wrapper = mount(
      <Switch onValueChange={onValueChangeHandler}>
        <State value="Hot">Hot</State>
        <State active value="Cold">
          Cold
        </State>
      </Switch>
    );
    wrapper
      .find("input")
      .at(0)
      .simulate("click");
    expect(onValueChangeHandler.calledOnce).toBe(true);
  });

  it("should call an onValueChange() whenever state changes.", () => {
    const onValueChangeHandler = sinon.spy();
    const wrapper = mount(
      <Switch onValueChange={onValueChangeHandler}>
        <State value="Hot">Hot</State>
        <State active value="Cold">
          Cold
        </State>
      </Switch>
    );
    wrapper
      .find("State")
      .at(0)
      .simulate("click");
    expect(onValueChangeHandler.calledOnce).toBe(true);
  });

  it("should be able to change state with `Arrow` keys.", () => {
    const onValueChangeHandler = sinon.spy();
    const wrapper = mount(
      <Switch onValueChange={onValueChangeHandler}>
        <State value="Hot">Hot</State>
        <State active value="Cold">
          Cold
        </State>
      </Switch>
    );
    wrapper
      .find(".abg-switch__container")
      .at(0)
      .simulate("keyDown", {
        key: "ArrowLeft"
      });
    expect(onValueChangeHandler.calledOnce).toBe(true);
  });

  it("should be able to change state with `Enter` key.", () => {
    const onValueChangeHandler = sinon.spy();
    const wrapper = mount(
      <Switch onValueChange={onValueChangeHandler}>
        <State value="Hot">Hot</State>
        <State active value="Cold">
          Cold
        </State>
      </Switch>
    );
    wrapper
      .find("State")
      .at(0)
      .simulate("keyDown", {
        key: "Enter"
      });
    expect(onValueChangeHandler.calledOnce).toBe(true);
  });
});

describe("utils", () => {
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
