import React from "react";
import About from "./AboutContainer";
import {
  shallow
} from "enzyme";

let wrapper;

//Need at least 1 test to pass Travis CI
describe("<AboutContainer />", () => {

  beforeEach(() => {
    wrapper = shallow( < About / > )
  })

  it("displays 'AboutContainer' text", () => {
    expect(wrapper.find('div').text()).toEqual('AboutContainer')
  })
});