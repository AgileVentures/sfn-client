import React from "react";
import TrendingArtists from "./TrendingArtists";
import { shallow } from "enzyme";

describe("<TrendingArtists />", () => {
  it("contains the text TrendingArtists", () => {
    const TrendingArtistsWrapper = shallow(<TrendingArtists />);
    expect(TrendingArtistsWrapper.text()).toEqual("TrendingArtists");
  })
});