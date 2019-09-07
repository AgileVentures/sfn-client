import React from 'react'
import GoogleAuth from './GoogleAuth'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import { SIGN_IN, SIGN_OUT } from '../../actions/types'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

let state = {
  authentication: { isSignedIn: false }
}

let store

describe('<GoogleAuth />', () => {
  let googleAuthWrapper
  window.gapi = { load: jest.fn() }
  let googleAuth

  beforeEach(() => {
    // store = mockStore({})
  })

  afterEach(() => {
    googleAuthWrapper.unmount()
  })

  it('handles Sign-in click', () => {
    store = mockStore(() => state)
    googleAuthWrapper = mount(<Provider store={store}><GoogleAuth /></Provider>)
    googleAuth = googleAuthWrapper.childAt(0).childAt(0).instance()
    googleAuth.auth = { signIn: jest.fn() }
    googleAuthWrapper.find('button').simulate('click')
    expect(googleAuth.auth.signIn).toBeCalledTimes(1)
  })

  it('handles Sign-out click', () => {
    state = { authentication: { isSignedIn: true } }
    store = mockStore(() => state)
    googleAuthWrapper = mount(<Provider store={store}><GoogleAuth /></Provider>)
    googleAuth = googleAuthWrapper.childAt(0).childAt(0).instance()
    googleAuth.auth = { signOut: jest.fn() }
    googleAuthWrapper.find('button').simulate('click')
    expect(googleAuth.auth.signOut).toBeCalledTimes(1)
  })

  it('calls the action creator upon user being signed out', () => {
    store = mockStore({ authentication: { isSignedIn: true } })
    googleAuthWrapper = mount(<Provider store={store}><GoogleAuth /></Provider>)
    googleAuth = googleAuthWrapper.childAt(0).childAt(0).instance()
    googleAuth.onAuthChange(false)
    expect(store.getActions()).toEqual([{ type: SIGN_OUT }])
  })

  it('calls the action creator upon user being signed in', () => {
    store = mockStore({ authentication: { isSignedIn: true } })
    googleAuthWrapper = mount(<Provider store={store}><GoogleAuth /></Provider>)
    googleAuth = googleAuthWrapper.childAt(0).childAt(0).instance()
    googleAuth.auth = { currentUser: { get: jest.fn(() => ({ getId: jest.fn() })) } }
    googleAuth.onAuthChange(true)
    expect(store.getActions()).toEqual([{ type: SIGN_IN }])
  })
})
