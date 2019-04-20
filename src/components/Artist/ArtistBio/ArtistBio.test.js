import React from 'react'
import ArtistBio from './ArtistBio'
import {
  shallow
} from 'enzyme'

describe('<ArtistBio />', () => {
  let ArtistBioWrapper
  beforeEach(() => {
    ArtistBioWrapper = shallow(<ArtistBio />)
  })

  it('has an image', () => {
    expect(ArtistBioWrapper.find('img').length).toEqual(1)
  })

  it('has an artist name', () => {
    expect(ArtistBioWrapper.find('h1.artist-details__name').length).toEqual(1)
  })

  it('has an artist description', () => {
    expect(ArtistBioWrapper.find('p').length).toBeGreaterThan(0)
  })
})
