import React from 'react'
import ContactForm from './ContactForm'

import { shallow } from 'enzyme'

describe('<ContactForm />', () => {
  let contactFormWrapper

  beforeEach(() => {
    contactFormWrapper = shallow(<ContactForm />)
  })

  it('has an input field to fill in with the name', () => {
    expect(contactFormWrapper.find("input[name='name']").length).toEqual(1)
  })

  it('has an input field to fill in with the email address', () => {
    expect(contactFormWrapper.find("input[name='email']").length).toEqual(1)
  })

  it('has an input field to fill in with the subject of the email', () => {
    expect(contactFormWrapper.find("input[name='subject']").length).toEqual(1)
  })

  it('has a textfield to type a message for Sing for Needs', () => {
    expect(contactFormWrapper.find('textarea').length).toEqual(1)
  })

  it('has a button to send the email to Sing for Needs', () => {
    expect(contactFormWrapper.find('input.button').length).toEqual(1)
  })
})
