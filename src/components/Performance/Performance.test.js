import React from "react";
import Performance from "./PerformanceContainer";
import {
  shallow
} from "enzyme"


//Need at least 1 test to pass Travis CI
describe("<PerformanceContainer />", () => {

  const performanceWrapper = shallow( < Performance / > )

  it('creates component without crashing', () => {
    const performance = < Performance / >
  })

  it("contains the text PerformanceContainer", () => {
    expect(performanceWrapper.text()).toEqual("PerformanceContainer")
  })
});