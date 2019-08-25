import React from 'react'
import { shallow } from 'enzyme'
import PerformanceBioDetail from './PerformanceBioDetail'

describe('<PerformanceBioDetail/>', () => {
  let performanceBioDetailWrapper
  let props = {
    heading: 'Heading',
    content: 'Content'
  }
  beforeEach(() => {
    performanceBioDetailWrapper = shallow(<PerformanceBioDetail {...props} />)
  })

  it('has <h5> element with text Heading', () => {
    expect(performanceBioDetailWrapper.find('h5').text()).toEqual('Heading')
  })

  it('has <p> element with text Content', () => {
    expect(performanceBioDetailWrapper.find('p').text()).toEqual('Content')
  })
})
