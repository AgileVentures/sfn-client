import React from 'react'
import { mount } from 'enzyme'
import { MockedProvider } from '@apollo/react-testing'
import { act } from 'react-dom/test-utils'
import { MemoryRouter as Router } from 'react-router-dom'
import CampaignsEndingSoon, { GET_CAUSES_ENDING_SOON_QUERY } from './CampaignsEndingSoon'

async function mountMockedProvider(result) {
  const mocks = [
    {
      request: {
        query: GET_CAUSES_ENDING_SOON_QUERY,
        variables: { 'scope': 'ending_soon' }
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
        <CampaignsEndingSoon />
      </Router>
    </MockedProvider>)
  act(() => {
    jest.runAllTimers()
  })
  component.update()
  return component
}

describe('<CampaignsEndingSoon />', () => {
  let campaignsEndingSoonWrapper, data
  beforeEach(async() => {
    data = {
      'data': {
        'causes': [
          {
            amountRaised: 5000,
            endDate: new Date('2019-12-12'),
            id: 3,
            name: 'Awesome Cause 1',
            targetAmount: 1000
          },
          {
            amountRaised: 5000,
            endDate: new Date('2019-12-18'),
            id: 4,
            name: 'Awesome Cause 2',
            targetAmount: 1000
          }
        ]
      }
    }
    campaignsEndingSoonWrapper = await mountMockedProvider(data)
  })

  it("has 'Campaign Ending Soon' title", () => {
    expect(campaignsEndingSoonWrapper.find('h3').text()).toEqual(
      'Campaigns ending soon'
    )
  })

  it('has 2 campaign cards that end soon showing underneath', () => {
    expect(campaignsEndingSoonWrapper.find('CauseCard').length).toEqual(2)
  })

  it('has link to navigate to all ending causes', () => {
    expect(campaignsEndingSoonWrapper.find('NavLink').length).toEqual(1)
  })

  describe('CauseCard', () => {
    it('has two cause cards cause card', () => {
      expect(campaignsEndingSoonWrapper.find('CauseCard').length).toEqual(2)
    })

    it('first cause card has correct cause name', () => {
      expect(campaignsEndingSoonWrapper.find('CauseCard').at(0).find('.cause-card-name').text()).toEqual('Awesome Cause 1')
    })

    it('second cause card has correct cause name', () => {
      expect(campaignsEndingSoonWrapper.find('CauseCard').at(1).find('.cause-card-name').text()).toEqual('Awesome Cause 2')
    })
  })
})
