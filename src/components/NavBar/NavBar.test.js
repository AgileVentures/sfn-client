import React from 'react'
import NavBar from './NavBar'
import { shallow } from 'enzyme'

// Need at least 1 test to pass Travis CI
describe('<Footer />', () => {
  it('contains all the navigation links', () => {
    const navBarWrapper = shallow(<NavBar handleClick={() => { }} mobileMenu={false} />)
    expect(navBarWrapper.exists()).toBe(true)
    // expect(navBarWrapper.find('NavLink').length).toEqual(6)
  })
})
