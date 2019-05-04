import React from 'react'
import ExploreArtists from './ExploreArtists'
import { shallow } from 'enzyme'
import ReactPaginate from 'react-paginate'

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
  it('adds a pagination component', () => {
    expect(ExploreArtistsWrapper.find(ReactPaginate).length).toEqual(1)
  })
})
