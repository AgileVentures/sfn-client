import React from 'react'
import CampaignsEndingSoon from './CampaignsEndingSoon'
import { shallow } from 'enzyme'

describe('<CampaignsEndingSoon />', () => {
  let campaignsEndingSoonWrapper
  beforeEach(() => {
    campaignsEndingSoonWrapper = shallow(<CampaignsEndingSoon />)
  })

  it("has 'Campaign Ending Soon' title", () => {
    expect(campaignsEndingSoonWrapper.find('h3').text()).toEqual(
      'Campaigns ending soon'
    )
  })

  it('has 2 campaign cards that end soon showing underneath', () => {
    expect(campaignsEndingSoonWrapper.find('CauseCard').length).toEqual(2)
  })

  it('has link to navigate to all ending causes', () => {
    expect(campaignsEndingSoonWrapper.find('NavLink').length).toEqual(1)
  })
})
