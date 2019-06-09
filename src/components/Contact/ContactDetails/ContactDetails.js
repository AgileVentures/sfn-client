import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons'

import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faSpotify
} from '@fortawesome/free-brands-svg-icons'

library.add(faFacebook, faTwitter, faInstagram, faYoutube, faSpotify)

const ContactDetails = () => {
  return (
    <div className="contact-details-wrapper">
      <div className="contact-details">
        <div className="contact-details--item">
          <FontAwesomeIcon className="contact-icon" icon={faPhone} />
          <p>What's the phone number of Sing for Needs?</p>
        </div>
        <div className="contact-details--item">
          <FontAwesomeIcon className="contact-icon" icon={faEnvelope} />
          <p>What's the email address of Sing for Needs?</p>
        </div>
        <div className="contact-details--item">
          <FontAwesomeIcon className="contact-icon" icon={faMapMarkerAlt} />
          <a href="/">The location of Sing for Needs goes here</a>
        </div>
        <div className="contact-details--socials">
          <FontAwesomeIcon className="social-icon" icon={['fab', 'facebook']} />
          <FontAwesomeIcon className="social-icon" icon={['fab', 'twitter']} />
          <FontAwesomeIcon
            className="social-icon"
            icon={['fab', 'instagram']}
          />
          <FontAwesomeIcon className="social-icon" icon={['fab', 'youtube']} />
          <FontAwesomeIcon className="social-icon" icon={['fab', 'spotify']} />
        </div>
      </div>
    </div>
  )
}

export default ContactDetails
