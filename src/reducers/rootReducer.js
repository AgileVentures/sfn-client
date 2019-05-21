/*
 src/reducers/rootReducer.js
*/
import { combineReducers } from 'redux'
import artists from './artistsReducer'
export default combineReducers({
  artists
})
