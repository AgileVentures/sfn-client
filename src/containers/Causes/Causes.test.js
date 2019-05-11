import React from 'react'
import Causes from './Causes'
import { shallow } from 'enzyme'

describe('<Causes />', () => {
  let causesWrapper
  beforeEach(() => {
    causesWrapper = shallow(<Causes />)
  })

  it('contains 1 Trending Causes container', () => {
    expect(causesWrapper.find('TrendingCauses').length).toEqual(1)
  })

  it('contains 1 Campaign Ending Soon container', () => {
    expect(causesWrapper.find('CampaignsEndingSoon').length).toEqual(1)
  })
})
