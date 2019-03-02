import React from "react";
import Artist from "./ArtistContainer";
import ArtistBio from "./ArtistBio"
import MoneyRaised from "./MoneyRaised/MoneyRaised"
import {
  shallow
} from "enzyme"

let wrapped;

//Need at least 1 test to pass Travis CI
describe("<ArtistContainer />", () => {

  beforeEach(() => {
    wrapped = shallow( < Artist / > )
  })

  it("displays an artist bio", () => {
    expect(wrapped.find(ArtistBio).length).toEqual(1)
  })

  it("displays an money raised", () => {
    expect(wrapped.find(MoneyRaised).length).toEqual(1)
  })
});