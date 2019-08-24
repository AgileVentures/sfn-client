/*
 src/reducers/rootReducer.js
*/
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import artists from './artists/artistsReducer'
import authentication from './authentication/authenticationReducer'
export default combineReducers({
  artists,
  authentication,
  form: formReducer
})
