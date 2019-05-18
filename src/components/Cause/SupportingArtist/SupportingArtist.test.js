import React from 'react'
import { shallow } from 'enzyme'
import SupportingArtist from './SupportingArtist'

describe('SupportingArtist', () => {
  let supportingArtistWrapper

  beforeEach(() => {
    supportingArtistWrapper = shallow(<SupportingArtist />)
  })

  it('has a div with text Awesome artist A', () => {
    expect(supportingArtistWrapper.find('div.white').text()).toEqual(
      'Awesome artist A'
    )
  })

  it('has an Avatar component', () => {
    expect(supportingArtistWrapper.find('Avatar').length).toEqual(1)
  })
})
