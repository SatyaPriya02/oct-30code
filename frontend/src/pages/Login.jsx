import React, { useState } from 'react'
import { api, setAuthToken } from '../api/api'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const submit = async () => {
    try {
      const r = await api.post('/auth/login', { email, password })
      const token = r.data.token
      localStorage.setItem('token', token)
      setAuthToken(token)
      navigate('/')
      window.location.reload()
    } catch {
      alert('Login failed')
    }
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow mt-8">
      <h2 className="text-lg font-bold mb-4">Login</h2>
      <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full p-2 border mb-2" />
      <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password" className="w-full p-2 border mb-2" />
      <button onClick={submit} className="w-full py-2 bg-indigo-600 text-white rounded">Login</button>
    </div>
  )
}
