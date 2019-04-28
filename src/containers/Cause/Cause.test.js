import React from 'react'
import Cause from './Cause'
import { shallow } from 'enzyme'

// Need at least 1 test to pass Travis CI
describe('<Cause />', () => {
  let causeWrapper

  beforeEach(() => {
    causeWrapper = shallow(<Cause />)
  })

  it('contains CauseBio component', () => {
    expect(causeWrapper.find('CauseBio').length).toEqual(1)
  })

  it('contains Donate component', () => {
    expect(causeWrapper.find('Donate').length).toEqual(1)
  })

  it('contains Campaign component', () => {
    expect(causeWrapper.find('Campaign').length).toEqual(1)
  })

  it('contains ContactUs component', () => {
    expect(causeWrapper.find('ContactUs').length).toEqual(1)
  })

  it('contains SupportingArtists component', () => {
    expect(causeWrapper.find('SupportingArtists').length).toEqual(1)
  })

  it('contains RelatedCauses component', () => {
    expect(causeWrapper.find('RelatedCauses').length).toEqual(1)
  })

  it('contains RecentDonors component', () => {
    expect(causeWrapper.find('RecentDonors').length).toEqual(1)
  })
})
