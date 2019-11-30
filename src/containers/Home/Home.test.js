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
    expect(homeWrapper.find('button').length).toEqual(1)
  })

  it('contains 3 mood images about artists', () => {
    expect(homeWrapper.find('img').length).toEqual(3)
  })
})
