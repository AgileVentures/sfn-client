import React from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import Loader from '../../../components/Shared/Loader/Loader'
import { NavLink } from 'react-router-dom'

export const SIGNIN_MUTATION = gql`
  mutation userSignIn($username: String!, $password: String!) {
    signin(username: $username, password: $password) {
      token
      user {
        username
      }
    }
  }
`

class UserSignIn extends React.Component {
  state = {
    username: '',
    password: ''
  };

  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  };

  isFormValid = event => {
    return this.state.username.length > 0 && this.state.password.length > 0
  };

  render() {
    return (
      <Mutation mutation={SIGNIN_MUTATION} variables={this.state}>
        {(signin, { error, loading }) => {
          if (loading) return <Loader />
          return (
            <div className="user-signin-container">
              <h1>Sign in</h1>
              <div className="user-signin-form-wrapper">
                <p className="error-message">{error}</p>
                <form
                  onSubmit={e => {
                    e.preventDefault()
                    signin()
                  }}
                  className="user-signin-form"
                >
                  <div className="field">
                    <label htmlFor="username">Username</label>
                    <input
                      name="username"
                      type="text"
                      value={this.state.username}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="password">Password</label>
                    <input
                      name="password"
                      type="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="actions">
                    <input
                      className="button body-large"
                      type="submit"
                      value="Sign in"
                      disabled={loading || !this.isFormValid()}
                    />
                    <NavLink to="/users/signup">
                      New here? Create your account in less than a beat
                    </NavLink>
                  </div>
                </form>
              </div>
            </div>
          )
        }}
      </Mutation>
    )
  }
}

export default UserSignIn
