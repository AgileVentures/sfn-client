import React from 'react'
import MoneyRaised from './MoneyRaised'
import { shallow } from 'enzyme'

describe('<MoneyRaised />', () => {
  let moneyRaisedWrapper
  beforeEach(() => {
    moneyRaisedWrapper = shallow(<MoneyRaised />)
  })

  it('contains the text Money Raised', () => {
    expect(moneyRaisedWrapper.find('h3').text()).toContain('Money Raised')
  })

  it('contains the Chart component', () => {
    expect(moneyRaisedWrapper.find('Chart').length).toEqual(1)
  })
})
