/*
 src/reducers/rootReducer.js
*/
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import artists from './artists/artistsReducer'
import simpleReducer from './simpleReducer'
export default combineReducers({
  simpleReducer,
  artists,
  form: formReducer
})
