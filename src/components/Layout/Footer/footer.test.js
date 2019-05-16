import React from 'react'
import Footer from './Footer'
import { shallow } from 'enzyme'

describe('<Footer />', () => {
  let footerWrapper

  beforeEach(() => {
    footerWrapper = shallow(<Footer />)
  })

  it('contains a copyright', () => {
    expect(footerWrapper.find('.footer-container__copyright').length).toEqual(1)
  })
  it('contains all the navigation links', () => {
    expect(footerWrapper.find('NavLink').length).toEqual(6)
  })
})
