import React from 'react'
import { shallow, mount } from 'enzyme'
import { BrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import authenticationReducer from '../../reducers/authentication/authenticationReducer'

// Need at least 1 test to pass Travis CI
describe('<Layout />', () => {
  let layoutWrapper
  let eventMap
  const reducers = {
    authentication: authenticationReducer
  }
  const reducer = combineReducers(reducers)
  const store = createStore(reducer)

  beforeEach(() => {
    eventMap = {}
    document.addEventListener = jest.fn((event, cb) => {
      eventMap[event] = cb
    })
    document.removeEventListener = jest.fn()
    layoutWrapper = shallow(<Layout children={[]} />)
  })

  it('contains a Header component', () => {
    expect(layoutWrapper.find('Header').length).toEqual(1)
  })
  it('has a state with mobileMenu false', () => {
    expect(layoutWrapper.state('mobileMenu')).toEqual(false)
  })
  it('has state updated when the NavBar it contains has its menu item clicked', () => {
    window.gapi = { load: jest.fn() }
    layoutWrapper = mount(
      <Provider store={store} >
        <BrowserRouter>
          <Layout children={[]} />
        </BrowserRouter>
      </Provider>
    )
    layoutWrapper.find('FontAwesomeIcon').simulate('click')
    const layout = layoutWrapper.find('Layout')
    expect(layout.state('mobileMenu')).toEqual(true)
    layoutWrapper.unmount()
  })

  it('calls component will unmount on unmount', () => {
    layoutWrapper.unmount()
    expect(document.removeEventListener).toHaveBeenCalledTimes(1)
  })

  it('sets state of mobileMenu to false on mouse up ', () => {
    eventMap.mouseup()
    expect(layoutWrapper.state().mobileMenu).toBe(false)
    layoutWrapper.setState({ mobileMenu: true })
    eventMap.mouseup()
    expect(layoutWrapper.state().mobileMenu).toBe(false)
  })
})
