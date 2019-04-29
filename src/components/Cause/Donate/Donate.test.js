import React from 'react'
import Donate from './Donate'

import { shallow } from 'enzyme'

describe('Donate', () => {
  let donateWrapper

  beforeEach(() => {
    donateWrapper = shallow(<Donate />)
  })

  it('has text Donate', () => {
    expect(donateWrapper.find('div').text()).toEqual('Donate')
  })
})
