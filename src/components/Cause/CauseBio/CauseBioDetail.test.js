import React from 'react'
import { shallow } from 'enzyme'
import CauseBioDetail from './CauseBioDetail'

describe('<CauseBioDetail/>', () => {
  let causeBioDetailWrapper
  beforeEach(() => {
    causeBioDetailWrapper = shallow(<CauseBioDetail />)
  })

  it('has <h5> element', () => {
    expect(causeBioDetailWrapper.find('h5')).toHaveLength(1)
  })

  it('has <p> element', () => {
    expect(causeBioDetailWrapper.find('p')).toHaveLength(1)
  })
})
