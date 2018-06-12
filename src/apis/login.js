import axios from '@/axios'

export function login (data) {
  axios.post('/login', data)
}
