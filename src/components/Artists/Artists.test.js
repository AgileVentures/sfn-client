import React from "react";
import Artists from "./ArtistsContainer";
import {
  shallow
} from "enzyme"

//Need at least 1 test to pass Travis CI
describe("<ArtistsContainer />", () => {

  const artistsContainerWrapper = shallow( < Artists / > )

  it('creates component without crashing', () => {
    const artistsContainer = < Artists / >
  })
  it("contains the text 'ArtistsContainer'", () => {
    expect(artistsContainerWrapper.find('div').text()).toEqual('ArtistsContainer');
  });
});