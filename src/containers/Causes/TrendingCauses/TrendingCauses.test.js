import React from 'react'
import TrendingCauses, { GET_TRENDING_CAUSES_QUERY } from './TrendingCauses'
import { mountMockedProvider } from '../../support/tests/mountMockedProvider'

describe('<TrendingCauses />', () => {
  let trendingCausesWrapper, result

  beforeEach(async () => {
    result = { data: { causes:
                        [
                          { id: 1, startDate: new Date('2019-01-10'), description: 'Awesome Cause 1', endDate: new Date('2019-10-10'), name: 'Awesome Cause 1', amountRaised: 5000, targetAmount: 100000, sponsor: 'unicef' },
                          { id: 2, startDate: new Date('2019-01-10'), description: 'Awesome Cause 2', endDate: new Date('2019-10-10'), name: 'Awesome Cause 2', amountRaised: 2000, targetAmount: 100000, sponsor: 'unicef' },
                          { id: 3, startDate: new Date('2019-01-10'), description: 'Awesome Cause 3', endDate: new Date('2019-10-10'), name: 'Awesome Cause 3', amountRaised: 400, targetAmount: 100000, sponsor: 'who' },
                          { id: 4, startDate: new Date('2019-01-10'), description: 'Awesome Cause 1', endDate: new Date('2019-10-10'), name: 'Awesome Cause 4', amountRaised: 2000, targetAmount: 100000, sponsor: 'wfp' }
                        ]
    }
    }
    trendingCausesWrapper = await mountMockedProvider(result, GET_TRENDING_CAUSES_QUERY, <TrendingCauses />, { scope: 'trending' })
  })

  describe('success', () => {
    it("has 'Trending Causes' title", () => {
      expect(trendingCausesWrapper.find('h3').text()).toEqual('Trending causes')
    })

    it('has link to navigate to all trending causes', () => {
      expect(trendingCausesWrapper.find('NavLink').length).toEqual(1)
    })
    describe('CauseCard', () => {
      it('has two cause cards', () => {
        expect(trendingCausesWrapper.find('CauseCard').length).toEqual(2)
      })

      it('first cause card has correct cause name', () => {
        expect(trendingCausesWrapper.find('CauseCard').at(0).find('.cause-card-name').text()).toEqual('Awesome Cause 1')
      })

      it('second cause card has correct cause name', () => {
        expect(trendingCausesWrapper.find('CauseCard').at(1).find('.cause-card-name').text()).toEqual('Awesome Cause 2')
      })
    })

    describe('empty response', () => {
      beforeEach(async() => {
        result = { 'data': { 'causes': [] } }
        trendingCausesWrapper = await mountMockedProvider(result, GET_TRENDING_CAUSES_QUERY, <TrendingCauses />, { scope: 'trending' })
      })

      it('displays 2 EmptyCard components', () => {
        expect(trendingCausesWrapper.find('EmptyCard').length).toEqual(2)
      })
    })
  })

  describe('error', () => {
    beforeEach(async () => {
      result = { error: new Error('aw shucks') }
      trendingCausesWrapper = await mountMockedProvider(result, GET_TRENDING_CAUSES_QUERY, <TrendingCauses />, { scope: 'trending' })
    })
    it('displays error div', async() => {
      expect(trendingCausesWrapper.find('div').text()).toEqual('Error')
    })
  })
})
