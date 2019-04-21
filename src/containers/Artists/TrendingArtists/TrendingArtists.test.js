import React from 'react'
import TrendingArtists from './TrendingArtists'
import { shallow } from 'enzyme'

describe('<TrendingArtists />', () => {
  let TrendingArtistsWrapper
  beforeEach(() => {
    TrendingArtistsWrapper = shallow(<TrendingArtists />)
  })
  it('Has 4 Trending Artists', () => {
    expect(TrendingArtistsWrapper.find('ArtistCard').length).toEqual(4)
  })
  it("has 'Trending Artists' title", () => {
    expect(TrendingArtistsWrapper.find('h1').text()).toEqual(
      'Trending Artists'
    )
  })
})
