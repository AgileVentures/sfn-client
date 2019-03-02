import React from "react";
import MoneyRaised from "./MoneyRaised";
import Chart from "./Chart"
import {shallow} from "enzyme"

let wrapped;

//Need at least 1 test to pass Travis CI
describe("<MoneyRaised />", () => {
  beforeEach( ()=> {
    wrapped = shallow(<MoneyRaised/>)
  })

  it("contains the text Money Raised", ()=> {
    expect(wrapped.find("h3").text()).toContain("Money Raised")
  })

  it("contains the Chart component", ()=> {
   expect(wrapped.find("Chart").length).toEqual(1) 
  })
});
