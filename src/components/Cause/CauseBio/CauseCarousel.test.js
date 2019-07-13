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

  afterEach(() => {
    jest.clearAllMocks()
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

  it('moves slide left when previous button is clicked', () => {
    causeCarouselWrapper.find('.prev').simulate('click')
    expect(causeCarouselWrapper.state().currentSlide).toEqual(-1)
  })

  it('moves slide right when next button is clicked', () => {
    causeCarouselWrapper.setState({ currentSlide: 0, totalSlides: 4 })
    causeCarouselWrapper.find('.next').simulate('click')
    expect(causeCarouselWrapper.state().currentSlide).toEqual(1)
  })

  it('resets slide to 0 when next is clicked at the end of the slide stack', () => {
    causeCarouselWrapper.setState({ currentSlide: 2, totalSlides: 2 })
    causeCarouselWrapper.find('.next').simulate('click')
    expect(causeCarouselWrapper.state().currentSlide).toEqual(0)
  })

  it('moves slide to the left when prev is clicked and current slide is not the first slide', () => {
    causeCarouselWrapper.setState({ currentSlide: 2, totalSlides: 2 })
    causeCarouselWrapper.find('.prev').simulate('click')
    expect(causeCarouselWrapper.state().currentSlide).toEqual(1)
  })
})
