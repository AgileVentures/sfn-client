import React from "react";
import Home from "./HomeContainer";
import {shallow} from "enzyme";

//Need at least 1 test to pass Travis CI
describe("<HomeContainer />", () => {
  it("contains the text HomeContainer", () => {
    const homeWrapper = shallow(<Home />);
    expect(homeWrapper.text()).toEqual("HomeContainer");
  });
});
