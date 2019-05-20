import singForNeeds from '../../apis/singForNeeds'
import { FETCH_ARTISTS } from '../types'

export const fetchArtists = props => async dispatch => {
  const response = singForNeeds.get('/artists')
  dispatch({ type: FETCH_ARTISTS, payload: response.data })
}
