import React from "react";
import About from "./About";
import {
  shallow
} from "enzyme";

//Need at least 1 test to pass Travis CI
describe("<About />", () => {

  it('creates component without crashing', () => {
    const about = < About / >
  })

  it("displays 'AboutContainer' text", () => {
    const aboutWrapper = shallow( < About / > )
    expect(aboutWrapper.find('div').text()).toEqual('AboutContainer')
  })
});
