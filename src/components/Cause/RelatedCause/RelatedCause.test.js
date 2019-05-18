import React from 'react'
import { shallow } from 'enzyme'
import RelatedCause from './RelatedCause'

describe('RelatedCause', () => {
  let relatedCauseWrapper

  beforeEach(() => {
    relatedCauseWrapper = shallow(<RelatedCause />)
  })

  it('has a div with text Deserving cause A', () => {
    expect(relatedCauseWrapper.find('div.white').text()).toEqual(
      'Deserving cause A'
    )
  })

  it('has an Avatar component', () => {
    expect(relatedCauseWrapper.find('Avatar').length).toEqual(1)
  })
})
