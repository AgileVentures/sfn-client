import React from 'react'
import PerformanceBio from './PerformanceBio'

import { shallow } from 'enzyme'

describe('<PerformanceBio />', () => {
  let performanceBioWrapper

  beforeEach(() => {
    performanceBioWrapper = shallow(<PerformanceBio />)
  })

  it('has a <PerformanceCarousel /> element', () => {
    expect(performanceBioWrapper.find('PerformanceCarousel')).toHaveLength(1)
  })
})
