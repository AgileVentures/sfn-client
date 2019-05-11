import React from 'react'
import TrendingCauses from './TrendingCauses'
import { shallow } from 'enzyme'

describe('<TrendingArtists />', () => {
  let TrendingCausesWrapper
  beforeEach(() => {
    TrendingCausesWrapper = shallow(<TrendingCauses />)
  })

  it("has 'Trending Causes' title", () => {
    expect(TrendingCausesWrapper.find('h2').text()).toEqual('Trending Causes')
  })
})
