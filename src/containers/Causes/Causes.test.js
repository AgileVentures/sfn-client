import React from 'react'
import { mount } from 'enzyme'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { MockedProvider } from '@apollo/react-testing'
import Causes, { GET_CAUSES_QUERY } from './Causes'

describe('<Causes />', () => {
  let causesWrapper
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
  beforeEach(() => {
    causesWrapper = mount(<MockedProvider mocks={mocks} addTypename={false} cache={new InMemoryCache({ })}><Causes /></MockedProvider>)
  })

  it.only('contains 1 Trending causes container', async() => {
    await expect(causesWrapper.find('TrendingCauses').length).toEqual(1)
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
