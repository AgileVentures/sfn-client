import React from 'react'
import { shallow } from 'enzyme'
import UserCreate from './UserCreate'

describe('<UserCreate />', () => {
  let userCreateWrapper

  beforeEach(() => {
    userCreateWrapper = shallow(<UserCreate />)
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

  it('has an input field to fill in the password and password confirmation', () => {
    expect(userCreateWrapper.find("input[type='password']").length).toEqual(2)
  })
})
