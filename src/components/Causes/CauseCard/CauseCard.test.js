import React from 'react'
import CauseCard from './CauseCard'

import { shallow } from 'enzyme'

describe('<CauseCard />', () => {
  let causeCardWrapper

  let props = {
    key: 'Happy Fridays',
    causeName: 'Happy Fridays',
    donatedAmount: 2000,
    targetAmount: 5000,
    numberOfDonors: 5,
    daysToGo: '31 days',
    organization: 'HUMALUPA'
  }

  beforeEach(() => {
    causeCardWrapper = shallow(<CauseCard {...props} />)
  })

  it('contains an thumbnail image of the cause', () => {
    expect(causeCardWrapper.find('img.cause-thumbnail').length).toEqual(1)
  })

  it('contains the cause title Happy Fridays', () => {
    expect(causeCardWrapper.find('h5.cause-card-name').text()).toEqual(
      'Happy Fridays'
    )
  })

  it('contains HUMALUPA as organizer / manager of the cause', () => {
    expect(causeCardWrapper.find('span.cause-card-owner').text()).toEqual(
      'by HUMALUPA'
    )
  })

  it('contains the main details around the cause', () => {
    expect(causeCardWrapper.find('div.cause-card-detail').length).toEqual(1)
  })

  it('contains the $2000 funds raised', () => {
    expect(causeCardWrapper.find('h4.cause-card-funds').text()).toEqual(
      '$2000'
    )
  })

  it('contains the number of donors to the cause', () => {
    expect(
      causeCardWrapper.find('span.cause-card-number-of-donors').text()
    ).toEqual('raised from 5 donors')
  })

  it('contains the amount of time remaining from the campaign', () => {
    expect(causeCardWrapper.find('p.cause-card-days-to-go').text()).toEqual(
      '31 days to go'
    )
  })

  it('contains a donation button', () => {
    expect(causeCardWrapper.contains(<button>Donate today</button>)).toEqual(
      true
    )
  })

  it('contains a Learn More button', () => {
    expect(
      causeCardWrapper.contains(
        <button className="text-link">Learn More</button>
      )
    ).toEqual(true)
  })
})
