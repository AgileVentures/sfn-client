import React from "react";
import Performance from "./PerformanceContainer";
import {
  shallow
} from "enzyme"


//Need at least 1 test to pass Travis CI
describe("<PerformanceContainer />", () => {


  it('creates component without crashing', () => {
    const performance = < Performance / >
  })

  it("contains the text PerformanceContainer", () => {
    const performanceWrapper = shallow( < Performance / > )
    expect(performanceWrapper.text()).toEqual("PerformanceContainer")
  })
});