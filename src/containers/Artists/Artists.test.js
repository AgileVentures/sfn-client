import React from 'react'
import Artists from './Artists'
import { shallow } from 'enzyme'

describe('<Artists />', () => {
  it("contains 1 Trending Artists container", () => {
    const artistsWrapper = shallow( < Artists / > )
    expect(artistsWrapper.find('TrendingArtists').length).toEqual(1);
  });
});
