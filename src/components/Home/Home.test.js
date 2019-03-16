import React from "react";
import Home from "./HomeContainer";
import {
  shallow
} from "enzyme"

let wrapper;

//Need at least 1 test to pass Travis CI
describe("<HomeContainer />", () => {
  beforeEach(() => {
    wrapper = shallow( < Home / > )
  })

  it("contains the text HomeContainer", () => {
    expect(wrapper.text()).toEqual("HomeContainer")
  })
});