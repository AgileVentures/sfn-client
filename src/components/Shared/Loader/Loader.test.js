import React from 'react'
import Loader from './Loader'

import { mount } from 'enzyme'

describe('<Loader />', () => {
  let component

  beforeEach(() => {
    component = mount(
      <Loader
        mainText="Main Text"
        subText="Sub Text"
      />
    )
  })

  it('renders main text', () => {
    expect(component.find('.loader--main-text').text()).toEqual('Main Text')
  })

  it('renders subtext', () => {
    expect(component.find('.loader--sub-text').text()).toEqual('Sub Text')
  })

  it('renders a spinner', () => {
    expect(component.find('.loader--icon').hostNodes().length).toEqual(1)
  })
})
