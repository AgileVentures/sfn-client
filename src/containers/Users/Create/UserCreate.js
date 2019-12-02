import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'

class UserCreate extends React.Component {
  state = {
    imagePreviewUrl: null
  };

  handleSubmit = () => {
    console.log('Form submitted')
  };

  handleFileChange = event => {
    this.setState({
      selectedFile: event.target.files[0]
    })

    let reader = new FileReader()

    reader.onloadend = () => {
      this.setState({
        imagePreviewUrl: reader.result
      })
    }

    reader.readAsDataURL(event.target.files[0])
  };

  renderImagePreview = () => {
    return (
      <div className="image-container">
        <img src={this.state.imagePreviewUrl} alt="icon" width="200" />{' '}
      </div>
    )
  };

  render() {
    return (
      <div className="user-registration-container">
        <h1>Register as a fan</h1>
        <div className="user-registration-form-wrapper">
          <form onSubmit={this.handleSubmit} className="user-registration-form">
            <div className="field avatar-field">
              <span className="label">Upload your avatar</span>
              <label id="avatar-label" htmlFor="avatar">
                <FontAwesomeIcon className="camera-icon" icon={faCamera} />
                <input
                  id="upload-avatar"
                  name="avatar"
                  type="file"
                  accept="image/png, image/jpeg"
                  onChange={this.handleFileChange}
                />
                {this.state.imagePreviewUrl ? this.renderImagePreview() : ''}
              </label>
            </div>
            <div className="field">
              <label htmlFor="username">Username</label>
              <input name="username" type="text" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input name="email" type="email" />
            </div>
            <div className="field">
              <label htmlFor="password">
                Password <span>(8 characters minimum)</span>
              </label>
              <input name="password" type="password" />
            </div>
            <div className="field">
              <label htmlFor="password_confirmation">
                Password confirmation
              </label>
              <input name="password_confirmation" type="password" />
            </div>
            <input
              className="button body-large"
              type="submit"
              value="Register"
            />
          </form>
        </div>
      </div>
    )
  }
}

export default UserCreate
