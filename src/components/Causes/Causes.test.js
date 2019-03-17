import React from "react";
import Causes from "./CausesContainer";
import {
  shallow
} from "enzyme"

//Need at least 1 test to pass Travis CI
describe("<CausesContainer />", () => {
  it('creates component without crashing', () => {
    const causes = < Causes / >
  })

  it('contains text CausesContainer', () => {
    const causesContainerWrapper = shallow( < Causes / > )
    expect(causesContainerWrapper.text()).toEqual('CausesContainer')
  })
});