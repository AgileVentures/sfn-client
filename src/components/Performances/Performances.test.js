import React from "react";
import Performances from "./PerformancesContainer";
import {shallow} from "enzyme"

let wrapped;

//Need at least 1 test to pass Travis CI
describe("<PerformancesContainer />", () => {
  beforeEach( ()=> {
    wrapped = shallow(<Performances/>)
  })

  it("contains the text PerformancesContainer", ()=> {
    expect(wrapped.text()).toEqual("PerformancesContainer")
  })
});
