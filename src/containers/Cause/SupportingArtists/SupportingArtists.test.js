import React from 'react'
import SupportingArtists from './SupportingArtists'

import { shallow } from 'enzyme'

describe('SupportingArtists', () => {
  let supportingArtistsWrapper

  beforeEach(() => {
    supportingArtistsWrapper = shallow(<SupportingArtists />)
  })

  it('has 4 SupportingArtist components', () => {
    expect(supportingArtistsWrapper.find('SupportingArtist').length).toEqual(4)
  })
})
