import React from 'react'
import About from './AboutContainer'
import { shallow } from 'enzyme'

describe('<AboutContainer />', () => {
  it('displays the text AboutContainer', () => {
    const aboutWrapper = shallow(<About />)
    expect(aboutWrapper.find('div').text()).toEqual('AboutContainer')
  })
})
