import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

const api = axios.create({
  baseURL: BASE_URL,
})

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export const loginUser = (data) => api.post('/auth/login', data)
export const registerUser = (data) => api.post('/auth/register', data)
export const getTournaments = () => api.get('/tournaments')
export const getTournament = (id) => api.get(`/tournaments/${id}`)
export const registerToTournament = (id, data) => api.post(`/tournaments/${id}/register`, data)
export const getMyProfile = () => api.get('/users/me')
export const getMyHistory = () => api.get('/users/me/history')
export const getLeaderboard = () => api.get('/users/leaderboard')

export default api