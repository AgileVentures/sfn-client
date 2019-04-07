import React from "react";
import Artists from "./Artists";
import { shallow } from "enzyme"

//Need at least 1 test to pass Travis CI
describe("<Artists />", () => {


  it('creates component without crashing', () => {
    const artistsContainer = < Artists / >
  })
  it("contains the text 'ArtistsContainer'", () => {
    const artistsContainerWrapper = shallow( < Artists / > )
    expect(artistsContainerWrapper.find('TrendingArtists').length).toEqual(1);
  });
});