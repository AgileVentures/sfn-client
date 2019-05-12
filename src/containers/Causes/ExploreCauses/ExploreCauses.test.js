import React from 'react'
import ExploreCauses from './ExploreCauses'
import { shallow } from 'enzyme'

describe('<Causes />', () => {
  let exploreCausesWrapper
  beforeEach(() => {
    exploreCausesWrapper = shallow(<ExploreCauses />)
  })

  it("has an 'Explore these causes' title", () => {
    expect(exploreCausesWrapper.find('h3').text()).toEqual(
      'Explore these causes'
    )
  })

  it('has an 8 different cause categories', () => {
    expect(exploreCausesWrapper.find('ExploreCausesCategory').length).toEqual(
      8
    )
  })
})
