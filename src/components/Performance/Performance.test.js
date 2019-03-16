import React from "react";
import Performance from "./PerformanceContainer";
import {
  shallow
} from "enzyme"

let wrapper;

//Need at least 1 test to pass Travis CI
describe("<PerformanceContainer />", () => {
  beforeEach(() => {
    wrapper = shallow( < Performance / > )
  })

  it("contains the text PerformanceContainer", () => {
    expect(wrapper.text()).toEqual("PerformanceContainer")
  })
});