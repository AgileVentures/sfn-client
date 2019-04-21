import React from 'react'
import ExploreArtists from './ExploreArtists'
import { shallow } from 'enzyme'

describe('<ExploreArtists />', () => {
  let ExploreArtistsWrapper
  beforeEach(() => {
    ExploreArtistsWrapper = shallow(<ExploreArtists />)
  })
  it('Has 3 Artists', () => {
    expect(ExploreArtistsWrapper.find('ArtistCard').length).toEqual(3)
  })
  it("has 'Explore Artists' title", () => {
    expect(ExploreArtistsWrapper.find('h1').text()).toEqual('Explore Artists')
  })
})
