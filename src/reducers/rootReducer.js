/*
 src/reducers/rootReducer.js
*/
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import artists from './artists/artistsReducer'
export default combineReducers({
  artists,
  form: formReducer
})
