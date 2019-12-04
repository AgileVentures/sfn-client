import React from 'react'
import Banner from './Banner'

import { shallow } from 'enzyme'

describe('<Banner />', () => {
  let bannerWrapper

  beforeEach(() => {
    bannerWrapper = shallow(<Banner />)
  })

  it('has a sign up button', () => {
    expect(bannerWrapper.find('button').length).toEqual(1)
  })

  it('has a headline defined', () => {
    expect(bannerWrapper.find('h3').length).toEqual(1)
  })

  it('has a paragraph', () => {
    expect(bannerWrapper.find('p').length).toEqual(1)
  })

  it("doesn't have a mailchimp form", () => {
    expect(bannerWrapper.find('.form-mailchimp').length).toEqual(0)
  })
})

describe('<Banner /> with MailChimp form', () => {
  let bannerWrapper

  beforeEach(() => {
    bannerWrapper = shallow(<Banner mailchimpForm />)
  })

  it('has a headline defined', () => {
    expect(bannerWrapper.find('h3').length).toEqual(1)
  })

  it('has a paragraph', () => {
    expect(bannerWrapper.find('p').length).toEqual(1)
  })

  it('has a mailchimp form', () => {
    expect(bannerWrapper.find('.form-mailchimp').length).toEqual(1)
  })
})
