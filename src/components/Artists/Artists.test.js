import React from "react";
import Artists from "./ArtistsContainer";
import {
  shallow
} from "enzyme"

let wrapper;

//Need at least 1 test to pass Travis CI
describe("<ArtistsContainer />", () => {
  beforeEach(() => {
    wrapper = shallow( < Artists / > )
  })

  it("contains the text 'ArtistsContainer'", () => {
    expect(wrapper.find('div').text()).toEqual('ArtistsContainer');
  });
});