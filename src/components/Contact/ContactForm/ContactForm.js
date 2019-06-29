import React from 'react'
import { Field, reduxForm } from 'redux-form'
import PropTypes from 'prop-types'

class ContactForm extends React.Component {
  renderInput = ({ input, label, placeholder }) => {
    return (
      <React.Fragment>
        <label className="white label-normal">{label}</label>
        <input {...input} placeholder={placeholder} />
      </React.Fragment>
    )
  };

  renderTextArea = ({ input, label, placeholder, rows }) => {
    return (
      <React.Fragment>
        <label className="white label-normal">{label}</label>
        <textarea rows={rows} {...input} placeholder={placeholder} />
      </React.Fragment>
    )
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues)
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="contact-form-wrapper">
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

export default reduxForm({
  form: 'contact'
})(ContactForm)
