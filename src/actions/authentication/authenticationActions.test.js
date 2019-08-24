import { signIn, signOut } from './authenticationActions'
import { SIGN_OUT, SIGN_IN } from '../types'

describe('signOut', () => {
  it('returns the signout action', () => {
    let expectedAction = { type: SIGN_OUT }
    expect(signOut()).toEqual(expectedAction)
  })
})

describe('signIn', () => {
  let expectedAction = { type: SIGN_IN }
  expect(signIn()).toEqual(expectedAction)
})
