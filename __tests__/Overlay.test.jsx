import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import { Overlay } from "../src/";

describe("<Overlay />", () => {
  it("matches the snapshot", () => {
    const tree = shallow(<Overlay goTo={0} items={2} />);
    expect(tree).toMatchSnapshot();
  });
});
