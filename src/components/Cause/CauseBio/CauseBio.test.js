import React from 'react'
import CauseBio from './CauseBio'

import { shallow } from 'enzyme'

describe('CauseBio', () => {
  let causeBioWrapper

  beforeEach(() => {
    causeBioWrapper = shallow(<CauseBio />)
  })

  it('has 2 <CauseBioDetail /> elements', () => {
    expect(causeBioWrapper.find('CauseBioDetail')).toHaveLength(2)
  })

  it('has a <CauseCarousel /> element', () => {
    expect(causeBioWrapper.find('CauseCarousel')).toHaveLength(1)
  })
})
