import React from 'react'
import { shallow } from 'enzyme'
import Causes from './Causes'

describe('<Causes />', () => {
  let causesWrapper
  beforeEach(async () => {
    causesWrapper = shallow(<Causes />)
  })

  describe('data resolved with no error', () => {
    it('contains 1 Trending causes container', async() => {
      expect(causesWrapper.find('TrendingCauses').length).toEqual(1)
    })

    it('contains 1 Campaigns ending soon container', () => {
      expect(causesWrapper.find('CampaignsEndingSoon').length).toEqual(1)
    })

    it('contains 1 Explore these causes container', () => {
      expect(causesWrapper.find('ExploreCauses').length).toEqual(1)
    })

    it('contains a sign up banner at the bottom', () => {
      expect(causesWrapper.find('Banner').length).toEqual(1)
    })
  })
})
