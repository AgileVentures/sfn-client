import React from 'react'
import { mount } from 'enzyme'
import { MockedProvider } from '@apollo/react-testing'
import { act } from 'react-dom/test-utils'
import { MemoryRouter as Router } from 'react-router-dom'
import Causes, { GET_CAUSES_QUERY } from './Causes'

async function mountMockedProvider(result) {
  const mocks = [
    {
      request: {
        query: GET_CAUSES_QUERY
      },
      result
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
  let causesWrapper, result
  beforeEach(async () => {
    result = { data: {
      causes: [{ endDate: '2019-10-10', name: 'Awesome Cause 1', amountRaised: '50000', targetAmount: '100000', sponsor: 'unicef' }, { endDate: '2019-10-10', name: 'Awesome Cause 2', amountRaised: '50000', targetAmount: '100000', sponsor: 'unicef' }]
    }
    }
    causesWrapper = await mountMockedProvider(result)
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

  describe('data resolved with error', () => {
    beforeEach(async () => {
      result = { error: new Error('aw shucks') }
      causesWrapper = await mountMockedProvider(result)
    })
    it('displays error div', async() => {
      expect(causesWrapper.find('div').text()).toEqual('Error')
    })
  })
})
