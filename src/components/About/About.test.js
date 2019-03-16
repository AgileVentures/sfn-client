import React from "react";
import About from "./AboutContainer";
import { shallow } from "enzyme";

let wrapped;

//Need at least 1 test to pass Travis CI
describe("<AboutContainer />", () => {

  beforeEach(() => {
    wrapped = shallow( < About / > )
  })

  it("displays 'AboutContainer' text", () => {
    expect(wrapped.find('div').text()).toEqual('AboutContainer')
  })
});