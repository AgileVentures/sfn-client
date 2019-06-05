import axios from 'axios'
import { FETCH_ARTISTS } from '../types'

export const fetchArtists = () => dispatch => {
  return axios.get('http://localhost:4002/api/artists').then(response => {
    dispatch({ type: FETCH_ARTISTS, payload: response.data })
  })
}
