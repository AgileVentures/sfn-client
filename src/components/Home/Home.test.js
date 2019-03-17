import React from "react";
import Home from "./HomeContainer";
import {
  shallow
} from "enzyme"


//Need at least 1 test to pass Travis CI
describe("<HomeContainer />", () => {

  const homeWrapper = shallow( < Home / > )

  it('creates component without crashing', () => {
    const home = < Home / >
  })


  it("contains the text HomeContainer", () => {
    expect(homeWrapper.text()).toEqual("HomeContainer")
  })
});