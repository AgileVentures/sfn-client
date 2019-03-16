import React from "react";
import Cause from "./CauseContainer";
import {shallow} from 'enzyme'

let wrapped
//Need at least 1 test to pass Travis CI
describe ("<CauseContainer />", () => {
  beforeEach(()=>{
    wrapped = shallow( <Cause/> )
  })
  it('contains text CauseContainer', ()=>{
    expect(wrapped.text()).toEqual('CauseContainer')
  })
});