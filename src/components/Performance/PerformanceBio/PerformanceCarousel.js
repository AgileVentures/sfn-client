import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'

class PerformanceCarousel extends React.Component {
  state = {
    currentSlide: 0,
    totalSlides: null
  };

  componentDidMount() {
    this.setState({
      totalSlides: document.querySelectorAll('.performance-slide').length
    })
  }

  moveSlide = slide => {
    const slideShowHolder = document.querySelector(
      '.performanceslideshow-holder'
    )
    const leftPosition = -slide * 550 + 'px'

    slideShowHolder.style.left = `${leftPosition}`
  };

  slideCarouselRight = () => {
    const nextSlide = this.state.currentSlide + 1

    if (nextSlide > this.state.totalSlides - 1) {
      this.setState({
        currentSlide: 0
      })
      this.moveSlide(0)
    } else {
      this.setState({
        currentSlide: nextSlide
      })
      this.moveSlide(nextSlide)
    }
  };

  slideCarouselLeft = () => {
    const nextSlide = this.state.currentSlide - 1

    if (nextSlide < 0) {
      this.setState({
        currentSlide: this.state.totalSlides - 1
      })
      this.moveSlide(this.state.totalSlides - 1)
    } else {
      this.setState({
        currentSlide: nextSlide
      })
      this.moveSlide(nextSlide)
    }
  };

  render() {
    return (
      <div className="performance-slideshow">
        <div className="performanceslideshow-holder">
          <div className="performance-slide performance-slide-1" />
          <div className="performance-slide performance-slide-2" />
          <div className="performance-slide performance-slide-3" />
          <div className="performance-slide performance-slide-4" />
        </div>
        <div className="carousel-navigation">
          <button className="prev" onClick={() => this.slideCarouselLeft()}>
            <FontAwesomeIcon
              className="supported-performances-item-list__icon"
              icon={faCaretLeft}
            />
          </button>
          <button className="next" onClick={() => this.slideCarouselRight()}>
            <FontAwesomeIcon
              className="supported-performances-item-list__icon"
              icon={faCaretRight}
            />
          </button>
        </div>
      </div>
    )
  }
}

export default PerformanceCarousel
