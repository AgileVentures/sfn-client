import React from 'react';
import TrendingArtist from './TrendingArtist';

import { shallow } from 'enzyme';

describe('TrendingArtist', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TrendingArtist />);
  });

  it('contains an ArtistImage', () => {
    expect(wrapper.find('ArtistImage').length).toEqual(1);
  });

  it('contains the artist name', () => {
    expect(wrapper.find('p.trending-artist-name').length).toEqual(1);
  });

  it('contains the artist detail', () => {
    expect(wrapper.find('div.trending-artist-detail').length).toEqual(1);
  });

  it('contains the funds raised', () => {
    expect(wrapper.find('p.trending-artist-funds').length).toEqual(1);
  });

  it('contains a Learn More button', () => {
    expect(wrapper.contains(<button>Learn More</button>)).toEqual(true);
  });
});
