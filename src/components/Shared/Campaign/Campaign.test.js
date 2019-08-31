import React from 'react'
import Campaign from './Campaign'

import { shallow } from 'enzyme'

describe('<Campaign />', () => {
  let campaignWrapper

  let props = {
    causeName: 'Happy Fridays',
    donatedAmount: 2000,
    numberOfDonors: 5,
    daysToGo: 31,
    organization: 'HUMALUPA',
    renderButtons: true
  }

  beforeEach(() => {
    campaignWrapper = shallow(<Campaign {...props} />)
  })

  it('contains the cause title Happy Fridays', () => {
    expect(campaignWrapper.find('div.campaign-title h5').text()).toEqual(
      'Happy Fridays'
    )
  })

  it('contains HUMALUPA as organizer / manager of the cause', () => {
    expect(campaignWrapper.find('span.campaign-owner').text()).toEqual(
      'by HUMALUPA'
    )
  })

  it('contains the main details around the cause', () => {
    expect(campaignWrapper.find('div.campaign-detail').length).toEqual(1)
  })

  it('contains the $5000 funds raised', () => {
    expect(campaignWrapper.find('h4.campaign-funds').text()).toEqual('$2000')
  })

  it('contains the number of donors to the cause', () => {
    expect(
      campaignWrapper.find('span.campaign-number-of-donors').text()
    ).toEqual('raised from 5 donors')
  })

  it('contains the amount of time remaining from the campaign', () => {
    expect(campaignWrapper.find('p.campaign-days-to-go').text()).toEqual(
      '31 more days to go'
    )
  })

  it('contains a donation button', () => {
    expect(campaignWrapper.find('button.donation-button').text()).toEqual(
      '<FontAwesomeIcon />Donate today'
    )
  })

  it('contains a Learn More button', () => {
    expect(
      campaignWrapper.contains(
        <button className="text-link">Learn More</button>
      )
    ).toEqual(true)
  })

  it('doesnt render buttons if renderButtons is false', () => {
    props = {
      causeName: 'Happy Fridays',
      donatedAmount: 2000,
      numberOfDonors: 5,
      daysToGo: 31,
      organization: 'HUMALUPA',
      renderButtons: false
    }

    campaignWrapper = shallow(<Campaign {...props} />)
    expect(campaignWrapper.find('div.donation-buttons').length).toEqual(0)
  })
})
