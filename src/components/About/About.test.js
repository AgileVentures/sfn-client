import React from "react";
import About from "./AboutContainer";
import {shallow} from "enzyme";

//Need at least 1 test to pass Travis CI
describe("<AboutContainer />", () => {
  it("displays 'AboutContainer' text", () => {
    const aboutWrapper = shallow(<About />);
    expect(aboutWrapper.find("div").text()).toEqual("AboutContainer");
  });
});
