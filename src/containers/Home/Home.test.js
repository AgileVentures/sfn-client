import React from 'react'
import Home from './Home'
import { shallow } from 'enzyme'

// Need at least 1 test to pass Travis CI
describe('<Home />', () => {
  let homeWrapper

  beforeEach(() => {
    homeWrapper = shallow(<Home />)
  })

  it("contains the headline 'Drive the change with music'", () => {
    expect(homeWrapper.find('h1').text()).toEqual(
      'Drive the change with music'
    )
  })

  it('contains a call to action button', () => {
    expect(homeWrapper.find('.home-container__intro button').length).toEqual(1)
  })

  it('contains 3 mood images about artists', () => {
    expect(homeWrapper.find('.home-container__intro img').length).toEqual(3)
  })

  it('contains a section about how to register', () => {
    expect(homeWrapper.find('.home-container__registration').length).toEqual(1)
  })

  it('contains 3 possible registration opportunities', () => {
    expect(homeWrapper.find('.registration-option-card').length).toEqual(3)
  })

  it('each of the 3 cards has a button which leads to the registration accordingly', () => {
    expect(homeWrapper.find('.registration-option-card button').length).toEqual(
      3
    )
  })

  it('has a section which directs visitors to the newsletter sign up page', () => {
    expect(homeWrapper.find('Banner').length).toEqual(1)
  })
})
