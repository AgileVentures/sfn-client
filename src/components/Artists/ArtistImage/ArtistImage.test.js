import React from 'react'
import ArtistImage from './ArtistImage'

import { shallow } from 'enzyme'

describe('<ArtistImage />', () => {
  it('has an image of the artist', () => {
    const artistImageWrapper = shallow(<ArtistImage />)
    expect(artistImageWrapper.find('img').length).toEqual(1)
  })
})
