import axios from 'axios'
import { FETCH_ARTISTS } from '../types'

export const fetchArtists = () => {
  const response = axios.get(`${process.env.REACT_APP_BASE_URL}/api/artists`)
  return { type: FETCH_ARTISTS, payload: response }
}
