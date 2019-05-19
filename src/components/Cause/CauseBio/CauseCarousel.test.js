import React from 'react'
import CauseCarousel from './CauseCarousel'

import { shallow } from 'enzyme'

describe('<CauseCarousel />', () => {
  let causeCarouselWrapper

  beforeEach(() => {
    causeCarouselWrapper = shallow(<CauseCarousel />)
  })

  it('has 4 images rendered within the carousel', () => {
    expect(causeCarouselWrapper.find('.cause-slide')).toHaveLength(4)
  })

  it('has a button to move the carousel left', () => {
    expect(causeCarouselWrapper.find('.prev')).toHaveLength(1)
  })

  it('has a button to move the carousel right', () => {
    expect(causeCarouselWrapper.find('.next')).toHaveLength(1)
  })
})
