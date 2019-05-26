import React from 'react'
import About from './About'
import { shallow } from 'enzyme'

// Need at least 1 test to pass Travis CI
describe('<About />', () => {
  let aboutWrapper
  beforeEach(() => {
    aboutWrapper = shallow(<About />)
  })

  it('has a vision component explaining what we focus on', () => {
    expect(aboutWrapper.find('Vision').length).toEqual(1)
  })

  it('has a why statement as the reason to give', () => {
    expect(aboutWrapper.find('Why').length).toEqual(1)
  })

  it('has a how section with all the actors of the process', () => {
    expect(aboutWrapper.find('How').length).toEqual(1)
  })

  it('has a sing up banner at the bottom to keep in touch', () => {
    expect(aboutWrapper.find('Banner').length).toEqual(1)
  })
})
