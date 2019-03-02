import React from "react";
import Causes from "./CausesContainer";
import {shallow} from "enzyme"

let wrapped
//Need at least 1 test to pass Travis CI
describe ("<CausesContainer />", () => {
  beforeEach(()=>{
    wrapped = shallow( <Causes/> )
  })
  it('contains text CausesContainer', ()=>{
    expect(wrapped.text()).toEqual('CausesContainer')
  })
});