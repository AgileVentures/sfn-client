import React from "react";
import Header from "./Header";
import {shallow} from "enzyme"

let wrapped;

//Need at least 1 test to pass Travis CI
describe("<Header />", () => {
  beforeEach( ()=> {
    wrapped = shallow(<Header/>)
  })

  it("contains all the navigation links", ()=> {
    expect(wrapped.find("NavLink").length).toEqual(6)
  })
});
