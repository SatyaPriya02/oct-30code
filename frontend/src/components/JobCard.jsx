import React from 'react'

export default function JobCard({ job, onApply }) {
  if (!job) return null
  return (
    <div className="max-w-2xl mx-auto bg-white rounded shadow p-6 my-8">
      <h3 className="text-xl font-bold">{job.title}</h3>
      <p className="text-sm text-gray-600">{job.location} • {job.type}</p>
      <p className="mt-3 text-sm text-gray-700">{job.description}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-indigo-600 font-semibold">{job.salary}</span>
        <button onClick={() => onApply && onApply(job)} className="bg-indigo-600 text-white px-4 py-1 rounded">Apply</button>
      </div>
    </div>
  )
}
