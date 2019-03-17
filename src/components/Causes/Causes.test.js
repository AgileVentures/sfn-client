import React from "react";
import Causes from "./CausesContainer";
import {
  shallow
} from "enzyme"

//Need at least 1 test to pass Travis CI
describe("<CausesContainer />", () => {
  const causesContainerWrapper = shallow( < Causes / > )

  it('creates component without crashing', () => {
    const causes = < Causes / >
  })

  it('contains text CausesContainer', () => {
    expect(causesContainerWrapper.text()).toEqual('CausesContainer')
  })
});