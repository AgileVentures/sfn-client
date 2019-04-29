import React from 'react'
import SupportingArtists from './SupportingArtists'

import { shallow } from 'enzyme'

describe('SupportingArtists', () => {
  let supportingArtistsWrapper

  beforeEach(() => {
    supportingArtistsWrapper = shallow(<SupportingArtists />)
  })

  it('has text SupportingArtists', () => {
    expect(supportingArtistsWrapper.find('div').text()).toEqual('SupportingArtists')
  })
})
