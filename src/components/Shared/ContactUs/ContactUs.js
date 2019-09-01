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

import PropTypes from 'prop-types'

library.add(faFacebook, faTwitter, faInstagram)

const ContactUs = props => {
  return (
    <div className="contact-us-wrapper">
      <h5 className="white">Contact us</h5>
      <div className="contact-details">
        <h6>{props.contactPersonName}</h6>
        <div className="contact-details--item">
          <FontAwesomeIcon className="contact-icon" icon={faPhone} />
          <p>{props.contactPhoneNumber}</p>
        </div>
        <div className="contact-details--item">
          <FontAwesomeIcon className="contact-icon" icon={faEnvelope} />
          <p>{props.contactEmail}</p>
        </div>
        <div className="contact-details--item">
          <FontAwesomeIcon className="contact-icon" icon={faGlobeAmericas} />
          <a
            target="_blank"
            href={`https://${props.websiteURL}`}
            rel="noopener noreferrer"
          >
            Website
          </a>
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

ContactUs.propTypes = {
  contactPersonName: PropTypes.string.isRequired,
  contactPhoneNumber: PropTypes.string,
  contactEmail: PropTypes.string,
  websiteURL: PropTypes.string.isRequired
}

export default ContactUs
