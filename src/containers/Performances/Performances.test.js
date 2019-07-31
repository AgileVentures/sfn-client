import React from 'react'
import Performances from './Performances'
import { mount } from 'enzyme'

describe('<Performances />', () => {
  it('contains a Trending Performances wrapper', () => {
    const performancesWrapper = mount(<Performances />)
    expect(performancesWrapper.find('TrendingPerformances').length).toEqual(1)
  })
})
