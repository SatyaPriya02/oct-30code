// import React from 'react'

// export default function Freelancer() {
//   return (
//     <div className="container mx-auto px-4 pt-24 pb-10">
//       <h1 className="text-3xl font-bold mb-4">Freelance</h1>
//       <p className="text-gray-600 mb-4">Find and hire freelancers for your projects.</p>
//       <div className="flex flex-wrap gap-2">
//         {[
//           'Content Writer','Video Editor','Graphic Designer','Web Developer','Voice-over Artist',
//           'SEO Expert','Virtual Assistant','Consultant','Tutor','Translator'
//         ].map((item) => (
//           <span key={item} className="px-3 py-1 rounded-full text-sm bg-indigo-50 text-indigo-700 border border-indigo-100">{item}</span>
//         ))}
//       </div>
//     </div>
//   )
// }





import React, { useState } from "react";

export default function Freelancer() {
  const [query, setQuery] = useState("");

  // 🔹 Sample Freelance Gigs
  const gigs = [
    {
      id: 1,
      title: "Content Writer for Tech Blog",
      client: "Innovate Media",
      budget: "₹10,000 - ₹15,000",
      type: "Remote",
      desc: "Looking for an experienced writer to create 4 SEO-optimized articles per month on emerging technologies.",
    },
    {
      id: 2,
      title: "Logo & Branding Design",
      client: "Creative Minds Studio",
      budget: "₹5,000 - ₹8,000",
      type: "One-time Project",
      desc: "Need a modern logo and color palette for a new wellness startup. Quick turnaround preferred.",
    },
    {
      id: 3,
      title: "Video Editing for YouTube Channel",
      client: "TechGuru India",
      budget: "₹12,000/month",
      type: "Part-time",
      desc: "Edit 4-5 tech review videos weekly, add transitions, captions, and thumbnails.",
    },
    {
      id: 4,
      title: "React Frontend Developer (Freelance)",
      client: "CloudBase Labs",
      budget: "₹50,000/project",
      type: "Remote",
      desc: "Build dashboard UI components using React + Tailwind for internal SaaS tools.",
    },
    {
      id: 5,
      title: "Voice-over Artist (English & Hindi)",
      client: "AdStudio Agency",
      budget: "₹2,000/minute",
      type: "Freelance",
      desc: "Provide professional-quality voiceovers for ad scripts and explainer videos.",
    },
    {
      id: 6,
      title: "SEO Optimization Expert",
      client: "BrandLift Pvt Ltd",
      budget: "₹25,000/project",
      type: "Remote",
      desc: "Improve Google rankings for 3 client websites. Experience with Ahrefs or SEMrush required.",
    },
  ];

  // 🔹 Filter gigs by query
  const filteredGigs = gigs.filter(
    (gig) =>
      gig.title.toLowerCase().includes(query.toLowerCase()) ||
      gig.client.toLowerCase().includes(query.toLowerCase()) ||
      gig.desc.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 pt-24 pb-10">
      {/* Page Header */}
      <h1 className="text-3xl font-bold mb-3 text-gray-900">Freelance Opportunities</h1>
      <p className="text-gray-600 mb-6">
        Find skilled freelancers or explore freelance gigs that match your expertise.
      </p>

      {/* Search Bar */}
      <div className="max-w-xl mx-auto mb-10 relative">
        <input
          type="text"
          placeholder="Search for gigs or freelancers..."
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

      {/* Popular Freelance Skills */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {[
          "Content Writer",
          "Video Editor",
          "Graphic Designer",
          "Web Developer",
          "Voice-over Artist",
          "SEO Expert",
          "Virtual Assistant",
          "Consultant",
          "Tutor",
          "Translator",
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

      {/* Freelance Job Listings */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredGigs.length > 0 ? (
          filteredGigs.map((gig) => (
            <div
              key={gig.id}
              className="bg-white shadow-md rounded-xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <h2 className="text-lg font-semibold text-gray-900 mb-1">{gig.title}</h2>
              <p className="text-sm text-gray-600 mb-2">{gig.client}</p>
              <p className="text-gray-500 text-sm mb-4">{gig.desc}</p>

              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-green-600">{gig.budget}</span>
                <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium">
                  {gig.type}
                </span>
              </div>

              <button className="w-full bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-medium py-2 rounded-lg hover:opacity-90 transition">
                Apply Now
              </button>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No freelance gigs found for “{query}”.
          </div>
        )}
      </div>
    </div>
  );
}
