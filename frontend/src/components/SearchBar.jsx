import React from 'react'

export default function SearchBar({ query, setQuery, onSearch }) {
  return (
    <div className="flex items-center gap-2 w-full max-w-2xl mx-auto">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && onSearch()}
        className="flex-1 p-3 rounded-l border focus:outline-none"
        placeholder="Search jobs, titles, companies..."
      />
      <button onClick={onSearch} className="px-4 py-3 bg-indigo-600 text-white rounded-r">Search</button>
    </div>
  )
}
