import React from 'react'
import ArtistCard from './ArtistCard'

import { shallow } from 'enzyme'

describe('ArtistCard', () => {
  let artistCardWrapper

  beforeEach(() => {
    artistCardWrapper = shallow(<ArtistCard artistDetails />)
  })

  it('contains an ArtistImage', () => {
    expect(artistCardWrapper.find('ArtistImage').length).toEqual(1)
  })

  it('contains the artist name', () => {
    expect(artistCardWrapper.find('h3.artist-card-name').length).toEqual(1)
  })

  it('contains the artist detail', () => {
    expect(artistCardWrapper.find('div.artist-card-detail').length).toEqual(1)
  })

  it('contains the funds raised', () => {
    expect(artistCardWrapper.find('h5.artist-card-funds').length).toEqual(1)
  })

  it('contains a Learn More button', () => {
    expect(artistCardWrapper.contains(<button>Learn More</button>)).toEqual(
      true
    )
  })
})
