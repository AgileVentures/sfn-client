import React from 'react'
import TrendingPerformances from './TrendingPerformances'
import { shallow } from 'enzyme'

describe('<TrendingPerformances />', () => {
  let TrendingPerformancesWrapper
  beforeEach(() => {
    TrendingPerformancesWrapper = shallow(<TrendingPerformances />)
  })

  it("has 'Trending Performances' title", () => {
    expect(TrendingPerformancesWrapper.find('h1').text()).toEqual(
      'Trending Performances'
    )
  })

  it('has 3 performances featured in the top section', () => {
    expect(TrendingPerformancesWrapper.find('PerformanceCard').length).toEqual(
      3
    )
  })
})
