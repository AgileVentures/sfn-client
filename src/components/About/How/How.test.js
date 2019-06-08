import React from 'react'
import How from './How'
import { shallow } from 'enzyme'

describe('<How />', () => {
  let howWrapper
  beforeEach(() => {
    howWrapper = shallow(<How />)
  })

  it('has the title how it works', () => {
    expect(howWrapper.find('h3').text()).toEqual('How it works?')
  })

  it('has 4 sections within the process to describe each', () => {
    expect(howWrapper.find('div.how-process-item').length).toEqual(4)
  })
})
