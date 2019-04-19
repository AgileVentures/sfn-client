import React from 'react';
import TrendingArtist from './TrendingArtist';

import { shallow } from 'enzyme';

describe('TrendingArtist', () => {
  let trendingArtistWrapper;

  beforeEach(() => {
    trendingArtistWrapper = shallow(<TrendingArtist />);
  });

  it('contains an ArtistImage', () => {
    expect(trendingArtistWrapper.find('ArtistImage').length).toEqual(1);
  });

  it('contains the artist name', () => {
    expect(trendingArtistWrapper.find('p.trending-artist-name').length).toEqual(1);
  });

  it('contains the artist detail', () => {
    expect(trendingArtistWrapper.find('div.trending-artist-detail').length).toEqual(1);
  });

  it('contains the funds raised', () => {
    expect(trendingArtistWrapper.find('p.trending-artist-funds').length).toEqual(1);
  });

  it('contains a Learn More button', () => {
    expect(trendingArtistWrapper.contains(<button>Learn More</button>)).toEqual(true);
  });
});
