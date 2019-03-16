import React from "react";
import Performances from "./PerformancesContainer";
import {
  shallow
} from "enzyme"

let wrapper;

//Need at least 1 test to pass Travis CI
describe("<PerformancesContainer />", () => {
  beforeEach(() => {
    wrapper = shallow( < Performances / > )
  })

  it("contains the text PerformancesContainer", () => {
    expect(wrapper.text()).toEqual("PerformancesContainer")
  })
});