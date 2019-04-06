import React from "react";
import Home from "./Home";
import {
  shallow
} from "enzyme"


//Need at least 1 test to pass Travis CI
describe("<Home />", () => {


  it('creates component without crashing', () => {
    const home = < Home / >
  })


  it("contains the text Home", () => {
    const homeWrapper = shallow( < Home / > )
    expect(homeWrapper.text()).toEqual("Home")
  })
});