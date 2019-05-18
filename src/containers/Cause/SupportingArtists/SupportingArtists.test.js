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

  it('has Supporting artists title', () => {
    expect(
      supportingArtistsWrapper.find('div.supporting-artists-wrapper h5').text()
    ).toEqual('Supporting artists')
  })
})
