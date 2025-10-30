// import React from 'react'

// export default function Service() {
//   return (
//     <div className="container mx-auto px-4 pt-24 pb-10">
//       <h1 className="text-3xl font-bold mb-4">Services</h1>
//       <p className="text-gray-600 mb-4">Professional services at your fingertips.</p>
//       <div className="flex flex-wrap gap-2">
//         {[
//           'Home Cleaning','AC Repair','Event Planning','IT Consulting','Tax Consultant',
//           'Career Counseling','Web Design','Fitness Trainer','Digital Marketing','Photography'
//         ].map((item) => (
//           <span key={item} className="px-3 py-1 rounded-full text-sm bg-indigo-50 text-indigo-700 border border-indigo-100">{item}</span>
//         ))}
//       </div>
//     </div>
//   )
// }





import React, { useState } from "react";

export default function Service() {
  const [query, setQuery] = useState("");

  // 🔹 Example service listings
  const services = [
    {
      id: 1,
      title: "Home Deep Cleaning",
      provider: "SparklePro Cleaners",
      price: "₹2,499",
      type: "On-site",
      desc: "Professional home deep cleaning for 2BHK/3BHK apartments using eco-friendly products.",
    },
    {
      id: 2,
      title: "AC Repair & Maintenance",
      provider: "CoolTech Solutions",
      price: "₹699 per visit",
      type: "On-site",
      desc: "Experienced AC technicians available for split/window AC repair and regular servicing.",
    },
    {
      id: 3,
      title: "Event Planning & Decoration",
      provider: "DreamEvents India",
      price: "₹15,000 onwards",
      type: "Hybrid",
      desc: "Complete event management — birthday, wedding, and corporate events handled with creativity.",
    },
    {
      id: 4,
      title: "Tax Consultation",
      provider: "FinServe Advisors",
      price: "₹999 per session",
      type: "Online",
      desc: "Certified tax experts to help you with ITR filing, GST, and financial planning.",
    },
    {
      id: 5,
      title: "Career Counseling",
      provider: "NextStep Careers",
      price: "₹499/session",
      type: "Online",
      desc: "Get personalized career guidance and resume feedback from HR experts.",
    },
    {
      id: 6,
      title: "Personal Fitness Training",
      provider: "FitZone Trainers",
      price: "₹1,200/hour",
      type: "On-site/Online",
      desc: "Certified personal trainers for home and virtual sessions. Customized fitness plans included.",
    },
    {
      id: 7,
      title: "Photography & Videography",
      provider: "LensCraft Studios",
      price: "₹5,000/day",
      type: "On-site",
      desc: "Professional wedding, event, and product photography services with editing included.",
    },
    {
      id: 8,
      title: "Digital Marketing Services",
      provider: "AdBoost Media",
      price: "₹20,000/month",
      type: "Remote",
      desc: "SEO, Google Ads, and social media management for growing your business online.",
    },
  ];

  // 🔹 Filter services by search query
  const filteredServices = services.filter(
    (service) =>
      service.title.toLowerCase().includes(query.toLowerCase()) ||
      service.provider.toLowerCase().includes(query.toLowerCase()) ||
      service.desc.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 pt-24 pb-10">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-3 text-gray-900">Professional Services</h1>
      <p className="text-gray-600 mb-6">
        Book trusted professionals for your home, business, or personal needs.
      </p>

      {/* Search Bar */}
      <div className="max-w-xl mx-auto mb-10 relative">
        <input
          type="text"
          placeholder="Search for cleaning, repair, consulting, etc..."
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

      {/* Popular Service Categories */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {[
          "Home Cleaning",
          "AC Repair",
          "Event Planning",
          "IT Consulting",
          "Tax Consultant",
          "Career Counseling",
          "Web Design",
          "Fitness Trainer",
          "Digital Marketing",
          "Photography",
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

      {/* Services List */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-md rounded-xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                {service.title}
              </h2>
              <p className="text-sm text-gray-600 mb-1">{service.provider}</p>
              <p className="text-gray-500 text-sm mb-4">{service.desc}</p>

              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-green-600">
                  {service.price}
                </span>
                <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium">
                  {service.type}
                </span>
              </div>

              <button className="w-full bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-medium py-2 rounded-lg hover:opacity-90 transition">
                Book Service
              </button>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No services found for “{query}”.
          </div>
        )}
      </div>
    </div>
  );
}
