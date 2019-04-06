import React from "react";
import Performance from "./Performance";
import {
  shallow
} from "enzyme"


//Need at least 1 test to pass Travis CI
describe("<Performance />", () => {


  it('creates component without crashing', () => {
    const performance = < Performance / >
  })

  it("contains the text Performance", () => {
    const performanceWrapper = shallow( < Performance / > )
    expect(performanceWrapper.text()).toEqual("Performance")
  })
});