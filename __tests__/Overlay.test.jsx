import React from "react";
import { shallow } from "enzyme";
import { Overlay } from "../src/";

describe("<Overlay />", () => {
  it("matches the snapshot", () => {
    const tree = shallow(<Overlay selectedIndex={0} totalItems={2} />);
    expect(tree).toMatchSnapshot();
  });
});
