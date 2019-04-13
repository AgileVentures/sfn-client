import React from "react";
import Artists from "./Artists";
import {shallow} from "enzyme";

//Need at least 1 test to pass Travis CI
describe("<Artists />", () => {

  it("contains 1 Trending Artists component", () => {
    const artistsWrapper = shallow( < Artists / > )
    expect(artistsWrapper.find('TrendingArtists').length).toEqual(1);
  });
});
