import React from 'react'
import Performance from './Performance'
import { shallow } from 'enzyme'

// Need at least 1 test to pass Travis CI
describe('<Performance />', () => {
  let performanceWrapper

  beforeEach(() => {
    performanceWrapper = shallow(<Performance />)
  })

  it('contains one PerformanceBio component', () => {
    expect(performanceWrapper.find('PerformanceBio').length).toEqual(1)
  })

  it('contains a Campaign component', () => {
    expect(performanceWrapper.find('Campaign').length).toEqual(1)
  })

  it('contains a Contact us component', () => {
    expect(performanceWrapper.find('ContactUs').length).toEqual(1)
  })
})
