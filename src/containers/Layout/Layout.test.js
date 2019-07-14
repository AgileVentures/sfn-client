import React from 'react'
import { shallow, mount } from 'enzyme'
import { BrowserRouter } from 'react-router-dom'
import Layout from './Layout'

// Need at least 1 test to pass Travis CI
describe('<Layout />', () => {
  let layoutWrapper
  let removeEventListener
  beforeEach(() => {
    layoutWrapper = shallow(<Layout children={[]} />, {
      disableLifecycleMethods: true
    })
    removeEventListener = jest.fn().mockReturnValue({ style: {} })
    Object.defineProperty(global.document, 'removeEventListener', { writable: true, value: removeEventListener })
  })

  it('contains a Header component', () => {
    expect(layoutWrapper.find('Header').length).toEqual(1)
  })
  it('has a state with mobileMenu false', () => {
    expect(layoutWrapper.state('mobileMenu')).toEqual(false)
  })
  it('has state updated when the NavBar it contains has its menu item clicked', () => {
    layoutWrapper = mount(
      <BrowserRouter>
        <Layout children={[]} />
      </BrowserRouter>
    )
    layoutWrapper.find('FontAwesomeIcon').simulate('click')
    const layout = layoutWrapper.find('Layout')
    expect(layout.state('mobileMenu')).toEqual(true)
  })

  it('calls component will unmount on unmount', () => {
    layoutWrapper.unmount()
    expect(removeEventListener).toHaveBeenCalledTimes(1)
  })

  it('sets state of mobileMenu to false on mouse up ', () => {
    layoutWrapper = mount(
      <BrowserRouter>
        <Layout children={[]} />
      </BrowserRouter>
    )
    layoutWrapper.setState({ mobileMenu: true })
    layoutWrapper.find('.footer-container__copyright').simulate('mouseup')
    layoutWrapper.update()

    expect(layoutWrapper.state().mobileMenu).toBe(false)
  })
})
