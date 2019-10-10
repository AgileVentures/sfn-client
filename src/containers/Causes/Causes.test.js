import React from 'react'
import { mount } from 'enzyme'
import { MockedProvider } from '@apollo/react-testing'
import { act } from 'react-dom/test-utils'
import { MemoryRouter as Router } from 'react-router-dom'
import Causes, { GET_CAUSES_QUERY } from './Causes'

async function mountMockedProvider() {
  const mocks = [
    {
      request: {
        query: GET_CAUSES_QUERY
      },
      result: { data: {
        causes: [{ name: 'Awesome Cause 1', amountRaised: 50, sponsor: 'unicef' }, { name: 'Awesome Cause 2', amountRaised: 50, sponsor: 'unicef' }]
      } }
    }
  ]
  jest.useFakeTimers()
  const component = mount(
    <MockedProvider
      mocks={mocks}
      addTypename={false}
    >
      <Router>
        <Causes />
      </Router>
    </MockedProvider>)
  act(() => {
    jest.runAllTimers()
  })
  component.update()
  return component
}

describe('<Causes />', () => {
  let causesWrapper
  beforeEach(async () => {
    causesWrapper = await mountMockedProvider()
  })

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
