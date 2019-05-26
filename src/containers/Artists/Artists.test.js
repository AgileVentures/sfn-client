import React from 'react'
import { Artists } from './Artists'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
let store

describe('<Artists />', () => {
  let artistsWrapper
  let props = {
    fetchArtists: jest.fn()
  }

  beforeEach(() => {
    store = mockStore({})
    artistsWrapper = mount(<Provider store={store}><Artists {...props} /></Provider>)
  })

  it('contains 1 Trending Artists container', () => {
    expect(artistsWrapper.find('TrendingArtists').length).toEqual(1)
  })

  it('contains 1 Explore Artists container', () => {
    expect(artistsWrapper.find('ExploreArtists').length).toEqual(1)
  })

  it('contains a sign up banner at the bottom', () => {
    expect(artistsWrapper.find('Banner').length).toEqual(1)
  })
})
