import React from 'react'
import Loader from './Loader'

import { mount } from 'enzyme'

describe('<Loader />', () => {
  let loaderWrapper

  describe('props have values', () => {
    beforeEach(() => {
      loaderWrapper = mount(
        <Loader
          mainText="Main Text"
          subText="Sub Text"
        />
      )
    })

    it('renders main text', () => {
      expect(loaderWrapper.find('.loader--main-text').text()).toEqual('Main Text')
    })

    it('renders subtext', () => {
      expect(loaderWrapper.find('.loader--sub-text').text()).toEqual('Sub Text')
    })

    it('renders a spinner', () => {
      expect(loaderWrapper.find('.loader--icon').hostNodes().length).toEqual(1)
    })
  })
  describe('no values passed in props', () => {
    beforeEach(() => {
      loaderWrapper = mount(
        <Loader />
      )
    })

    it('maitext is empty', () => {
      expect(loaderWrapper.find('.loader--main-text').text()).toEqual('')
    })

    it('subtext is empty', () => {
      expect(loaderWrapper.find('.loader--sub-text').text()).toEqual('')
    })

    it('renders a spinner', () => {
      expect(loaderWrapper.find('.loader--icon').hostNodes().length).toEqual(1)
    })
  })
})
