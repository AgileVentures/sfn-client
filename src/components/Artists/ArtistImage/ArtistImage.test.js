import React from 'react'
import ArtistImage from './ArtistImage'

import {
  shallow
} from 'enzyme'

describe('ArtistImage', () => {

  let artistImageWrapper
  beforeEach(() => {
    artistImageWrapper = shallow( < ArtistImage/> )
  })

  it('has an image of the artist', () => {
    expect(artistImageWrapper.find('img').length).toEqual(1)
  })

  it('has the artist name', () => {
      expect(artistImageWrapper.find('h5').text()).toEqual('Dua Lipa')
  })
})