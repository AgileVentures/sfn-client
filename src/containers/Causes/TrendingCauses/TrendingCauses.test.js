import React from 'react'
import TrendingCauses from './TrendingCauses'
import { shallow } from 'enzyme'

describe('<TrendingArtists />', () => {
  let trendingCausesWrapper
  beforeEach(() => {
    trendingCausesWrapper = shallow(<TrendingCauses />)
  })

  it("has 'Trending Causes' title", () => {
    expect(trendingCausesWrapper.find('h2').text()).toEqual('Trending Causes')
  })
})
