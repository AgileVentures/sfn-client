import React from "react";
import Artist from "./Artist";
import ArtistBio from "../../components/Artist/ArtistBio/ArtistBio"
import MoneyRaised from "../../components/Artist/MoneyRaised/MoneyRaised"
import {
  shallow
} from "enzyme"



//Need at least 1 test to pass Travis CI
describe("<Artist />", () => {

  it('creates component without crashing', () => {
    const artist = < Artist / >
  })

  let artistWrapper;
  beforeEach(() => {
    artistWrapper = shallow( < Artist / > )
  })
    
  it("displays an artist bio", () => {
    expect(artistWrapper.find(ArtistBio).length).toEqual(1)
  })

  it("displays an money raised", () => {
    expect(artistWrapper.find(MoneyRaised).length).toEqual(1)
  })
});
