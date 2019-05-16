import React from 'react'
import Donate from './Donate'

import { shallow } from 'enzyme'

describe('Donate', () => {
  let donateWrapper

  beforeEach(() => {
    donateWrapper = shallow(<Donate />)
  })

  it('has a title how your donation makes a difference', () => {
    expect(donateWrapper.find('h5').text()).toEqual(
      'How your donation makes a difference'
    )
  })

  it('has 4 donation blocks', () => {
    expect(donateWrapper.find('DonateBlock').length).toEqual(4)
  })
})
