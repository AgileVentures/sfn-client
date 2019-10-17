import React from 'react'
import ContactDetails from '../../components/Contact/ContactDetails/ContactDetails'
import ContactForm from '../../components/Contact/ContactForm/ContactForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="white">Contact</h1>
      <h4 className="white">
        We'd
        <FontAwesomeIcon className="heart-icon" icon={faHeart} />
        to help!
      </h4>
      <div className="contact-info-main-block">
        <ContactDetails />
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact
