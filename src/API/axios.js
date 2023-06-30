import Axios from 'axios'
import { API_HRMIS_URL } from '../config'

// Axios.defaults.withCredentials = true

export const hrmisAPI = Axios.create({
  baseURL: API_HRMIS_URL,
})

