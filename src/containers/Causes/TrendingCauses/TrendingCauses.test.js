import React from 'react'
import TrendingCauses from './TrendingCauses'
import { shallow } from 'enzyme'

describe('<TrendingArtists />', () => {
  let trendingCausesWrapper
  let causes
  beforeEach(() => {
    causes = [{ name: 'Awesome Cause 1', amountRaised: 50, sponsor: 'unicef' }, { name: 'Awesome Cause 2', amountRaised: 50, sponsor: 'unicef' }]
    trendingCausesWrapper = shallow(<TrendingCauses causes={causes} />)
  })

  it("has 'Trending Causes' title", () => {
    expect(trendingCausesWrapper.find('h3').text()).toEqual('Trending causes')
  })

  it('has 2 trending cards showing underneath', () => {
    expect(trendingCausesWrapper.find('CauseCard').length).toEqual(2)
  })

  it('has link to navigate to all trending causes', () => {
    expect(trendingCausesWrapper.find('NavLink').length).toEqual(1)
  })
})
