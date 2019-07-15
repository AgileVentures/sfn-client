import React from 'react'
import Logo from './Logo'
import { shallow } from 'enzyme'

describe('<Logo />', () => {
  let logoWrapper
  beforeEach(() => {
    logoWrapper = shallow(<Logo />)
  })

  it('has the logo as an image', () => {
    expect(logoWrapper.find('img.logo').length).toEqual(1)
  })
})
