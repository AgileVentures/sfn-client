import React from 'react'
import CampaignsEndingSoon from './CampaignsEndingSoon'
import { shallow } from 'enzyme'

describe('<CampaignsEndingSoon />', () => {
  let CampaignsEndingSoonWrapper
  beforeEach(() => {
    CampaignsEndingSoonWrapper = shallow(<CampaignsEndingSoon />)
  })

  it("has 'Campaign Ending Soon' title", () => {
    expect(CampaignsEndingSoonWrapper.find('h2').text()).toEqual(
      'Campaigns Ending Soon'
    )
  })
})
