import React from 'react'
import NavBar from './NavBar'
import { shallow } from 'enzyme'

describe('<NavBar />', () => {
  let navBarWrapper
  beforeEach(() => {
    navBarWrapper = shallow(
      <NavBar handleClick={jest.fn()} mobileMenu={false} />
    )
  })

  it('contains all the navigation links', () => {
    expect(navBarWrapper.find('NavLink').length).toEqual(8)
  })
  it('contains a logo', () => {
    expect(navBarWrapper.find('.nav-container__logo').length).toEqual(1)
  })

  it('does not contain a toggled class if the mobileMenu prop is false', () => {
    expect(navBarWrapper.find('.toggled').length).toEqual(0)
  })
  it('contains a toggled class if the mobileMenu prop is true', () => {
    const navBarWrapper = shallow(
      <NavBar handleClick={jest.fn()} mobileMenu />
    )
    expect(navBarWrapper.find('.toggled').length).toEqual(1)
  })
})
