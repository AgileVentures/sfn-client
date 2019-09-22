import React from 'react'
import { shallow } from 'enzyme'
import ExploreArtists from './ExploreArtists'
import Paginate from '../../../components/Paginate/Paginate'

describe('<ExploreArtists />', () => {
  let exploreArtistsWrapper
  beforeEach(() => {
    exploreArtistsWrapper = shallow(<ExploreArtists />)
  })
  it('Has 3 Artists', () => {
    expect(exploreArtistsWrapper.find('ArtistCard').length).toEqual(4)
  })
  it("has 'Explore Artists' title", () => {
    expect(exploreArtistsWrapper.find('h1').text()).toEqual('Explore Artists')
  })
  it('has a Paginate component', () => {
    expect(exploreArtistsWrapper.find(Paginate).length).toEqual(1)
  })
})
