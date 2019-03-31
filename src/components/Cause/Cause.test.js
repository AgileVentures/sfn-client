import React from "react";
import Cause from "./CauseContainer";
import {shallow} from "enzyme";

//Need at least 1 test to pass Travis CI
describe("<CauseContainer />", () => {
  it("contains text CauseContainer", () => {
    const causeWrapper = shallow(<Cause />);
    expect(causeWrapper.text()).toEqual("CauseContainer");
  });
});
