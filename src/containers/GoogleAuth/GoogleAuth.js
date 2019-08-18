import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  signIn,
  signOut
} from '../../actions/authentication/authenticationActions'

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId: process.env.REACT_APP_GOOGLE_API,
          scope: 'email'
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance()
          this.onAuthChange(this.auth.isSignedIn.get())
          this.auth.isSignedIn.listen(this.onAuthChange)
        })
    })
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      // signIn and signOut from redux actions
      this.props.signIn(this.auth.currentUser.get().getId())
    } else {
      this.props.signOut()
    }
  };

  onSignInClick = () => {
    this.auth.signIn()
  };

  onSignOutClick = () => {
    this.auth.signOut()
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null
    } else if (this.props.isSignedIn) {
      return <button onClick={this.onSignOutClick}>Sign out</button>
    } else {
      return (
        <button onClick={this.onSignInClick}>
          Sign in with
          <FontAwesomeIcon className="button-icon" icon={faGoogle} />
        </button>
      )
    }
  }

  render() {
    return <div className="authentication">{this.renderAuthButton()}</div>
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.authentication.isSignedIn }
}

export default connect(
  mapStateToProps,
  { signIn: signIn, signOut: signOut }
)(GoogleAuth)

GoogleAuth.propTypes = {
  signIn: PropTypes.func,
  signOut: PropTypes.func,
  isSignedIn: PropTypes.bool
}
