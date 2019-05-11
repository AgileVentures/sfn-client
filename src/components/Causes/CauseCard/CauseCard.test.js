import React from 'react'
import CauseCard from './CauseCard'

import { shallow } from 'enzyme'

describe('CauseCard', () => {
  let causeCardWrapper

  beforeEach(() => {
    causeCardWrapper = shallow(<CauseCard />)
  })

  it('contains an thumbnail image of the cause', () => {
    expect(causeCardWrapper.find('img.cause-thumbnail').length).toEqual(1)
  })

  it('contains the cause title', () => {
    expect(causeCardWrapper.find('h5.cause-card-name').length).toEqual(1)
  })

  it('contains the organizer / manager of the cause', () => {
    expect(causeCardWrapper.find('span.cause-card-owner').length).toEqual(1)
  })

  it('contains the main details around the cause', () => {
    expect(causeCardWrapper.find('div.cause-card-detail').length).toEqual(1)
  })

  it('contains the funds raised', () => {
    expect(causeCardWrapper.find('h4.cause-card-funds').length).toEqual(1)
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
