import axios from 'axios'
import { API_KEY } from '../secrets/api-key'

export const Api = axios.create({ baseURL: 'https://api.yelp.com/v3/', timeout: 5000, headers: { Authorization: `Bearer ${API_KEY}` } })