import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="intro-text">
          <h1 className="intro-heading">Drive the change with music</h1>
          <p className="intro-paragraph">
            Sing for Needs is a donation platform, which connects music
            performances with inspiring causes to create change together with
            the fans
          </p>
          <button className="intro-cta">Get started with Sing for Needs</button>
          <p className="intro-usp">
            Join over 100,000 artists, causes and changemakers
          </p>
        </div>
        <div className="intro-visuals">
          <img
            id="image-1"
            src="images/polaroid-sing-for-needs-1.jpg"
            alt="Singer on the chair -- from Unsplash.com"
          />
          <img
            id="image-2"
            src="images/polaroid-sing-for-needs-2.jpg"
            alt="Singer on the chair -- from Unsplash.com"
          />
          <img
            id="image-3"
            src="images/polaroid-sing-for-needs-3.jpg"
            alt="Singer on the chair -- from Unsplash.com"
          />
        </div>
      </div>
    )
  }
}

export default Home
