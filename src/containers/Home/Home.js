import React, { Component } from 'react'
import Banner from '../../components/Shared/Banner/Banner'

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="home-container__intro">
          <div className="intro-text">
            <h1 className="intro-heading">Drive the change with music</h1>
            <p className="intro-paragraph">
              Sing for Needs is a donation platform, which connects music
              performances with inspiring causes to create change together with
              the fans
            </p>
            <button className="intro-cta">
              Get started with Sing for Needs
            </button>
            <p className="intro-usp body-small">
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
        </section>
        <section className="home-container__registration">
          <h2 className="heading">How to get started?</h2>
          <p className="intro">Choose from the options available below</p>
          <div className="registration-options">
            <div className="registration-option-card">
              <div className="registration-details">
                <img
                  src="/images/user-registration-photo.jpg"
                  alt="A couple at the festival"
                />
                <h4>I'm a fan, music lover</h4>
                <p className="description">
                  I'm looking for the latest music, explore the new and happy to
                  support my favourite artists and helping the cause important
                  to them.
                </p>
              </div>
              <button>Register as a music fan</button>
            </div>
            <div className="registration-option-card">
              <div className="registration-details">
                <img
                  src="/images/artist-registration-photo.jpg"
                  alt="Singer with a microphone representing a musician"
                />
                <h4>I'm a musician</h4>
                <p className="description">
                  I'm looking forward to make positive impact on the world, help
                  the charities to close to my mindset and engage with fans.
                </p>
              </div>
              <button>Register as an artist</button>
            </div>
            <div className="registration-option-card">
              <div className="registration-details">
                <img
                  src="/images/charity-registration-photo.jpg"
                  alt="Woman smiling representing a charity"
                />
                <h4>I'm running a charity</h4>
                <p className="description">
                  I'm looking forward to establish good associations and share a
                  mission with an artist to help growing the tribe around the
                  cause we're supporting.
                </p>
              </div>
              <button>Register as a charity</button>
            </div>
          </div>
        </section>
        <Banner
          headline="Want to stay in touch?"
          benefits="We send regular updates about the recent causes, upcoming artist performances and about Sing for Needs in general"
          buttonLabel="Sign up to newsletter"
        />
      </React.Fragment>
    )
  }
}

export default Home
