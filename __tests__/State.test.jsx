import React from "react";
import { shallow } from "enzyme";
import { State } from "../src/";

describe("<State />", () => {
  it("matches the snapshot", () => {
    const tree = shallow(<State value="hot"> hot </State>);
    expect(tree).toMatchSnapshot();
  });

  it("should correctly handle disable state.", () => {
    const wrapper = shallow(
      <State disable value="hot">
        hot
      </State>
    );
    expect(wrapper.hasClass("abg-switch__state--disable")).toBe(true);
  });

  it("should correctly handle active state.", () => {
    const wrapper = shallow(
      <State active value="hot">
        hot
      </State>
    );
    expect(wrapper.hasClass("abg-switch__state--on")).toBe(true);
  });

  it("should correctly render inner text.", () => {
    const wrapper = shallow(<State value="hot">hot</State>);
    expect(wrapper.text()).toBe("hot");
  });
});
