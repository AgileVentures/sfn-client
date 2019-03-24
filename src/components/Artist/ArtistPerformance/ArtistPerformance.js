import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ArtistPerformance extends Component {
  render() {
    return (
      <div className="artist-performance__item">
        <img
          className="artist-performance__item__venue__img"
          src="/images/madison_square_garden.jpg"
          alt="Madison Square Garden NYC"
        />
        <div className="artist-performance__item__venue__details">
          <div className="artist-performance__item__venue__headers">
            <h4 className="artist-performance__item__venue__name">
              Madison Square Garden
            </h4>
            <p className="artist-performance__item__venue__date">
              LIVE SHOW | Recorded 12/02/2019 for Cause A
            </p>
            <p className="artist-performance__item__venue__intro">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting.
            </p>
          </div>
          <div className="artist-performance__item__navigation">
            <Link to="/performances">More info</Link>
            <button>Donate</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ArtistPerformance
