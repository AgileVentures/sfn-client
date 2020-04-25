import React from 'react'
import { mount } from 'enzyme'
import { MockedProvider } from '@apollo/react-testing'
import { act } from 'react-dom/test-utils'
import { MemoryRouter as Router } from 'react-router-dom'

export async function mountMockedProvider(result, query, currentComponent, variables) {
  const request = variables ? { query, variables } : { query }
  const mocks = [
    {
      request,
      result
    }
  ]

  jest.useFakeTimers()
  const component = mount(
    <MockedProvider
      mocks={mocks}
      addTypename={false}
    >
      <Router>
        { currentComponent }
      </Router>
    </MockedProvider>)
  act(() => {
    jest.runAllTimers()
  })
  component.update()
  return component
}
