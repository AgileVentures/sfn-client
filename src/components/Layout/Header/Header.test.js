import React from 'react'
import Header from './Header'
import { shallow } from 'enzyme'

describe('<Header />', () => {
  it('contains a NavBar component', () => {
    const headerWrapper = shallow(<Header handleClick={jest.fn()} mobileMenu={false} />)
    expect(headerWrapper.find('NavBar').length).toEqual(1)
  })
})
