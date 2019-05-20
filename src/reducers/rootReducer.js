/*
 src/reducers/rootReducer.js
*/
import { combineReducers } from 'redux'
import simpleReducer from './simpleReducer'
import artistsReducer from './artistsReducer'
export default combineReducers({
  simpleReducer, artistsReducer
})
