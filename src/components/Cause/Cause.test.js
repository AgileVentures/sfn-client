import React from "react";
import Cause from "./CauseContainer";
import {
  shallow
} from 'enzyme'

//Need at least 1 test to pass Travis CI
describe("<CauseContainer />", () => {

  const causeWrapper = shallow( < Cause / > )

  it('creates component without crashing', () => {
    const cause = < Cause / >
  })

  it('contains text CauseContainer', () => {
    expect(causeWrapper.text()).toEqual('CauseContainer')
  })
});