import React from "react";
import RelatedArtists from "./RelatedArtists";
import {shallow} from "enzyme";

let wrapped;

describe("<RelatedArtists />", () => {
  it("creates a component with the text RelatedArtists", () => {
    const wrapped = shallow(<RelatedArtists />);

    expect(wrapped.text()).toEqual("RelatedArtists");
  });
});
