import React from 'react'
import CauseCarousel from './CauseCarousel'

import { mount } from 'enzyme'

describe('<CauseCarousel />', () => {
  let causeCarouselWrapper
  let querySelector

  beforeEach(() => {
    causeCarouselWrapper = mount(<CauseCarousel />)
    querySelector = jest.fn().mockReturnValue({ style: {} })
    Object.defineProperty(global.document, 'querySelector', { writable: true, value: querySelector })
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

  it('calls moveSlide when next is clicked', () => {
    causeCarouselWrapper.find('.next').simulate('click')
    expect(querySelector).toHaveBeenCalledTimes(1)
    expect(querySelector).toHaveBeenCalledWith('.causeslideshow-holder')
  })

  it('calls slideCarouselLeft when previous is clicked', () => {
    causeCarouselWrapper.find('.prev').simulate('click')
    expect(querySelector).toHaveBeenCalledTimes(1)
    expect(querySelector).toHaveBeenCalledWith('.causeslideshow-holder')
  })
})
