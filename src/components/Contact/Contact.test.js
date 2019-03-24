import React from 'react'
import Contact from './ContactContainer'
import { shallow } from 'enzyme'

describe('<ContactContainer/>', () => {
  it('has text ContactContainer', () => {
    const contactContainerWrapper = shallow(<Contact />)
    expect(contactContainerWrapper.text()).toEqual('ContactContainer')
  })
})
