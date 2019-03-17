import React from "react";
import Performances from "./PerformancesContainer";
import {
  shallow
} from "enzyme"

let performancesWrapper;

//Need at least 1 test to pass Travis CI
describe("<PerformancesContainer />", () => {

  const performancesWrapper = shallow( < Performances / > )


  it('creates component without crashing', () => {
    const performances = < Performances / >
  })

  it("contains the text PerformancesContainer", () => {
    expect(performancesWrapper.text()).toEqual("PerformancesContainer")
  })
});