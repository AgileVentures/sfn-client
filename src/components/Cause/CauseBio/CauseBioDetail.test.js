import React from 'react'
import { shallow } from 'enzyme'
import CauseBioDetail from './CauseBioDetail'

describe('<CauseBioDetail/>', () => {
  let causeBioDetailWrapper
  let props = {
    heading: 'Heading',
    content: 'Content'
  }
  beforeEach(() => {
    causeBioDetailWrapper = shallow(<CauseBioDetail {...props} />)
  })

  it('has <h5> element with text Heading', () => {
    expect(causeBioDetailWrapper.find('h5').text()).toEqual('Heading')
  })

  it('has <p> element with text Content', () => {
    expect(causeBioDetailWrapper.find('p').text()).toEqual('Content')
  })
})
