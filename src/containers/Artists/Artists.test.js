import React from 'react'
import Artists from './Artists'
import { shallow } from 'enzyme'

describe('<Artists />', () => {
  let artistsWrapper
  beforeEach(() => {
    artistsWrapper = shallow(<Artists />)
  })
  it('contains 1 Trending Artists container', () => {
    expect(artistsWrapper.find('TrendingArtists').length).toEqual(1)
  })

  it('contains 1 Explore Artists container', () => {
    expect(artistsWrapper.find('ExploreArtists').length).toEqual(1)
  })
})
