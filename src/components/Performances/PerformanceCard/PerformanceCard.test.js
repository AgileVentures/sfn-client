import React from 'react'
import PerformanceCard from './PerformanceCard'

import { shallow } from 'enzyme'

describe('<PerformanceCard', () => {
  let performanceCardWrapper

  beforeEach(() => {
    performanceCardWrapper = shallow(
      <PerformanceCard performanceTitle="Awesome Test Performance" />
    )
  })

  it('contains an image of the performance', () => {
    expect(
      performanceCardWrapper.find('img.performance-thumbnail').length
    ).toEqual(1)
  })

  it('contains the title of the test performance', () => {
    expect(
      performanceCardWrapper.find('div.performance-text h4').text()
    ).toEqual('Awesome Test Performance')
  })

  it('contains the description of the performance', () => {
    expect(
      performanceCardWrapper.find('p.performance-description').length
    ).toEqual(1)
  })

  it('contains the funds raised', () => {
    expect(
      performanceCardWrapper.find('h5.performance-card-funds').length
    ).toEqual(1)
  })

  it('contains a Learn More button', () => {
    expect(
      performanceCardWrapper.contains(<button>Learn More</button>)
    ).toEqual(true)
  })
})
