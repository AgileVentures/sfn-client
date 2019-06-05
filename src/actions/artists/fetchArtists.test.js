import moxios from 'moxios'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import { fetchArtists } from './fetchArtists'
import { FETCH_ARTISTS } from '../types'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
let store

describe('fetchArtists', () => {
  let response
  beforeEach(() => {
    moxios.install()
    store = mockStore({})
    response = [{
      payload: [
        {
          id: 1,
          name: 'Awesome Artist 1'
        },
        {
          id: 2,
          name: 'Awesome Artist 2'
        }]
    }]
  })

  afterEach(() => {
    moxios.uninstall()
  })

  it('fetches artists from an external api', () => {
    const expectedActions = [{ type: FETCH_ARTISTS, payload: response }]
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      console.log(response)
      request.resolve(response)
    })

    return store.dispatch(fetchArtists()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
