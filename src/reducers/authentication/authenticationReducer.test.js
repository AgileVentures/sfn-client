import authenticationReducer from './authenticationReducer'
import { SIGN_IN, SIGN_OUT } from '../../actions/types'

describe('authenticationReducer', () => {
  it('maintains current state if action is not SIGN_IN or SIGN_OUT', () => {
    expect(authenticationReducer({ isSignedIn: null }, {})).toEqual({ isSignedIn: null })
  })

  it('updates state upon sign-in', () => {
    expect(
      authenticationReducer({ isSignedIn: null }, {
        type: SIGN_IN
      })
    ).toEqual({ isSignedIn: true })
  })

  it('updates state upon sign-out', () => {
    expect(
      authenticationReducer({ isSignedIn: null }, {
        type: SIGN_OUT
      })
    ).toEqual({ isSignedIn: false })
  })
})
