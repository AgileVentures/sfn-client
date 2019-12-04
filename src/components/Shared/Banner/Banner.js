import React from 'react'
import PropTypes from 'prop-types'
import Mailchimp from 'react-mailchimp-form'

const Banner = props => {
  if (props.mailchimpForm) {
    const url =
      'https://gmail.us4.list-manage.com/subscribe/post?u=8dcfc510bd2cd443e488230a8&amp;id=cd9c93f61c'

    return (
      <div className="banner white">
        <h3>{props.headline}</h3>
        <p>{props.benefits}</p>
        <Mailchimp
          action={url}
          fields={[
            {
              name: 'EMAIL',
              placeholder: 'Email',
              type: 'email',
              required: true
            }
          ]}
          messages={{
            sending: 'Sending...',
            success: 'Thank you for subscribing!',
            empty: 'Can you please double-check?',
            button: 'Subscribe'
          }}
          className="form-mailchimp"
        />
      </div>
    )
  } else {
    return (
      <div className="banner white">
        <h3>{props.headline}</h3>
        <p>{props.benefits}</p>
        <button>{props.buttonLabel}</button>
      </div>
    )
  }
}

Banner.propTypes = {
  headline: PropTypes.string,
  benefits: PropTypes.string,
  buttonLabel: PropTypes.string,
  mailchimpForm: PropTypes.bool
}

export default Banner
