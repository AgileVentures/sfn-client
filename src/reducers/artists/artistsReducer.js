import { FETCH_ARTISTS } from '../../actions/types'

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ARTISTS: {
      return action.payload
    }
    default: return state
  }
}
