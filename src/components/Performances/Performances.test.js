import React from "react";
import Performances from "./PerformancesContainer";
import {
  shallow
} from "enzyme"


//Need at least 1 test to pass Travis CI
describe("<PerformancesContainer />", () => {


  it('creates component without crashing', () => {
    const performances = < Performances / >
  })

  it("contains the text PerformancesContainer", () => {
    const performancesWrapper = shallow( < Performances / > )
    expect(performancesWrapper.text()).toEqual("PerformancesContainer")
  })
});