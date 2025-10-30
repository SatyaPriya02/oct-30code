import axios from 'axios'

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000'

export const api = axios.create({
  baseURL: API_BASE,
  headers: { 'Content-Type': 'application/json' }
})

export function setAuthToken(token) {
  if (token) api.defaults.headers.common['Authorization'] = `Bearer ${token}` 
  else delete api.defaults.headers.common['Authorization']
}

// initialize from localStorage if present
try {
  const saved = typeof localStorage !== 'undefined' && localStorage.getItem('token')
  if (saved) setAuthToken(saved)
} catch {}
