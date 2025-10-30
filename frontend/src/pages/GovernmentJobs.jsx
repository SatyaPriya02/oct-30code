// import React from 'react'

// export default function GovernmentJobs() {
//   return (
//     <div className="container mx-auto px-4 pt-24 pb-10">
//       <h1 className="text-3xl font-bold mb-4">Government Jobs</h1>
//       <p className="text-gray-600 mb-4">Explore latest government job openings and exams.</p>
//       <div className="flex flex-wrap gap-2">
//         {[
//           'Railways','Police','Defence','Postal','PSUs','Civil Services','Banking','Public Administration','Education','Healthcare'
//         ].map((item) => (
//           <span key={item} className="px-3 py-1 rounded-full text-sm bg-indigo-50 text-indigo-700 border border-indigo-100">{item}</span>
//         ))}
//       </div>
//     </div>
//   )
// }






import React, { useState } from "react";

export default function GovernmentJobs() {
  const [query, setQuery] = useState("");

  // 🔹 Sample Government Job Listings
  const jobs = [
    {
      id: 1,
      title: "SSC CHSL 2025 (Clerk, DEO, Assistant)",
      department: "Staff Selection Commission (SSC)",
      salary: "₹25,500 – ₹81,100 /month",
      lastDate: "15 Dec 2025",
      location: "Pan India",
      desc: "Combined Higher Secondary Level (CHSL) exam for 12th pass candidates. Apply online.",
    },
    {
      id: 2,
      title: "UPSC Civil Services Exam 2025",
      department: "Union Public Service Commission (UPSC)",
      salary: "₹56,100 – ₹2,25,000 /month",
      lastDate: "26 Feb 2025",
      location: "All India",
      desc: "Recruitment for IAS, IPS, IFS, and other Group A posts. Graduates can apply.",
    },
    {
      id: 3,
      title: "Indian Railways RRB Technician 2025",
      department: "Indian Railways (RRB)",
      salary: "₹19,900 – ₹63,200 /month",
      lastDate: "20 Nov 2025",
      location: "All Zones",
      desc: "Recruitment for Technician Grade I & II posts. ITI/Diploma holders eligible.",
    },
    {
      id: 4,
      title: "State Police Constable Recruitment 2025",
      department: "Maharashtra Police Department",
      salary: "₹21,700 – ₹69,100 /month",
      lastDate: "10 Dec 2025",
      location: "Maharashtra",
      desc: "Police Constable vacancies for 12th pass candidates. Physical & written tests apply.",
    },
    {
      id: 5,
      title: "Bank PO & Clerk Exam 2025",
      department: "Institute of Banking Personnel Selection (IBPS)",
      salary: "₹30,000 – ₹60,000 /month",
      lastDate: "5 Jan 2026",
      location: "All India",
      desc: "IBPS recruitment for Public Sector Banks – PO and Clerk positions. Graduates eligible.",
    },
    {
      id: 6,
      title: "AIIMS Nursing Officer Recruitment",
      department: "All India Institute of Medical Sciences (AIIMS)",
      salary: "₹44,900 – ₹1,42,400 /month",
      lastDate: "22 Nov 2025",
      location: "Delhi, Bhopal, Rishikesh, Raipur",
      desc: "Staff Nurse/Nursing Officer recruitment across multiple AIIMS branches.",
    },
    {
      id: 7,
      title: "ISRO Junior Research Fellow",
      department: "Indian Space Research Organisation (ISRO)",
      salary: "₹37,000 /month",
      lastDate: "30 Nov 2025",
      location: "Bangalore, India",
      desc: "JRF position for postgraduate candidates in Physics, Engineering, or Computer Science.",
    },
    {
      id: 8,
      title: "DRDO Apprentice Trainee 2025",
      department: "Defence Research and Development Organisation (DRDO)",
      salary: "₹9,000 – ₹12,000 /month (Stipend)",
      lastDate: "12 Dec 2025",
      location: "Hyderabad, India",
      desc: "Apprenticeship for engineering and diploma graduates in multiple technical disciplines.",
    },
  ];

  // 🔹 Filter Jobs by Search Query
  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(query.toLowerCase()) ||
      job.department.toLowerCase().includes(query.toLowerCase()) ||
      job.desc.toLowerCase().includes(query.toLowerCase()) ||
      job.location.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 pt-24 pb-10">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-3 text-gray-900">Government Jobs</h1>
      <p className="text-gray-600 mb-6">
        Explore the latest government job notifications and exam updates.
      </p>

      {/* Search Bar */}
      <div className="max-w-xl mx-auto mb-10 relative">
        <input
          type="text"
          placeholder="Search for government jobs, exams, or departments..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full py-3 pl-12 pr-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 text-gray-800"
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

      {/* Categories */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {[
          "Railways",
          "Police",
          "Defence",
          "Postal",
          "PSUs",
          "Civil Services",
          "Banking",
          "Public Administration",
          "Education",
          "Healthcare",
        ].map((item) => (
          <button
            key={item}
            onClick={() => setQuery(item)}
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
              className="bg-white shadow-md rounded-xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                {job.title}
              </h2>
              <p className="text-sm text-gray-600 mb-1">{job.department}</p>
              <p className="text-gray-500 text-sm mb-3">{job.desc}</p>

              <div className="flex flex-wrap justify-between items-center mb-3 text-sm">
                <span className="text-green-600 font-medium">
                  💰 {job.salary}
                </span>
                <span className="text-gray-700">📍 {job.location}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  ⏰ Last Date: {job.lastDate}
                </span>
                <button className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white text-sm font-medium rounded-lg hover:opacity-90 transition">
                  Apply Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No government jobs found for “{query}”.
          </div>
        )}
      </div>
    </div>
  );
}
