import axios from 'axios'
import { BASE_API_URL } from '../utils/constants'

const baseUrl = `${BASE_API_URL}/login`

const login = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

export default { login }
