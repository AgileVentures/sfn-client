/*
 src/reducers/rootReducer.js
*/
import { combineReducers } from 'redux'
import simpleReducer from '../reducers/simpleReducer'

import artists from './artistsReducer'
export default combineReducers({
  simpleReducer,
  artists
})
