import React from 'react'
import RecentDonors from './RecentDonors'

import { shallow } from 'enzyme'

describe('RecentDonors', () => {
  let recentDonorsWrapper

  beforeEach(() => {
    recentDonorsWrapper = shallow(<RecentDonors />)
  })

  it('has text RecentDonors', () => {
    expect(recentDonorsWrapper.find('div').text()).toEqual('RecentDonors')
  })
})
