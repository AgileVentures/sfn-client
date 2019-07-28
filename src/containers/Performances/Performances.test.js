import React from 'react'
import Performances from './Performances'
import { shallow } from 'enzyme'

describe('<Performances />', () => {
  let performancesWrapper
  beforeEach(() => {
    performancesWrapper = shallow(<Performances />)
  })
  it('contains a sign up banner at the bottom', () => {
    expect(performancesWrapper.find('Banner').length).toEqual(1)
  })
})
