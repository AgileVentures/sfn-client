import React from 'react'
import TrendingArtist from './TrendingArtist'

import {
  shallow
} from 'enzyme'

describe('TrendingArtist', () => {

  it('has text TrendingArtist', () => {
    const trendingArtistWrapper = shallow( < TrendingArtist/> )
    expect(trendingArtistWrapper.find('ArtistImage').length).toEqual(1)
  })
})