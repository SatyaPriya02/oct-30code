import React, { useEffect, useState } from 'react'
import { api } from '../api/api'

export default function AdminDashboard() {
  const [jobs, setJobs] = useState([])

  useEffect(()=>{ fetchPending() }, [])

  async function fetchPending() {
    const r = await api.get('/admin/jobs', { params: { status: 'pending' } })
    setJobs(r.data)
  }

  async function update(id, action) {
    await api.post(`/admin/jobs/${id}/${action}`)
    fetchPending()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h3 className="font-bold mb-4">Pending Jobs</h3>
      {jobs.map(j => (
        <div key={j.id} className="bg-white p-4 rounded shadow mb-2 flex justify-between">
          <div>
            <div className="font-bold">{j.title}</div>
            <div className="text-sm">{j.description}</div>
          </div>
          <div className="flex flex-col gap-2">
            <button onClick={()=>update(j.id,'approve')} className="px-3 py-1 bg-green-500 text-white rounded">Approve</button>
            <button onClick={()=>update(j.id,'reject')} className="px-3 py-1 bg-red-500 text-white rounded">Reject</button>
          </div>
        </div>
      ))}
    </div>
  )
}
