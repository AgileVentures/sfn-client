import React from "react";
import RelatedArtists from "./RelatedArtists";
import {
  shallow
} from "enzyme";



describe("<RelatedArtists />", () => {
  const relatedArtistsWrapper = shallow( < RelatedArtists / > )

  it('creates component without crashing', () => {
    const relatedArtists = < RelatedArtists / >
  })

  it("creates a component with the text RelatedArtists", () => {
    expect(relatedArtistsWrapper.text()).toEqual("RelatedArtists")
  });

});