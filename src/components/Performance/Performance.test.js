import React from "react";
import Performance from "./PerformanceContainer";
import {shallow} from "enzyme"

let wrapped;

//Need at least 1 test to pass Travis CI
describe("<PerformanceContainer />", () => {
  beforeEach( ()=> {
    wrapped = shallow(<Performance/>)
  })

  it("contains the text PerformanceContainer", ()=> {
    expect(wrapped.text()).toEqual("PerformanceContainer")
  })
});
