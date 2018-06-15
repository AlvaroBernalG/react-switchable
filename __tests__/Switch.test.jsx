import React from "react";
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

  it("onSelection() should be called whenever a state is selected.", () => {
    const onSelection = jest.fn();
    const wrapper = mount(
      <Switch onSelection={onSelection}>
        <State value="Hot">Hot</State>
        <State value="Cold">Cold</State>
      </Switch>
    );
    wrapper
      .find("State")
      .at(1)
      .simulate("click");
    expect(onSelection.mock.calls.length).toBe(1);
  });

  it("onValueChange() should be called whenever state changes.", () => {
    const onValueChangeHandler = jest.fn();
    const wrapper = mount(
      <Switch onValueChange={onValueChangeHandler}>
        <State value="Hot">Hot</State>
        <State value="Cold">Cold</State>
      </Switch>
    );
    wrapper
      .find("State")
      .at(1)
      .simulate("click");
    expect(onValueChangeHandler.mock.calls.length).toBe(1);
  });

  it("onValueChange() shouldn't be called when `disable` property is present.", () => {
    const onValueChangeHandler = jest.fn();
    const wrapper = mount(
      <Switch disable onSelection={onValueChangeHandler}>
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
    expect(onValueChangeHandler.mock.calls.length).toBe(0);
  });

  it("should be able to change state with `Arrow` keys.", () => {
    const wrapper = mount(
      <Switch>
        <State value="Hot">Hot</State>
        <State default value="Cold">
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

    expect(wrapper.state().activeIndex).toBe(0);
  });

  it("should be able to change state with `Enter` key.", () => {
    const wrapper = mount(
      <Switch>
        <State value="Hot">Hot</State>
        <State default value="Cold">
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
    expect(wrapper.state().activeIndex).toBe(0);
  });

  it("should not allow to change the state if `active` property is present.", () => {
    const wrapper = mount(
      <Switch>
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

    expect(wrapper.state().activeIndex).toBe(1);
  });

  it("should throw error if both `active` and `default` are present in any <State />", () => {
    expect(() =>
      mount(
        <Switch>
          <State active value="Hot">
            Hot
          </State>
          <State default value="Cold">
            Cold
          </State>
        </Switch>
      )
    ).toThrowError();
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
