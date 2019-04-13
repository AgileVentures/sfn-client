import React from "react";
import Causes from "./Causes";
import {shallow} from "enzyme";

describe("<Causes />", () => {
  it("contains text CausesContainer", () => {
    const causesWrapper = shallow(<Causes />);
    expect(causesWrapper.text()).toEqual("CausesContainer");
  });
});
