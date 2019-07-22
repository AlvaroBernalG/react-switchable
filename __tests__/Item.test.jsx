import React from "react";
import { shallow } from "enzyme";
import { Item } from "../src/";

describe("<Item />", () => {
  it("matches the snapshot", () => {
    const tree = shallow(
      <Item name="test" value="hot">
        hot
      </Item>
    );
    expect(tree).toMatchSnapshot();
  });

  it("<Item /> matches the snapshot", () => {
    const tree = shallow(
      <Item name="item" value="hot">
        hot
      </Item>
    );
    expect(tree).toMatchSnapshot();
  });

  it("<Item /> should correctly handle disable Item.", () => {
    const wrapper = shallow(
      <Item name="test" disable value="hot">
        hot
      </Item>
    );
    expect(wrapper.hasClass("abg-switch__item--disable")).toBe(true);
  });

  it("<Item /> should correctly handle active Item.", () => {
    const wrapper = shallow(
      <Item name="test" active value="hot">
        hot
      </Item>
    );
    expect(wrapper.hasClass("abg-switch__item--on")).toBe(true);
  });

  it("<Item /> should correctly render inner text.", () => {
    const wrapper = shallow(
      <Item name="test" value="hot">
        hot
      </Item>
    );
    expect(wrapper.text()).toBe("hot");
  });
});
