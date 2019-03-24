import React from 'react'
import Performance from './PerformanceContainer'
import { shallow } from 'enzyme'

describe('<PerformanceContainer />', () => {
  it('contains the text PerformanceContainer', () => {
    const performanceWrapper = shallow(<Performance />)
    expect(performanceWrapper.text()).toEqual('PerformanceContainer')
  })
})
