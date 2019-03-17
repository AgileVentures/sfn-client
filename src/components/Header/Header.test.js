import React from "react";
import Header from "./Header";
import {
  shallow
} from "enzyme"


//Need at least 1 test to pass Travis CI
describe("<Header />", () => {

  const headerWrapper = shallow( < Header / > )

  it('creates component without crashing', () => {
    const header = < Header / >
  })

  it("contains all the navigation links", () => {
    expect(headerWrapper.find("NavLink").length).toEqual(6)
  })
});