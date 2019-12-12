import React from 'react'
import { mount } from 'enzyme'
import { MockedProvider } from '@apollo/react-testing'
import { act } from 'react-dom/test-utils'
import { MemoryRouter as Router } from 'react-router-dom'
import TrendingPerformances, {
  GET_TRENDING_PERFORMANCES_QUERY
} from './TrendingPerformances'

async function mountMockedProvider(result) {
  const mocks = [
    {
      request: {
        query: GET_TRENDING_PERFORMANCES_QUERY
      },
      result
    }
  ]
  jest.useFakeTimers()
  const component = mount(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Router>
        <TrendingPerformances />
      </Router>
    </MockedProvider>
  )
  act(() => {
    jest.runAllTimers()
  })
  component.update()
  return component
}

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
    trendingPerformancesWrapper = await mountMockedProvider(data)
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
          trendingPerformancesWrapper = await mountMockedProvider(data)
        })

        it('has 2 Empty cards', () => {
          expect(trendingPerformancesWrapper.find('EmptyCard').length).toEqual(2)
        })
      })
    })
  })

  describe('error', () => {
    let result
    beforeEach(async () => {
      result = { error: new Error('aw shucks') }
      trendingPerformancesWrapper = await mountMockedProvider(result)
    })
    it('displays error div', () => {
      expect(trendingPerformancesWrapper.find('div').text()).toEqual('Error')
    })
  })
})
