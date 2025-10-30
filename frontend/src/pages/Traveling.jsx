// import React from 'react'

// export default function Traveling() {
//   return (
//     <div className="container mx-auto px-4 pt-24 pb-10">
//       <h1 className="text-3xl font-bold mb-4">Travel & Bookings</h1>
//       <p className="text-gray-600 mb-4">Plan your perfect journey with hotels, tickets and cabs.</p>
//       <div className="flex flex-wrap gap-2">
//         {[
//           'Hotel Booking','Bus Tickets','Cab Rentals','Tour Packages','Event Tickets',
//           'Flight Bookings','Holiday Planning','Restaurant Reservations','Local Tours','Conference Bookings'
//         ].map((item) => (
//           <span key={item} className="px-3 py-1 rounded-full text-sm bg-indigo-50 text-indigo-700 border border-indigo-100">{item}</span>
//         ))}
//       </div>
//     </div>
//   )
// }




import React, { useState } from "react";

export default function Traveling() {
  const [query, setQuery] = useState("");

  // 🔹 Example Travel & Booking Listings
  const travelData = [
    {
      id: 1,
      title: "3N/4D Goa Holiday Package",
      provider: "MakeMyTrip",
      price: "₹18,499 /person",
      type: "Tour Package",
      location: "Goa, India",
      desc: "Includes 3-star hotel stay, airport transfers, breakfast, and sightseeing. Limited-time offer!",
    },
    {
      id: 2,
      title: "Luxury Hotel Stay at Taj Palace",
      provider: "Taj Hotels",
      price: "₹9,999 /night",
      type: "Hotel Booking",
      location: "New Delhi, India",
      desc: "Experience royal luxury and comfort. Complimentary breakfast & airport pickup included.",
    },
    {
      id: 3,
      title: "Pune to Mumbai Cab (One Way)",
      provider: "Ola Cabs",
      price: "₹2,200",
      type: "Cab Rental",
      location: "Pune → Mumbai",
      desc: "Comfortable sedan cab with professional driver. AC, sanitization, and 24/7 support.",
    },
    {
      id: 4,
      title: "Bangkok Flight (Return)",
      provider: "IndiGo Airlines",
      price: "₹28,499",
      type: "Flight Booking",
      location: "Delhi → Bangkok",
      desc: "Non-stop round-trip flight with meals included. Travel dates flexible for November 2025.",
    },
    {
      id: 5,
      title: "Kerala Backwater Cruise Tour",
      provider: "TravelWorld Agency",
      price: "₹15,999 /person",
      type: "Tour Package",
      location: "Alleppey, Kerala",
      desc: "2-night cruise in a luxury houseboat. All meals included. Ideal for couples & families.",
    },
    {
      id: 6,
      title: "Event Ticket: Coldplay Concert 2025",
      provider: "BookMyShow",
      price: "₹4,500",
      type: "Event Ticket",
      location: "Bangalore, India",
      desc: "Grab your VIP concert passes for Coldplay World Tour. Limited seats left!",
    },
    {
      id: 7,
      title: "Restaurant Reservation: Olive Bistro",
      provider: "Zomato Dining",
      price: "₹1,500 avg meal cost",
      type: "Dining Reservation",
      location: "Hyderabad, India",
      desc: "Book a table with a lakeside view and enjoy Mediterranean cuisine at its finest.",
    },
    {
      id: 8,
      title: "Manali Snow Adventure Trip",
      provider: "Thrillophilia",
      price: "₹12,499 /person",
      type: "Adventure Tour",
      location: "Manali, Himachal Pradesh",
      desc: "Includes paragliding, skiing, campfire nights, and 3-night hotel stay. Perfect winter getaway!",
    },
  ];

  // 🔹 Filter by Search Query
  const filteredTravel = travelData.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.provider.toLowerCase().includes(query.toLowerCase()) ||
      item.desc.toLowerCase().includes(query.toLowerCase()) ||
      item.type.toLowerCase().includes(query.toLowerCase()) ||
      item.location.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 pt-24 pb-10">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-3 text-gray-900">Travel & Bookings</h1>
      <p className="text-gray-600 mb-6">
        Plan your perfect journey — from hotels and flights to events and tours.
      </p>

      {/* Search Bar */}
      <div className="max-w-xl mx-auto mb-10 relative">
        <input
          type="text"
          placeholder="Search hotels, flights, tours, cabs..."
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
          "Hotel Booking",
          "Bus Tickets",
          "Cab Rentals",
          "Tour Packages",
          "Event Tickets",
          "Flight Bookings",
          "Holiday Planning",
          "Restaurant Reservations",
          "Local Tours",
          "Conference Bookings",
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

      {/* Travel Listings */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredTravel.length > 0 ? (
          filteredTravel.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                {item.title}
              </h2>
              <p className="text-sm text-gray-600 mb-1">{item.provider}</p>
              <p className="text-gray-500 text-sm mb-3">{item.desc}</p>

              <div className="flex flex-wrap justify-between items-center mb-3 text-sm">
                <span className="text-green-600 font-medium">💰 {item.price}</span>
                <span className="text-gray-700">📍 {item.location}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">{item.type}</span>
                <button className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white text-sm font-medium rounded-lg hover:opacity-90 transition">
                  Book Now
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
