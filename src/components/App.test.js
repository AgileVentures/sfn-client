import React from 'react'
import App from './App'
import { shallow } from 'enzyme'

describe('<App />', () => {
  it('contains a Header component', () => {
    const appWrapper = shallow(<App />)
    expect(appWrapper.find('Header').length).toEqual(1)
  })
})
