import React from 'react'
import UserCreate, { SIGNUP_MUTATION } from './UserCreate'
import { mountMockedProvider } from '../../support/tests/mountMockedProvider'

describe('<UserCreate />', () => {
  let result, userCreateWrapper

  beforeEach(async () => {
    result = {
      signup: {
        token: '234343345435ascsdaewrewwr3242',
        user: {
          username: 'awesome_user',
          avatarUrl: 'http://avatar.url'
        }
      }
    }
    userCreateWrapper = await mountMockedProvider(result, SIGNUP_MUTATION, <UserCreate />)
  })

  it('has form component to submit the form', () => {
    expect(userCreateWrapper.find('form').length).toEqual(1)
  })

  it('has an input to upload the avatar for the profile', () => {
    expect(userCreateWrapper.find('#upload-avatar').length).toEqual(1)
  })

  it('has an input field to fill in the username', () => {
    expect(userCreateWrapper.find("input[name='username']").length).toEqual(1)
  })

  it('has an input field to fill in the email', () => {
    expect(userCreateWrapper.find("input[type='email']").length).toEqual(1)
  })

  it('has an input field to fill in the password and password confirmation', () => {
    expect(userCreateWrapper.find("input[type='password']").length).toEqual(2)
  })
})
