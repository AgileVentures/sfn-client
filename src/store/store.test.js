import configureStore from './store'

describe('store', () => {
  it('should return default state', () => {
    const store = configureStore()
    const state = store.getState()
    expect(state.artists).toEqual([])
  })
})
