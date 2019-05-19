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
})
