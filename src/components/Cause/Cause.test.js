import React from "react";
import Cause from "./CauseContainer";
import {
  shallow
} from 'enzyme'

let wrapper
//Need at least 1 test to pass Travis CI
describe("<CauseContainer />", () => {
  beforeEach(() => {
    wrapper = shallow( < Cause / > )
  })
  it('contains text CauseContainer', () => {
    expect(wrapper.text()).toEqual('CauseContainer')
  })
});