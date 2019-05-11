import React from 'react'
import CampaignsEndingSoon from './CampaignsEndingSoon'
import { shallow } from 'enzyme'

describe('<CampaignsEndingSoon />', () => {
  let campaignsEndingSoonWrapper
  beforeEach(() => {
    campaignsEndingSoonWrapper = shallow(<CampaignsEndingSoon />)
  })

  it("has 'Campaign Ending Soon' title", () => {
    expect(campaignsEndingSoonWrapper.find('h2').text()).toEqual(
      'Campaigns Ending Soon'
    )
  })
})
