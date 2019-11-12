import React from 'react'
import TrendingCauses from './TrendingCauses'
import { shallow } from 'enzyme'

describe('<TrendingCauses />', () => {
  let trendingCausesWrapper
  let causes

  beforeEach(() => {
    causes = [{ endDate: '2019-10-10', name: 'Awesome Cause 1', amountRaised: '5000', targetAmount: '100000', sponsor: 'unicef' }, { endDate: '2019-10-10', name: 'Awesome Cause 2', amountRaised: '2000', targetAmount: '100000', sponsor: 'unicef' }, { endDate: '2019-10-10', name: 'Awesome Cause 3', amountRaised: '400', targetAmount: '100000', sponsor: 'who' }, { endDate: '2019-10-10', name: 'Awesome Cause 4', amountRaised: '2000', targetAmount: '100000', sponsor: 'wfp' }]
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
