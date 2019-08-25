import React from 'react'
import PerformanceBio from './PerformanceBio'

import { shallow } from 'enzyme'

describe('<PerformanceBio />', () => {
  let performanceBioWrapper

  beforeEach(() => {
    performanceBioWrapper = shallow(<PerformanceBio />)
  })

  it('has the text PerformanceBio written', () => {
    expect(performanceBioWrapper.text()).toEqual('PerformanceBio')
  })
})
