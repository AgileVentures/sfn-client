import React from 'react'
import ContactUs from './ContactUs'

import { shallow } from 'enzyme'

describe('<ContactUs />', () => {
  let contactUsWrapper

  beforeEach(() => {
    contactUsWrapper = shallow(<ContactUs />)
  })

  it('has text ContactUs', () => {
    expect(contactUsWrapper.find('div').text()).toEqual('ContactUs')
  })
})
