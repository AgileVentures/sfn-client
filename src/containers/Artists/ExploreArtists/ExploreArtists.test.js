import React from 'react'
import ExploreArtists from './ExploreArtists'
import {
  shallow
} from 'enzyme'

describe('<ExploreArtists />', () => {
  let ExploreArtistsWrapper
  beforeEach(() => {
    ExploreArtistsWrapper = shallow(<ExploreArtists />)
  })
  it('Has 1 Artist', () => {
    expect(ExploreArtistsWrapper.find('ArtistImage').length).toEqual(1)
  })
  it("has 'Explore Artists' title", () => {
    expect(ExploreArtistsWrapper.find('h1').text()).toEqual('Explore Artists')
  })
})
