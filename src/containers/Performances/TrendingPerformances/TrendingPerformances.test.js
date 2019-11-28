import React from 'react'
import TrendingPerformances, {
  GET_TRENDING_PERFORMANCES_QUERY
} from './TrendingPerformances'
import { mount } from 'enzyme'
import { MockedProvider } from '@apollo/react-testing'
import { act } from 'react-dom/test-utils'
import { MemoryRouter as Router } from 'react-router-dom'

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
            description: 'Awesome Performance 1'
          },
          {
            id: 2,
            amountRaised: 5000,
            description: 'Awesome Performance 2'
          }
        ]
      }
    }
    trendingPerformancesWrapper = await mountMockedProvider(data)
  })

  it("has 'Trending Performances' title", () => {
    expect(trendingPerformancesWrapper.find('h1').text()).toEqual(
      'Trending Performances'
    )
  })

  it('has 3 performances featured in the top section', () => {
    expect(trendingPerformancesWrapper.find('PerformanceCard').length).toEqual(
      2
    )
  })
})
