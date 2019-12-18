import React from 'react'
import { mount } from 'enzyme'
import { MockedProvider } from '@apollo/react-testing'
import { act } from 'react-dom/test-utils'
import { MemoryRouter as Router } from 'react-router-dom'
import UserSignIn, { SIGNIN_MUTATION } from './UserSignIn'

async function mountMockedProvider(result) {
  const mocks = [
    {
      request: {
        query: SIGNIN_MUTATION
      },
      result
    }
  ]
  jest.useFakeTimers()
  const component = mount(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Router>
        <UserSignIn />
      </Router>
    </MockedProvider>
  )
  act(() => {
    jest.runAllTimers()
  })
  component.update()
  return component
}
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
    userSignInWrapper = await mountMockedProvider(result)
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
