import React from "react";
import Artist from "./ArtistContainer";
import ArtistBio from "./ArtistBio"
import MoneyRaised from "./MoneyRaised/MoneyRaised"
import {
  shallow
} from "enzyme"

let wrapper;

//Need at least 1 test to pass Travis CI
describe("<ArtistContainer />", () => {

  beforeEach(() => {
    wrapper = shallow( < Artist / > )
  })

  it("displays an artist bio", () => {
    expect(wrapper.find(ArtistBio).length).toEqual(1)
  })

  it("displays an money raised", () => {
    expect(wrapper.find(MoneyRaised).length).toEqual(1)
  })
});