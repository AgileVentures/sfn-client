import React from 'react'
import { shallow } from 'enzyme'
import CauseBioDetail from './CauseBioDetail'

describe('<CauseBioDetail/>', () => {
  let causeBioDetailWrapper
  let props = {
    heading: 'Heading',
    content: 'Content',
    daysToGo: 12
  }
  beforeEach(() => {
    causeBioDetailWrapper = shallow(<CauseBioDetail {...props} />)
  })

  it('has <h5> element with text Heading', () => {
    expect(causeBioDetailWrapper.find('h5').text()).toEqual('Heading')
  })

  it('shows how much time left before the cause closes', () => {
    expect(causeBioDetailWrapper.find('.cause-days-left').text()).toEqual(
      ' - 12 more days to go'
    )
  })

  it('has <p> element with text Content', () => {
    expect(
      causeBioDetailWrapper.find('.cause-bio-detail__content').text()
    ).toEqual('Content')
  })
})
