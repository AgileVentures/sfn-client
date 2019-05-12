import React from 'react'
import App from './App'
import { shallow } from 'enzyme'

describe('<App />', () => {
  it('contains a Layout component', () => {
    const appWrapper = shallow(<App />)
    expect(appWrapper.find('Layout').length).toEqual(1)
  })
})
