import React from "react";
import { mount } from "enzyme";
import Switch, { Item } from "../src/";
import { proxy } from "../src/Switch";

const SnapShot = () => (
  <Switch name="temperature">
    <Item value="cold">cold</Item>
    <Item active value="hot">
      hot
    </Item>
  </Switch>
);

describe("<Switch />", () => {
  it("should mount Item children.", () => {
    const children = mount(<SnapShot />).find("Item");
    expect(children.length).toBe(2);
  });

  it("should correctly render Item text.", () => {
    const snap = mount(<SnapShot />);
    expect(snap.text()).toBe("coldhot");
  });

  it("[Deprecated] onSelection() should be called whenever a Item is selected.", () => {
    const onSelection = jest.fn();
    const wrapper = mount(
      <Switch name="temperature" onSelection={onSelection}>
        <Item value="Hot">Hot</Item>
        <Item value="Cold">Cold</Item>
      </Switch>
    );
    wrapper
      .find("Item")
      .at(1)
      .simulate("click");
    expect(onSelection.mock.calls.length).toBe(1);
  });

  it("onItemSelected() should be called whenever a Item is selected.", () => {
    const onSelection = jest.fn();
    const wrapper = mount(
      <Switch name="temperature" onItemSelected={onSelection}>
        <Item value="Hot">Hot</Item>
        <Item value="Cold">Cold</Item>
      </Switch>
    );
    wrapper
      .find("Item")
      .at(1)
      .simulate("click");
    expect(onSelection.mock.calls.length).toBe(1);
  });

  it("onValueChange() should be called whenever Item changes.", () => {
    const onValueChangeHandler = jest.fn();
    const wrapper = mount(
      <Switch name="temperature" onValueChange={onValueChangeHandler}>
        <Item value="Hot">Hot</Item>
        <Item value="Cold">Cold</Item>
      </Switch>
    );
    wrapper
      .find("Item")
      .at(1)
      .simulate("click");
    expect(onValueChangeHandler.mock.calls.length).toBe(1);
  });

  it("onItemChanged() should be called whenever Item changes.", () => {
    const onValueChangeHandler = jest.fn();
    const wrapper = mount(
      <Switch name="temperature" onItemChanged={onValueChangeHandler}>
        <Item value="Hot">Hot</Item>
        <Item value="Cold">Cold</Item>
      </Switch>
    );
    wrapper
      .find("Item")
      .at(1)
      .simulate("click");
    expect(onValueChangeHandler.mock.calls.length).toBe(1);
  });

  it("onValueChange() shouldn't be called when `disable` property is present.", () => {
    const onValueChangeHandler = jest.fn();
    const wrapper = mount(
      <Switch name="temperature" disable onSelection={onValueChangeHandler}>
        <Item value="Hot">Hot</Item>
        <Item active value="Cold">
          Cold
        </Item>
      </Switch>
    );
    wrapper
      .find("Item")
      .at(0)
      .simulate("click");
    expect(onValueChangeHandler.mock.calls.length).toBe(0);
  });

  it("should be able to change Item with `Arrow` keys.", () => {
    const wrapper = mount(
      <Switch name="temperature">
        <Item value="Hot">Hot</Item>
        <Item default value="Cold">
          Cold
        </Item>
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

  it("should be able to change Item with `Enter` key.", () => {
    const wrapper = mount(
      <Switch name="temperature">
        <Item value="Hot">Hot</Item>
        <Item default value="Cold">
          Cold
        </Item>
      </Switch>
    );
    wrapper
      .find("Item")
      .at(0)
      .simulate("keyDown", {
        key: "Enter"
      });
    expect(wrapper.state().activeIndex).toBe(0);
  });

  it("should not allow to change the state if `active` property is present.", () => {
    const wrapper = mount(
      <Switch name="temperature">
        <Item value="Hot">Hot</Item>
        <Item active value="Cold">
          Cold
        </Item>
      </Switch>
    );
    wrapper
      .find("Item")
      .at(0)
      .simulate("click");

    expect(wrapper.state().activeIndex).toBe(1);
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
