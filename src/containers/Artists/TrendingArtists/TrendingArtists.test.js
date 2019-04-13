import React from "react";
import TrendingArtists from "./TrendingArtists";
import { shallow } from "enzyme";

describe("<TrendingArtists />", () => {
  it("Has 4 Trending Artists", () => {
    const TrendingArtistsWrapper = shallow(<TrendingArtists />);
    expect(TrendingArtistsWrapper.find('TrendingArtist').length).toEqual(4);
  })
});