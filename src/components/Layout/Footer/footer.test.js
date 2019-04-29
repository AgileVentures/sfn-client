import React from 'react'
import Footer from './Footer'
import { shallow } from 'enzyme'

describe('<Footer />', () => {
  it('contains a copyright', () => {
    const footerWrapper = shallow(<Footer />)
    expect(footerWrapper.find('.footer-container__copyright').length).toEqual(1)
  })
})
