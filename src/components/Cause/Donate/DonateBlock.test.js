import React from 'react'
import DonateBlock from './DonateBlock'

import { shallow } from 'enzyme'

describe('<DonateBlock />', () => {
  let donateBlockWrapper
  let props = {
    donationAmount: 50,
    rewardText: "Some limited amount reward you don't want miss."
  }

  beforeEach(() => {
    donateBlockWrapper = shallow(<DonateBlock {...props} />)
  })

  it('has a $50 donation amount', () => {
    expect(donateBlockWrapper.find('div.donation-block-amount').text()).toEqual(
      '$50'
    )
  })

  it('has a description of what the donations meaning for the organization', () => {
    expect(donateBlockWrapper.find('p.donation-block-option').text()).toEqual(
      "Some limited amount reward you don't want miss."
    )
  })

  it('has a donate button to send immediate donation', () => {
    expect(donateBlockWrapper.find('button.donation-button').length).toEqual(1)
  })

  it('has an add to cart button to put donation amount in the cart', () => {
    expect(donateBlockWrapper.find('button.add-to-cart').length).toEqual(1)
  })
})
