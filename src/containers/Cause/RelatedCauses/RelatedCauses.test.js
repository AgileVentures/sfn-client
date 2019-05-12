import React from 'react'
import RelatedCauses from './RelatedCauses'

import { shallow } from 'enzyme'

describe('RelatedCauses', () => {
  let relatedCausesWrapper

  beforeEach(() => {
    relatedCausesWrapper = shallow(<RelatedCauses />)
  })

  it('has 4 related cause components', () => {
    expect(relatedCausesWrapper.find('RelatedCause').length).toEqual(4)
  })
})
