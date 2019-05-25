import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPhone,
  faEnvelope,
  faGlobeAmericas
} from '@fortawesome/free-solid-svg-icons'

import {
  faFacebook,
  faTwitter,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'

library.add(faFacebook, faTwitter, faInstagram)

const ContactUs = () => {
  return (
    <div className="contact-us-wrapper">
      <h5 className="white">Contact us</h5>
      <div className="contact-details">
        <h6>Mrs. Awesome Charity spokesperson</h6>
        <div className="contact-details--item">
          <FontAwesomeIcon className="contact-icon" icon={faPhone} />
          <p>1111 1111</p>
        </div>
        <div className="contact-details--item">
          <FontAwesomeIcon className="contact-icon" icon={faEnvelope} />
          <p>charity.spokesperson@mail.com</p>
        </div>
        <div className="contact-details--item">
          <FontAwesomeIcon className="contact-icon" icon={faGlobeAmericas} />
          <a href="/">Charity Website</a>
        </div>
        <div className="contact-details--socials">
          <FontAwesomeIcon
            className="contact-icon"
            icon={['fab', 'facebook']}
          />
          <FontAwesomeIcon className="contact-icon" icon={['fab', 'twitter']} />
          <FontAwesomeIcon
            className="contact-icon"
            icon={['fab', 'instagram']}
          />
        </div>
      </div>
    </div>
  )
}

export default ContactUs
