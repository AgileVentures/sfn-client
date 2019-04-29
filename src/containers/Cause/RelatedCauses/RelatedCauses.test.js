import React from 'react'
import RelatedCauses from './RelatedCauses'

import { shallow } from 'enzyme'

describe('RelatedCauses', () => {
  let relatedCausesWrapper

  beforeEach(() => {
    relatedCausesWrapper = shallow(<RelatedCauses />)
  })

  it('has text RelatedCauses', () => {
    expect(relatedCausesWrapper.find('div').text()).toEqual('RelatedCauses')
  })
})
