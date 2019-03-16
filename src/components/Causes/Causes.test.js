import React from "react";
import Causes from "./CausesContainer";
import {
  shallow
} from "enzyme"

let wrapper
//Need at least 1 test to pass Travis CI
describe("<CausesContainer />", () => {
  beforeEach(() => {
    wrapper = shallow( < Causes / > )
  })
  it('contains text CausesContainer', () => {
    expect(wrapper.text()).toEqual('CausesContainer')
  })
});