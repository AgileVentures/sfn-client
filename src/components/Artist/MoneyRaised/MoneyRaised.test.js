import React from "react";
import MoneyRaised from "./MoneyRaised";
import Chart from "./Chart"
import {
  shallow
} from "enzyme"

let moneyRaisedWrapper;

//Need at least 1 test to pass Travis CI
describe("<MoneyRaised />", () => {
  beforeEach(() => {
    moneyRaisedWrapper = shallow( < MoneyRaised / > )
  })

  it("contains the text Money Raised", () => {
    expect(moneyRaisedWrapper.find("h3").text()).toContain("Money Raised")
  })

  it("contains the Chart component", () => {
    expect(moneyRaisedWrapper.find("Chart").length).toEqual(1)
  })
});