import React from "react";
import Artists from "./ArtistsContainer";
import {shallow} from "enzyme";

//Need at least 1 test to pass Travis CI
describe("<ArtistsContainer />", () => {
  it("contains the text 'ArtistsContainer'", () => {
    const artistsContainerWrapper = shallow(<Artists />);
    expect(artistsContainerWrapper.find("div").text()).toEqual(
      "ArtistsContainer"
    );
  });
});
