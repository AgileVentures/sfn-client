import React from 'react'
import { Field, reduxForm } from 'redux-form'
import PropTypes from 'prop-types'

class ContactForm extends React.Component {
  renderInput = ({ input, label, placeholder, meta }) => {
    const className = `field${meta.error && meta.touched ? ' error' : ''}`

    return (
      <div className={className}>
        <label className="white label-normal">{label}</label>
        <input {...input} placeholder={placeholder} />
        <div>{this.renderError(meta)}</div>
      </div>
    )
  };

  renderTextArea = ({ input, label, placeholder, rows, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`

    return (
      <div className={className}>
        <label className="white label-normal">{label}</label>
        <textarea rows={rows} {...input} placeholder={placeholder} />
        <div>{this.renderError(meta)}</div>
      </div>
    )
  };

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )
    }
  }

  onSubmit = formValues => {
    this.props.onSubmit(formValues)
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit} className="contact-form-wrapper">
        <Field component={this.renderInput} label="Your name" name="name" type="text" placeholder="John Doe" />
        <Field component={this.renderInput} label="email" name="email" type="text" placeholder="john@doe.com" />
        <Field component={this.renderInput} label="Subject" name="subject" type="text" placeholder="Sing for Needs" />
        <Field component={this.renderTextArea} label="Message" name="message" type="textarea" rows="5" placeholder="The body of your message goes here" />
        <input className="button" type="submit" value="Send mail" />
      </form>
    )
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
  handleSubmit: PropTypes.func
}

const validate = formValues => {
  let errors = {}
  if (!formValues.name) {
    errors.name = 'You must enter a name'
  }
  if (!formValues.email) {
    errors.email = 'You must enter an email'
  }
  if (!formValues.subject) {
    errors.subject = 'You must enter a subject'
  }
  if (!formValues.message) {
    errors.message = 'You must enter a message'
  }
  return errors
}

export default reduxForm({
  form: 'contact',
  validate
})(ContactForm)
