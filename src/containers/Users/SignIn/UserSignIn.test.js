import React from 'react'
import UserSignIn, { SIGNIN_MUTATION } from './UserSignIn'
import { mountMockedProvider } from '../../support/tests/mountMockedProvider'

describe('<UserSignIn />', () => {
  let result, userSignInWrapper

  beforeEach(async () => {
    result = {
      signin: {
        token: '234343345435ascsdaewrewwr3242',
        user: {
          username: 'awesome_user'
        }
      }
    }
    userSignInWrapper = await mountMockedProvider(result, SIGNIN_MUTATION, <UserSignIn />)
  })

  it('has form component to sign in to Sing for Needs', () => {
    expect(userSignInWrapper.find('form').length).toEqual(1)
  })

  it('has an input field to fill in the username', () => {
    expect(userSignInWrapper.find("input[name='username']").length).toEqual(1)
  })

  it('has an input field to fill in the password', () => {
    expect(userSignInWrapper.find("input[type='password']").length).toEqual(1)
  })
})
