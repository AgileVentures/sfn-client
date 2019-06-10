import React from 'react'

class ContactForm extends React.Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onNameInputChange = event => {
    this.setState({
      name: event.target.value
    })
  };

  onEmailInputChange = event => {
    this.setState({
      email: event.target.value
    })
  };

  onSubjectInputChange = event => {
    this.setState({
      subject: event.target.value
    })
  };

  onMessageInputChange = event => {
    this.setState({
      message: event.target.value
    })
  };

  render() {
    return (
      <form className="contact-form-wrapper">
        <label className="white label-normal">
          Your name
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            onChange={this.onNameInputChange}
          />
        </label>
        <label className="white label-normal">
          Your email
          <input
            type="email"
            name="email"
            placeholder="john@doe.com"
            onChange={this.onEmailInputChange}
          />
        </label>
        <label className="white label-normal">
          Subject
          <input
            type="text"
            name="subject"
            placeholder="Sing for Needs"
            onChange={this.onSubjectInputChange}
          />
        </label>
        <label className="white label-normal">
          Message
          <textarea
            type="text"
            name="name"
            placeholder="The body of your message goes here"
            rows="5"
            onChange={this.onMessageInputChange}
          />
        </label>
        <input className="button" type="submit" value="Send mail" />
      </form>
    )
  }
}

export default ContactForm
