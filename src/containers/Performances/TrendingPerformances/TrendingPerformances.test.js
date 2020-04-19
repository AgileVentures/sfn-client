import React from 'react'
import TrendingPerformances, {
  GET_TRENDING_PERFORMANCES_QUERY
} from './TrendingPerformances'
import { mountMockedProvider } from '../../support/tests/mountMockedProvider'

describe('<TrendingPerformances />', () => {
  let trendingPerformancesWrapper, data

  beforeEach(async () => {
    data = {
      data: {
        performances: [
          {
            id: 1,
            amountRaised: 5000,
            detail: 'Awesome Performance 1',
            isFeatured: true
          },
          {
            id: 2,
            amountRaised: 5000,
            detail: 'Awesome Performance 2',
            isFeatured: false
          },
          {
            id: 3,
            amountRaised: 2333,
            detail: 'Awesome Performance 3',
            isFeatured: false
          }
        ]
      }
    }
    trendingPerformancesWrapper = await mountMockedProvider(data, GET_TRENDING_PERFORMANCES_QUERY, <TrendingPerformances />)
  })
  describe('success', () => {
    it("has 'Trending Performances' title", () => {
      expect(trendingPerformancesWrapper.find('h1').text()).toEqual(
        'Trending Performances'
      )
    })

    describe('PerformanceCard', () => {
      describe('has result', () => {
        it('has 3 performance cards', () => {
          expect(trendingPerformancesWrapper.find('PerformanceCard').length).toEqual(
            3
          )
        })

        it('first performance card has correct description', () => {
          expect(trendingPerformancesWrapper.find('PerformanceCard').at(0).find('.performance-text p').text()).toEqual('Awesome Performance 1')
        })

        it('second cause card has correct cause name', () => {
          expect(trendingPerformancesWrapper.find('PerformanceCard').at(1).find('.performance-text p').text()).toEqual('Awesome Performance 2')
        })
        it('third cause card has correct cause name', () => {
          expect(trendingPerformancesWrapper.find('PerformanceCard').at(2).find('.performance-text p').text()).toEqual('Awesome Performance 3')
        })
      })

      describe('empty response', () => {
        beforeEach(async() => {
          data = {
            data: {
              performances: []
            }
          }
          trendingPerformancesWrapper = await mountMockedProvider(data, GET_TRENDING_PERFORMANCES_QUERY, <TrendingPerformances />)
        })

        it('has 1 Empty cards', () => {
          expect(trendingPerformancesWrapper.find('EmptyCard').length).toEqual(1)
        })
      })
    })
  })

  describe('error', () => {
    let result
    beforeEach(async () => {
      result = { error: new Error('aw shucks') }
      trendingPerformancesWrapper = await mountMockedProvider(result, GET_TRENDING_PERFORMANCES_QUERY, <TrendingPerformances />)
    })
    it('displays error div', () => {
      expect(trendingPerformancesWrapper.find('div').text()).toEqual('Error')
    })
  })
})
