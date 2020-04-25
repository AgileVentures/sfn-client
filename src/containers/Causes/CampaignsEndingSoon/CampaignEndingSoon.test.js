import React from 'react'
import CampaignsEndingSoon, {
  GET_CAUSES_ENDING_SOON_QUERY
} from './CampaignsEndingSoon'
import { mountMockedProvider } from '../../support/tests/mountMockedProvider'

describe('<CampaignsEndingSoon />', () => {
  let campaignsEndingSoonWrapper, data
  beforeEach(async () => {
    data = {
      data: {
        causes: [
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
    campaignsEndingSoonWrapper = await mountMockedProvider(data, GET_CAUSES_ENDING_SOON_QUERY, <CampaignsEndingSoon />, { scope: 'ending_soon' })
  })

  describe('success', () => {
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
        expect(
          campaignsEndingSoonWrapper
            .find('CauseCard')
            .at(0)
            .find('.cause-card-name')
            .text()
        ).toEqual('Awesome Cause 1')
      })

      it('second cause card has correct cause name', () => {
        expect(
          campaignsEndingSoonWrapper
            .find('CauseCard')
            .at(1)
            .find('.cause-card-name')
            .text()
        ).toEqual('Awesome Cause 2')
      })
    })

    describe('empty response', () => {
      beforeEach(async() => {
        data = { 'data': { 'causes': [] } }
        campaignsEndingSoonWrapper = await mountMockedProvider(data, GET_CAUSES_ENDING_SOON_QUERY, <CampaignsEndingSoon />, { scope: 'ending_soon' })
      })

      it('displays 2 EmptyCard components', () => {
        expect(campaignsEndingSoonWrapper.find('EmptyCard').length).toEqual(2)
      })
    })
  })

  describe('error', () => {
    let result
    beforeEach(async () => {
      result = { error: new Error('aw shucks') }
      campaignsEndingSoonWrapper = await mountMockedProvider(result, GET_CAUSES_ENDING_SOON_QUERY, <CampaignsEndingSoon />)
    })
    it('displays error div', () => {
      expect(campaignsEndingSoonWrapper.find('div').text()).toEqual('Error')
    })
  })
})
