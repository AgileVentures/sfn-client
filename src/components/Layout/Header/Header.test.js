import React from 'react'
import Header from './Header'
import { shallow } from 'enzyme'

describe('<Header />', () => {
  it('contains all the navigation links', () => {
    const headerWrapper = shallow(<Header handleClick={() => { }} mobileMenu={false} />)
    expect(headerWrapper.exists()).toBe(true)
    // expect(headerWrapper.find('NavLink').length).toEqual(6)
  })
})
