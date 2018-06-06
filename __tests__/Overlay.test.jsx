import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import { Overlay } from "../src/";

describe("<Overlay />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Overlay goTo={0} items={2} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("matches the snapshot", () => {
    const tree = renderer.create(<Overlay goTo={0} items={2} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
