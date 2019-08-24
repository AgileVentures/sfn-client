import artistsReducer from './artistsReducer'
import { FETCH_ARTISTS } from '../../actions/types'

describe('reduces events', () => {
  it('defaults to empty list artists info if none are passed in', () => {
    expect(artistsReducer([], {})).toEqual([])
  })

  it('reduces artists after getting it', () => {
    expect(
      artistsReducer([], {
        type: FETCH_ARTISTS,
        payload: [{ id: 1, name: 'Awesome Artist 1' }]
      })
    ).toEqual([{ id: 1, name: 'Awesome Artist 1' }])
  })
})
