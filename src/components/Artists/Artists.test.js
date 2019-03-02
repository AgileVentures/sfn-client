import React from "react";
import Artists from "./ArtistsContainer";
import { shallow } from "enzyme"

let wrapped;

//Need at least 1 test to pass Travis CI
describe ("<ArtistsContainer />", () => {
  beforeEach(()=> { 
    wrapped = shallow(< Artists />)
  })

  it ("contains the text 'ArtistsContainer'", () => {
    expect(wrapped.find('div').text()).toEqual('ArtistsContainer');
  });
});
