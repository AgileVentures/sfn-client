import React from 'react'
import ContactUs from './ContactUs'

import { mount } from 'enzyme'

describe('<ContactUs />', () => {
  let contactUsWrapper

  beforeEach(() => {
    contactUsWrapper = mount(
      <ContactUs
        contactPersonName="Mrs. Awesome Charity spokesperson"
        websiteURL="google.com"
      />
    )
  })

  it('has title Contact us', () => {
    expect(contactUsWrapper.find('h5.white').text()).toEqual('Contact us')
  })

  it('has the name of the charity spokesperson', () => {
    expect(contactUsWrapper.find('h6').text()).toEqual(
      'Mrs. Awesome Charity spokesperson'
    )
  })

  it('has the url where the more information can be found', () => {
    expect(contactUsWrapper.find('a').length).toEqual(1)
  })

  it('has information about the contact details', () => {
    expect(contactUsWrapper.find('div.contact-details--item').length).toEqual(
      3
    )
  })

  it('has social media channels for communication', () => {
    expect(
      contactUsWrapper.find('div.contact-details--socials').length
    ).toEqual(1)
  })
})
