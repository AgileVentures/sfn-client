import React from "react";
import Header from "./Header";
import {
  shallow
} from "enzyme"

let wrapper;

//Need at least 1 test to pass Travis CI
describe("<Header />", () => {
  beforeEach(() => {
    wrapper = shallow( < Header / > )
  })

  it("contains all the navigation links", () => {
    expect(wrapper.find("NavLink").length).toEqual(6)
  })
});