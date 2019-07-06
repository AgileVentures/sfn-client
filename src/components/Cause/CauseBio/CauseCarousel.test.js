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

  it('calls slideCarouselRight when next is clicked', () => {
    Object.defineProperty(global, 'document', {})
    let slideCarouselRight = jest.fn()
    causeCarouselWrapper.find('.next').simulate('click')
    expect(slideCarouselRight()).toHaveBeenCalledTimes(1)
  })

  it('calls slideCarouselLeft when next is clicked', () => {
    Object.defineProperty(global, 'document', {})
    let slideCarouselLeft = jest.fn()
    causeCarouselWrapper.find('.prev').simulate('click')
    expect(slideCarouselLeft()).toHaveBeenCalledTimes(1)
  })
})
