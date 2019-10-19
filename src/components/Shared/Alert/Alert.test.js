import React from 'react'
import Alert from './Alert'

import { shallow } from 'enzyme'

describe('Alert component with props', () => {
  let alertWrapper

  let props = {
    message: 'This is a sample message for a test',
    headline: 'This is an example headline for error'
  }

  beforeEach(() => {
    alertWrapper = shallow(<Alert {...props} />)
  })

  it('has a paragraph for the error message', () => {
    expect(alertWrapper.find('p.alert-message').length).toEqual(1)
  })

  it('has a paragraph with the specified error message', () => {
    expect(alertWrapper.find('p.alert-message').text()).toEqual(
      'This is a sample message for a test'
    )
  })

  it('has a headline for important errors', () => {
    expect(alertWrapper.find('h5.alert-headline').text()).toEqual(
      'This is an example headline for error'
    )
  })
})

describe('Alert component without props', () => {
  let alertWrapper

  beforeEach(() => {
    alertWrapper = shallow(<Alert />)
  })

  it('has a paragraph for the generic error', () => {
    expect(alertWrapper.find('p.alert-message').length).toEqual(1)
  })

  it('generic error message shows up', () => {
    expect(alertWrapper.find('p.alert-message').text()).toEqual(
      'Sorry, something went wrong!'
    )
  })

  it("doesn't render the headline", () => {
    expect(alertWrapper.find('h5.alert-headline').length).toEqual(0)
  })

  it('has a background color by default', () => {
    expect(alertWrapper.find('.no-background').length).toEqual(0)
  })
})
