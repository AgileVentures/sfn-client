import React from 'react'
import PerformanceCarousel from './PerformanceCarousel'

import { mount } from 'enzyme'

describe('<PerformanceCarousel />', () => {
  let performanceCarouselWrapper
  let querySelector

  beforeEach(() => {
    performanceCarouselWrapper = mount(<PerformanceCarousel />)
    querySelector = jest.fn().mockReturnValue({ style: {} })
    Object.defineProperty(global.document, 'querySelector', {
      writable: true,
      value: querySelector
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('has 4 images rendered within the carousel', () => {
    expect(performanceCarouselWrapper.find('.performance-slide')).toHaveLength(
      4
    )
  })

  it('has a button to move the carousel left', () => {
    expect(performanceCarouselWrapper.find('.prev')).toHaveLength(1)
  })

  it('has a button to move the carousel right', () => {
    expect(performanceCarouselWrapper.find('.next')).toHaveLength(1)
  })

  it('calls moveSlide when next is clicked', () => {
    performanceCarouselWrapper.find('.next').simulate('click')
    expect(querySelector).toHaveBeenCalledTimes(1)
    expect(querySelector).toHaveBeenCalledWith('.performanceslideshow-holder')
  })

  it('calls slideCarouselLeft when previous is clicked', () => {
    performanceCarouselWrapper.find('.prev').simulate('click')
    expect(querySelector).toHaveBeenCalledTimes(1)
    expect(querySelector).toHaveBeenCalledWith('.performanceslideshow-holder')
  })

  it('moves slide left when previous button is clicked', () => {
    performanceCarouselWrapper.find('.prev').simulate('click')
    expect(performanceCarouselWrapper.state().currentSlide).toEqual(-1)
  })

  it('moves slide right when next button is clicked', () => {
    performanceCarouselWrapper.setState({ currentSlide: 0, totalSlides: 4 })
    performanceCarouselWrapper.find('.next').simulate('click')
    expect(performanceCarouselWrapper.state().currentSlide).toEqual(1)
  })

  it('resets slide to 0 when next is clicked at the end of the slide stack', () => {
    performanceCarouselWrapper.setState({ currentSlide: 2, totalSlides: 2 })
    performanceCarouselWrapper.find('.next').simulate('click')
    expect(performanceCarouselWrapper.state().currentSlide).toEqual(0)
  })

  it('moves slide to the left when prev is clicked and current slide is not the first slide', () => {
    performanceCarouselWrapper.setState({ currentSlide: 2, totalSlides: 2 })
    performanceCarouselWrapper.find('.prev').simulate('click')
    expect(performanceCarouselWrapper.state().currentSlide).toEqual(1)
  })
})
