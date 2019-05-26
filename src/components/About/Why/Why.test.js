import React from 'react'
import Why from './Why'
import { shallow } from 'enzyme'

describe('<Why />', () => {
  let whyWrapper
  beforeEach(() => {
    whyWrapper = shallow(<Why />)
  })

  it('has the title why give with us', () => {
    expect(whyWrapper.find('h3').text()).toEqual('Why give with us?')
  })

  it('has 3 really good reasons why people should donate with us', () => {
    expect(whyWrapper.find('div.why-description').length).toEqual(3)
  })
})
