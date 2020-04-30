import React from 'react'
import UserSignIn, { SIGNIN_MUTATION } from './UserSignIn'
import { mountMockedProvider } from '../../support/tests/mountMockedProvider'

describe('<UserSignIn />', () => {
  let result, wrapper, userSignInWrapper

  beforeEach(async () => {
    result = {
      signin: {
        token: '234343345435ascsdaewrewwr3242',
        user: {
          username: 'awesome_user'
        }
      }
    }
    wrapper = await mountMockedProvider(result, SIGNIN_MUTATION, <UserSignIn />)
    userSignInWrapper = wrapper.find('UserSignIn')
  })

  afterEach(() => {
    wrapper.unmount()
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

  it('allows to enter a username', () => {
    const usernameInput = userSignInWrapper.find("input[name='username']")
    // userSignInWrapper.handleChange = jest.fn()

    usernameInput.simulate('change', { target: { name: 'username', value: 'username' } })
    // expect(handleChange).toBeCalledTimes(1)

    expect(userSignInWrapper.state().username).toBe('username')
  })

  it('allows to enter a password', () => {
    const passwordInput = userSignInWrapper.find("input[type='password']")
    userSignInWrapper.handleChange = jest.fn()

    passwordInput.simulate('change', { target: { name: 'password', value: 'password' } })
    expect(userSignInWrapper.state().password).toBe('password')
  })

  it.skip('allows to submit the login information', () => {
    const usernameInput = userSignInWrapper.find("input[name='username']")
    const passwordInput = userSignInWrapper.find("input[type='password']")
    userSignInWrapper.signin = jest.fn()

    usernameInput.simulate('change', { target: { name: 'username', value: 'username' } })
    passwordInput.simulate('change', { target: { name: 'password', value: 'password' } })

    const submitButton = userSignInWrapper.find("input[type='submit']")
    submitButton.signin = jest.fn()
    submitButton.simulate('click')

    expect(userSignInWrapper.signin.mock.calls.length).toBe(1)
    // expect(userSignInWrapper.signin).toBeCalledTimes(1)
  })
})
