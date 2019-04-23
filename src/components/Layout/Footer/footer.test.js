import React from 'react'
import Footer from './Footer'
import { shallow } from 'enzyme'

// Need at least 1 test to pass Travis CI
describe('<Footer />', () => {
  it('contains all the navigation links', () => {
    const footerWrapper = shallow(<Footer />)
    expect(footerWrapper.find('NavLink').length).toEqual(6)
  })
})
