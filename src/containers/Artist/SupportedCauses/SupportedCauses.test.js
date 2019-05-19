import React from 'react'
import SupportedCauses from './SupportedCauses'
import { shallow } from 'enzyme'

describe('<SupportedCauses />', () => {
  let supportedCausesWrapper

  beforeEach(() => {
    supportedCausesWrapper = shallow(<SupportedCauses />)
  })
  it('contains text Supported Causes', () => {
    expect(supportedCausesWrapper.find('h3').text()).toEqual(
      'Supported Causes'
    )
  })

  it('has a list of 4 Supported Causes', () => {
    expect(supportedCausesWrapper.find('Avatar').length).toEqual(4)
  })

  it('has a list of 4 Supported Causes', () => {
    expect(supportedCausesWrapper.find('li').length).toEqual(4)
  })
})
