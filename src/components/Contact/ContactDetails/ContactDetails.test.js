import React from 'react'
import ContactDetails from './ContactDetails'

import { shallow } from 'enzyme'

describe('<ContactDetails />', () => {
  let contactDetailsWrapper

  beforeEach(() => {
    contactDetailsWrapper = shallow(<ContactDetails />)
  })

  it('has information about the contact details', () => {
    expect(
      contactDetailsWrapper.find('div.contact-details--item').length
    ).toEqual(3)
  })

  it('has social media channels for communication', () => {
    expect(
      contactDetailsWrapper.find('div.contact-details--socials').length
    ).toEqual(1)
  })

  it('has all the social media icons (facebook, twitter, instagram, youtube, spotify) to link to the social media channels', () => {
    expect(contactDetailsWrapper.find('.social-icon').length).toEqual(5)
  })
})
