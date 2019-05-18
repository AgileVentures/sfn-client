import React from 'react'
import RecentDonors from './RecentDonors'

import { shallow } from 'enzyme'

describe('<RecentDonors />', () => {
  let recentDonorsWrapper

  beforeEach(() => {
    recentDonorsWrapper = shallow(<RecentDonors />)
  })

  it('has 5 avatars', () => {
    expect(recentDonorsWrapper.find('Avatar').length).toEqual(5)
  })
})
