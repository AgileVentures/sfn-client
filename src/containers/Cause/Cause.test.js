import React from "react";
import Cause from "./Cause";
import {shallow} from "enzyme";

//Need at least 1 test to pass Travis CI
describe("<Cause />", () => {

  it('contains text Cause', () => {
    const causeWrapper = shallow( < Cause / > )
    expect(causeWrapper.text()).toEqual('Cause')
  })
});
