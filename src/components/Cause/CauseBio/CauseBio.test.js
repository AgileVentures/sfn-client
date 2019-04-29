import React from 'react'
import CauseBio from './CauseBio'

import { shallow } from 'enzyme'

describe('CauseBio', () => {
  let causeBioWrapper

  beforeEach(() => {
    causeBioWrapper = shallow(<CauseBio />)
  })

  it('has text CauseBio', () => {
    expect(causeBioWrapper.find('div').text()).toEqual('CauseBio')
  })
})
