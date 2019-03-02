import React from "react";
import Home from "./HomeContainer";
import {shallow} from "enzyme"

let wrapped;

//Need at least 1 test to pass Travis CI
describe("<HomeContainer />", () => {
  beforeEach( ()=> {
    wrapped = shallow(<Home/>)
  })

  it("contains the text HomeContainer", ()=> {
    expect(wrapped.text()).toEqual("HomeContainer")
  })
});
