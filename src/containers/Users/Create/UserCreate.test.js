import React from 'react'
import { mount } from 'enzyme'
import { MockedProvider } from '@apollo/react-testing'
import { act } from 'react-dom/test-utils'
import { MemoryRouter as Router } from 'react-router-dom'
import UserCreate, { SIGNUP_MUTATION } from './UserCreate'

async function mountMockedProvider(result) {
  const mocks = [
    {
      request: {
        query: SIGNUP_MUTATION },
      result
    }
  ]
  jest.useFakeTimers()
  const component = mount(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Router>
        <UserCreate />
      </Router>
    </MockedProvider>
  )
  act(() => {
    jest.runAllTimers()
  })
  component.update()
  return component
}
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
    userCreateWrapper = await mountMockedProvider(result)
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
