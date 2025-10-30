// import React from 'react'

// export default function Agriculture() {
//   return (
//     <div className="container mx-auto px-4 pt-24 pb-10">
//       <h1 className="text-3xl font-bold mb-4">Agriculture</h1>
//       <p className="text-gray-600 mb-4">Empowering farmers and agribusiness with jobs, tools and marketplaces.</p>
//       <div className="flex flex-wrap gap-2">
//         {[
//           'Crop Sales','Farm Jobs','Agri Tools Rental','Seed Distribution','Organic Farming',
//           'Agri Equipment Sales','Irrigation Services','Fertilizer Supply','Food Processing','Rural Jobs'
//         ].map((item) => (
//           <span key={item} className="px-3 py-1 rounded-full text-sm bg-indigo-50 text-indigo-700 border border-indigo-100">{item}</span>
//         ))}
//       </div>
//     </div>
//   )
// }





import React, { useState } from "react";

export default function Agriculture() {
  const [query, setQuery] = useState("");

  // 🔹 Agriculture Jobs & Listings
  const agriListings = [
    {
      id: 1,
      title: "Farm Supervisor",
      company: "GreenLeaf Organics",
      salary: "₹25,000 – ₹35,000 /month",
      type: "Full-time",
      location: "Nashik, Maharashtra",
      desc: "Supervise daily farming operations, coordinate with workers, and maintain crop quality.",
    },
    {
      id: 2,
      title: "Agriculture Field Officer",
      company: "AgriBank India",
      salary: "₹40,000 – ₹50,000 /month",
      type: "Contract",
      location: "Lucknow, Uttar Pradesh",
      desc: "Field-level role promoting agricultural loans and farmer awareness programs.",
    },
    {
      id: 3,
      title: "Tractor Operator (Experienced)",
      company: "AgroTech Farms",
      salary: "₹18,000 – ₹22,000 /month",
      type: "Full-time",
      location: "Indore, Madhya Pradesh",
      desc: "Operate tractors and other farming machinery for field plowing and harvesting.",
    },
    {
      id: 4,
      title: "Agri Tools Rental Service",
      company: "FarmEase Equipment",
      salary: "Starting ₹500/day",
      type: "Rental Service",
      location: "Pune, Maharashtra",
      desc: "Rent high-quality farming equipment such as tillers, sprayers, and harvesters.",
    },
    {
      id: 5,
      title: "Organic Farm Consultant",
      company: "Nature’s Way Consulting",
      salary: "₹45,000 /month",
      type: "Consulting",
      location: "Remote / Field Visits",
      desc: "Provide expert advice to farmers on organic practices, soil health, and certification.",
    },
    {
      id: 6,
      title: "Seed Sales Executive",
      company: "AgriGrow Seeds Pvt. Ltd.",
      salary: "₹28,000 + Incentives",
      type: "Sales Role",
      location: "Ahmedabad, Gujarat",
      desc: "Promote hybrid and organic seed products to retailers and local distributors.",
    },
    {
      id: 7,
      title: "Irrigation Technician",
      company: "JalSarthi Solutions",
      salary: "₹20,000 – ₹30,000 /month",
      type: "Field Job",
      location: "Nagpur, Maharashtra",
      desc: "Install and maintain drip irrigation systems for farmers and greenhouses.",
    },
    {
      id: 8,
      title: "Agri E-commerce Manager",
      company: "FarmKart",
      salary: "₹50,000 – ₹70,000 /month",
      type: "Full-time",
      location: "Bangalore, Karnataka",
      desc: "Manage online agri sales, logistics, and digital marketing for farm tools and fertilizers.",
    },
  ];

  // 🔹 Filter Results by Search
  const filteredAgri = agriListings.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.company.toLowerCase().includes(query.toLowerCase()) ||
      item.desc.toLowerCase().includes(query.toLowerCase()) ||
      item.location.toLowerCase().includes(query.toLowerCase()) ||
      item.type.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 pt-24 pb-10">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-3 text-gray-900">Agriculture</h1>
      <p className="text-gray-600 mb-6">
        Empowering farmers and agribusiness with jobs, tools, and opportunities.
      </p>

      {/* Search Bar */}
      <div className="max-w-xl mx-auto mb-10 relative">
        <input
          type="text"
          placeholder="Search farm jobs, agri tools, seeds, or services..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full py-3 pl-12 pr-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-600 text-gray-800"
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
          "Crop Sales",
          "Farm Jobs",
          "Agri Tools Rental",
          "Seed Distribution",
          "Organic Farming",
          "Agri Equipment Sales",
          "Irrigation Services",
          "Fertilizer Supply",
          "Food Processing",
          "Rural Jobs",
        ].map((item) => (
          <button
            key={item}
            onClick={() => setQuery(item)}
            className="px-3 py-1.5 rounded-full text-sm bg-green-50 text-green-700 border border-green-100 hover:bg-green-100 transition"
          >
            {item}
          </button>
        ))}
      </div>

      {/* Agri Job & Service Listings */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredAgri.length > 0 ? (
          filteredAgri.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                {item.title}
              </h2>
              <p className="text-sm text-gray-600 mb-1">{item.company}</p>
              <p className="text-gray-500 text-sm mb-3">{item.desc}</p>

              <div className="flex flex-wrap justify-between items-center mb-3 text-sm">
                <span className="text-green-600 font-medium">💰 {item.salary}</span>
                <span className="text-gray-700">📍 {item.location}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">{item.type}</span>
                <button className="px-4 py-2 bg-gradient-to-r from-green-600 to-lime-500 text-white text-sm font-medium rounded-lg hover:opacity-90 transition">
                  Apply Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No results found for “{query}”.
          </div>
        )}
      </div>
    </div>
  );
}
