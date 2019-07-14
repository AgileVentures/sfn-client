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
    response = {
      data: [{
        id: 1,
        name: 'Awesome Artist 1'
      },
      {
        id: 2,
        name: 'Awesome Artist 2'
      }]
    }
  })

  afterEach(() => {
    moxios.uninstall()
  })

  it('fetches artists from an external api', done => {
    moxios.stubRequest('http://localhost:4000/api/artists', {
      status: 200,
      response
    })

    const dispatch = jest.fn()
    fetchArtists()(dispatch)

    moxios.wait(() => {
      const expectedAction = { type: FETCH_ARTISTS, payload: response.data }
      store.dispatch(dispatch.mock.calls[0][0])
      expect(store.getActions()[0]).toEqual(expectedAction)
      done()
    })
  })
})
