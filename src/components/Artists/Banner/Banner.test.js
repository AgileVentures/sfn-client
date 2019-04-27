import React from 'react'
import Banner from './Banner'

import { shallow } from 'enzyme'

describe('Banner', () => {
  it('has a sign up button', () => {
    const bannerWrapper = shallow(<Banner />)
    expect(bannerWrapper.find('button').length).toEqual(1)
  })

  it('has a headline defined', () => {
    const bannerWrapper = shallow(<Banner />)
    expect(bannerWrapper.find('h3').length).toEqual(1)
  })

  it('has a paragraph', () => {
    const bannerWrapper = shallow(<Banner />)
    expect(bannerWrapper.find('p').length).toEqual(1)
  })
})
