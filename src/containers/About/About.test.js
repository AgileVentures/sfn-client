import React from 'react'
import About from './About'
import { shallow } from 'enzyme'

// Need at least 1 test to pass Travis CI
describe('<About />', () => {
  let aboutWrapper
  beforeEach(() => {
    aboutWrapper = shallow(<About />)
  })

  it('has a vision component', () => {
    expect(aboutWrapper.find('Vision').length).toEqual(1)
  })
})
