/*
 src/reducers/rootReducer.js
*/
import { combineReducers } from 'redux'
import simpleReducer from '../reducers/simpleReducer'

import artists from './artists/artistsReducer'
export default combineReducers({
  simpleReducer,
  artists
})
