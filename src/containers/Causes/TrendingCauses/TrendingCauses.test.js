import React from 'react'
import { mount } from 'enzyme'
import { MockedProvider } from '@apollo/react-testing'
import { act } from 'react-dom/test-utils'
import { MemoryRouter as Router } from 'react-router-dom'
import TrendingCauses, { GET_TRENDING_CAUSES_QUERY } from './TrendingCauses'

async function mountMockedProvider(result) {
  const mocks = [
    {
      request: {
        query: GET_TRENDING_CAUSES_QUERY,
        variables: { scope: 'trending' }
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
        <TrendingCauses />
      </Router>
    </MockedProvider>)
  act(() => {
    jest.runAllTimers()
  })
  component.update()
  return component
}
describe('<TrendingCauses />', () => {
  let trendingCausesWrapper, result

  beforeEach(async () => {
    result = { data: { causes:
      [{ id: 1, startDate: '2019-01-10', description: 'Awesome Cause 1', endDate: '2019-10-10', name: 'Awesome Cause 1', amountRaised: '5000', targetAmount: '100000', sponsor: 'unicef' }, { id: 2, startDate: '2019-01-10', description: 'Awesome Cause 2', endDate: '2019-10-10', name: 'Awesome Cause 2', amountRaised: '2000', targetAmount: '100000', sponsor: 'unicef' }, { id: 3, startDate: '2019-01-10', description: 'Awesome Cause 3', endDate: '2019-10-10', name: 'Awesome Cause 3', amountRaised: '400', targetAmount: '100000', sponsor: 'who' }, { id: 4, startDate: '2019-01-10', description: 'Awesome Cause 1', endDate: '2019-10-10', name: 'Awesome Cause 4', amountRaised: '2000', targetAmount: '100000', sponsor: 'wfp' }] } }
    trendingCausesWrapper = await mountMockedProvider(result)
  })

  describe('success', () => {
    it("has 'Trending Causes' title", () => {
      expect(trendingCausesWrapper.find('h3').text()).toEqual('Trending causes')
    })

    it('has link to navigate to all trending causes', () => {
      expect(trendingCausesWrapper.find('NavLink').length).toEqual(1)
    })
    describe('CauseCard', () => {
      it('has two cause cards cause card', () => {
        expect(trendingCausesWrapper.find('CauseCard').length).toEqual(2)
      })

      it('first cause card has correct cause name', () => {
        expect(trendingCausesWrapper.find('CauseCard').at(0).find('.cause-card-name').text()).toEqual('Awesome Cause 1')
      })

      it('second cause card has correct cause name', () => {
        expect(trendingCausesWrapper.find('CauseCard').at(1).find('.cause-card-name').text()).toEqual('Awesome Cause 2')
      })
    })
  })

  describe('error', () => {
    beforeEach(async () => {
      result = { error: new Error('aw shucks') }
      trendingCausesWrapper = await mountMockedProvider(result)
    })
    it('displays error div', async() => {
      expect(trendingCausesWrapper.find('div').text()).toEqual('Error')
    })
  })
})
