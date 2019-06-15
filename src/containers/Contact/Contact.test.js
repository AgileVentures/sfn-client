import React from 'react'
import Contact from './Contact'
import { shallow } from 'enzyme'

describe('<Contact/>', () => {
  it('has text Contact', () => {
    const contactWrapper = shallow(<Contact />)
    expect(contactWrapper.find('h1').text()).toEqual('Contact')
  })
})
