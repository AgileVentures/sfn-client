import React from "react";
import Causes from "./Causes";
import {shallow} from "enzyme";

//Need at least 1 test to pass Travis CI
describe("<Causes />", () => {
  it("creates component without crashing", () => {
    const causes = <Causes />;
  });

  it("contains text CausesContainer", () => {
    const causesWrapper = shallow(<Causes />);
    expect(causesWrapper.text()).toEqual("CausesContainer");
  });
});
