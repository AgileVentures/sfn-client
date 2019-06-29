/*
 * src/store.js
 * No initialState
*/
import { createStore, applyMiddleware } from 'redux'
import reduxPromise from 'redux-promise'
import rootReducer from '../reducers/rootReducer'

export default function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(reduxPromise)
  )
}
