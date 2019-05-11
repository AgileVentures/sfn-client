import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'

class CauseCarousel extends React.Component {
  state = {
    currentSlide: 0,
    totalSlides: null
  };

  componentDidMount() {
    this.setState({
      totalSlides: document.querySelectorAll('.cause-slide').length
    })
  }

  moveSlide = slide => {
    const slideShowHolder = document.querySelector('.causeslideshow-holder')
    const leftPosition = -slide * 500 + 'px'

    slideShowHolder.style.left = `${leftPosition}`
  };

  slideCarouselRight = () => {
    this.setState({
      currentSlide: this.state.currentSlide + 1
    })

    if (this.state.currentSlide >= this.state.totalSlides) {
      this.setState({
        currentSlide: 0
      })
    }

    this.moveSlide(this.state.currentSlide)
  };

  slideCarouselLeft = () => {
    this.setState({
      currentSlide: this.state.currentSlide - 1
    })

    if (this.state.currentSlide < 0) {
      this.setState({
        currentSlide: this.state.totalSlides - 1
      })
    }

    this.moveSlide(this.state.currentSlide)
  };

  render() {
    return (
      <div className="cause-slideshow">
        <div className="causeslideshow-holder">
          <div className="cause-slide cause-slide-1" />
          <div className="cause-slide cause-slide-2" />
          <div className="cause-slide cause-slide-3" />
          <div className="cause-slide cause-slide-4" />
        </div>
        <div className="carousel-navigation">
          <button className="prev" onClick={() => this.slideCarouselLeft()}>
            <FontAwesomeIcon
              className="supported-causes-item-list__icon"
              icon={faCaretLeft}
            />
          </button>
          <button className="next" onClick={() => this.slideCarouselRight()}>
            <FontAwesomeIcon
              className="supported-causes-item-list__icon"
              icon={faCaretRight}
            />
          </button>
        </div>
      </div>
    )
  }
}

export default CauseCarousel
