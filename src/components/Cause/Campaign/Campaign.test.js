import React from 'react'
import Campaign from './Campaign'

import { shallow } from 'enzyme'

describe('Campaign', () => {
  let campaignWrapper

  beforeEach(() => {
    campaignWrapper = shallow(<Campaign />)
  })

  it('has text CauseBio', () => {
    expect(campaignWrapper.find('div').text()).toEqual('Campaign')
  })
})
