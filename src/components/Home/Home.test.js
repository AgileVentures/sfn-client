import React from 'react'
import Home from './HomeContainer'
import { shallow } from 'enzyme'

describe('<HomeContainer />', () => {
  it('contains the text HomeContainer', () => {
    const homeWrapper = shallow(<Home />)
    expect(homeWrapper.text()).toEqual('HomeContainer')
  })
})
