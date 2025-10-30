import React, { useState, useEffect } from 'react'
import { api } from '../api/api'

export default function EmployerDashboard() {
  const [form, setForm] = useState({ title:'', description:'', location:'', salary:'', type:'Full-time' })
  const [jobs, setJobs] = useState([])

  useEffect(() => { fetchJobs() }, [])

  async function fetchJobs() {
    try {
      const r = await api.get('/employer/jobs')
      setJobs(r.data)
    } catch (e) {
      console.error(e)
    }
  }

  async function submit() {
    try {
      await api.post('/employer/jobs', form)
      alert('Job submitted — status: pending')
      setForm({ title:'', description:'', location:'', salary:'', type:'Full-time' })
      fetchJobs()
    } catch {
      alert('Submit failed — make sure you are logged in as employer')
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-lg bg-white p-6 rounded shadow">
        <h3 className="font-bold mb-3">Post a Job</h3>
        <input className="w-full p-2 border mb-2" placeholder="Title" value={form.title} onChange={e=>setForm({...form, title:e.target.value})} />
        <textarea className="w-full p-2 border mb-2" placeholder="Description" value={form.description} onChange={e=>setForm({...form, description:e.target.value})} />
        <input className="w-full p-2 border mb-2" placeholder="Location" value={form.location} onChange={e=>setForm({...form, location:e.target.value})} />
        <input className="w-full p-2 border mb-2" placeholder="Salary" value={form.salary} onChange={e=>setForm({...form, salary:e.target.value})} />
        <select className="w-full p-2 border mb-2" value={form.type} onChange={e=>setForm({...form, type:e.target.value})}>
          <option>Full-time</option>
          <option>Part-time</option>
          <option>Freelance</option>
        </select>
        <button onClick={submit} className="w-full py-2 bg-indigo-600 text-white rounded">Submit Job (will be Pending)</button>
      </div>

      <div className="mt-8">
        <h4 className="font-semibold">Your Jobs</h4>
        {jobs.map(j => (
          <div key={j.id} className="bg-white p-4 rounded shadow mt-2 flex justify-between">
            <div>
              <div className="font-bold">{j.title}</div>
              <div className="text-sm text-gray-500">{j.location}</div>
            </div>
            <div className="text-sm">
              <span className={`px-2 py-1 rounded ${j.status==='pending' ? 'bg-yellow-100' : j.status==='approved' ? 'bg-green-100' : 'bg-red-100'}`}>{j.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
