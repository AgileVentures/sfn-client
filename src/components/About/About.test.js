import React from "react";
import About from "./AboutContainer";
import {
  shallow
} from "enzyme";

//Need at least 1 test to pass Travis CI
describe("<AboutContainer />", () => {

  it('creates component without crashing', () => {
    const about = < About / >
  })

  it("displays 'AboutContainer' text", () => {
    const aboutComponentWrapper = shallow( < About / > )
    expect(aboutComponentWrapper.find('div').text()).toEqual('AboutContainer')
  })
});