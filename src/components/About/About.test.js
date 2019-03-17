import React from "react";
import About from "./AboutContainer";
import {
  shallow
} from "enzyme";

//Need at least 1 test to pass Travis CI
describe("<AboutContainer />", () => {

  const aboutComponentWrapper = shallow( < About / > )

  it('creates component without crashing', () => {
    const about = < About / >
  })

  it("displays 'AboutContainer' text", () => {
    expect(aboutComponentWrapper.find('div').text()).toEqual('AboutContainer')
  })
});