// import React from 'react'

// export default function Jobs() {
//   return (
//     <div className="container mx-auto px-4 pt-24 pb-10">
//       <h1 className="text-3xl font-bold mb-4">Jobs & Careers</h1>
//       <p className="text-gray-600 mb-4">Browse and search approved job listings.</p>
//       <div className="flex flex-wrap gap-2">
//         {[
//           'Software Developer', 'AI Engineer', 'UI/UX Designer', 'Data Analyst', 'Cybersecurity Expert',
//           'HR Executive', 'Finance Analyst', 'Sales Manager', 'Marketing Officer', 'Business Analyst'
//         ].map((item) => (
//           <span key={item} className="px-3 py-1 rounded-full text-sm bg-indigo-50 text-indigo-700 border border-indigo-100">{item}</span>
//         ))}
//       </div>
//     </div>
//   )
// }




import React, { useState, useEffect } from "react";
import { api } from "../api/api";

export default function Jobs() {
  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  // 🔹 Sample fallback data (used if API not available)
  const defaultJobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechVision Pvt Ltd",
      location: "Bangalore, India",
      salary: "₹5 LPA - ₹8 LPA",
      type: "Full-time",
    },
    {
      id: 2,
      title: "AI Engineer",
      company: "Innovate AI Labs",
      location: "Hyderabad, India",
      salary: "₹10 LPA - ₹15 LPA",
      type: "Full-time",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "Creative Minds Studio",
      location: "Pune, India",
      salary: "₹6 LPA - ₹9 LPA",
      type: "Remote",
    },
    {
      id: 4,
      title: "Data Analyst",
      company: "FinTrack Analytics",
      location: "Mumbai, India",
      salary: "₹4.5 LPA - ₹7 LPA",
      type: "Hybrid",
    },
    {
      id: 5,
      title: "Cybersecurity Expert",
      company: "SecureNet Global",
      location: "Remote",
      salary: "₹8 LPA - ₹12 LPA",
      type: "Full-time",
    },
  ];

  // 🔹 Fetch from API or fallback
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await api.get("/jobs");
        if (response.data && response.data.length > 0) {
          setJobs(response.data);
          setFilteredJobs(response.data);
        } else {
          setJobs(defaultJobs);
          setFilteredJobs(defaultJobs);
        }
      } catch (err) {
        setJobs(defaultJobs);
        setFilteredJobs(defaultJobs);
      }
    };
    fetchJobs();
  }, []);

  // 🔹 Handle search
  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (!value.trim()) {
      setFilteredJobs(jobs);
      return;
    }

    const result = jobs.filter((job) =>
      job.title.toLowerCase().includes(value.toLowerCase()) ||
      job.company.toLowerCase().includes(value.toLowerCase()) ||
      job.location.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredJobs(result);
  };

  return (
    <div className="container mx-auto px-4 pt-24 pb-10">
      {/* Page Header */}
      <h1 className="text-3xl font-bold mb-3 text-gray-900">Jobs & Careers</h1>
      <p className="text-gray-600 mb-6">
        Explore the latest job openings and career opportunities across industries.
      </p>

      {/* Search Box */}
      <div className="max-w-xl mx-auto mb-10 relative">
        <input
          type="text"
          placeholder="Search for job titles, companies, or locations..."
          value={query}
          onChange={handleSearch}
          className="w-full py-3 pl-12 pr-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 text-gray-800"
        />
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.3-4.3" />
        </svg>
      </div>

      {/* Popular Categories */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {[
          "Software Developer",
          "AI Engineer",
          "UI/UX Designer",
          "Data Analyst",
          "Cybersecurity Expert",
          "HR Executive",
          "Finance Analyst",
          "Sales Manager",
          "Marketing Officer",
          "Business Analyst",
        ].map((item) => (
          <button
            key={item}
            onClick={() => setQuery(item) || handleSearch({ target: { value: item } })}
            className="px-3 py-1.5 rounded-full text-sm bg-indigo-50 text-indigo-700 border border-indigo-100 hover:bg-indigo-100 transition"
          >
            {item}
          </button>
        ))}
      </div>

      {/* Job Listings */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                {job.title}
              </h2>
              <p className="text-gray-600 mb-1">{job.company}</p>
              <div className="text-sm text-gray-500 mb-3">{job.location}</div>

              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-green-600">
                  {job.salary}
                </span>
                <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium">
                  {job.type}
                </span>
              </div>

              <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium py-2 rounded-lg hover:opacity-90 transition">
                Apply Now
              </button>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No jobs found for “{query}”.
          </div>
        )}
      </div>
    </div>
  );
}
