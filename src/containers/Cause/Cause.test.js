import React from 'react'
import Cause from './Cause'
import { shallow } from 'enzyme'

// Need at least 1 test to pass Travis CI
describe('<Cause />', () => {
  let causeWrapper

  beforeEach(() => {
    causeWrapper = shallow(<Cause />)
  })

  it('contains CauseBio component', () => {
    expect(causeWrapper.find('CauseBio').length).toEqual(1)
  })
})
