import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import Loader from '../../../components/Shared/Loader/Loader'

export const SIGNUP_MUTATION = gql`
mutation userSignup($username: String!, $password: String!, $email: String!, $avatarUrl: String) {
  signup(username: $username, password: $password, email: $email, avatarUrl: $avatarUrl ){
    token
    user{
      username
      avatarUrl
    }
  }
}
`
class UserCreate extends React.Component {
  state = {
    avatarUrl: null,
    username: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  };

  // handleSubmit = (event, signup) => {
  //   event.preventDefault()
  //   signup()
  // };

  handleFileChange = event => {
    this.setState({
      selectedFile: event.target.files[0]
    })

    let reader = new FileReader()

    reader.onloadend = () => {
      this.setState({
        avatarUrl: reader.result
      })
    }

    reader.readAsDataURL(event.target.files[0])
  };

  renderImagePreview = () => {
    return (
      <div className="image-container">
        <img src={this.state.avatarUrl} alt="icon" width="200" />{' '}
      </div>
    )
  };

  render() {
    return (
      <Mutation mutation={SIGNUP_MUTATION} variables={this.state}>
        { (signup, { error, loading }) => {
          if (loading) return <Loader />
          return (
            <div className="user-registration-container">
              <h1>Register as a fan</h1>
              <div className="user-registration-form-wrapper">
                <p className="error-message">{error}</p>
                <form onSubmit={(e) => {
                  e.preventDefault()
                  signup()
                }} className="user-registration-form">
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
                      {this.state.avatarUrl ? this.renderImagePreview() : ''}
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
                  {/* <div className="field">
                    <label htmlFor="passwordConfirmation">
                Password confirmation
                    </label>
                    <input name="passwordConfirmation" type="password" />
                  </div> */}
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
      </Mutation>

    )
  }
}

export default UserCreate
