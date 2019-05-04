import React from 'react'
import ExploreArtists from './ExploreArtists'
import { shallow } from 'enzyme'
import ReactPaginate from 'react-paginate'

describe('<ExploreArtists />', () => {
  let exploreArtistsWrapper
  beforeEach(() => {
    exploreArtistsWrapper = shallow(<ExploreArtists />)
  })
  it('Has 3 Artists', () => {
    expect(exploreArtistsWrapper.find('ArtistCard').length).toEqual(3)
  })
  it("has 'Explore Artists' title", () => {
    expect(exploreArtistsWrapper.find('h1').text()).toEqual('Explore Artists')
  })
  it('has a pagination component', () => {
    expect(exploreArtistsWrapper.find(ReactPaginate).length).toEqual(1)
  })
})
