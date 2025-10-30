// import React from 'react'

// export default function Marketplace() {
//   return (
//     <div className="container mx-auto px-4 pt-24 pb-10">
//       <h1 className="text-3xl font-bold mb-4">Marketplace</h1>
//       <p className="text-gray-600 mb-4">Buy and sell products with ease.</p>
//       <div className="flex flex-wrap gap-2">
//         {[
//           'Used Car Sales','Laptop Sales','Real Estate Listings','Home Appliances','Furniture',
//           'Mobile Phones','Tractors','Seeds & Fertilizers','Electronics','Vehicles'
//         ].map((item) => (
//           <span key={item} className="px-3 py-1 rounded-full text-sm bg-indigo-50 text-indigo-700 border border-indigo-100">{item}</span>
//         ))}
//       </div>
//     </div>
//   )
// }




import React, { useState } from "react";

export default function Marketplace() {
  const [query, setQuery] = useState("");

  // 🔹 Sample Marketplace Products
  const products = [
    {
      id: 1,
      title: "Used Maruti Suzuki Swift (2020)",
      seller: "AutoDeals Pvt Ltd",
      price: "₹4,50,000",
      category: "Used Car Sales",
      desc: "Well-maintained Swift VXI, single owner, 40,000 km driven. Insurance valid till Dec 2025.",
      location: "Pune, India",
      condition: "Excellent",
    },
    {
      id: 2,
      title: "Dell Inspiron Laptop (i5, 8GB RAM, 512GB SSD)",
      seller: "TechHub Resellers",
      price: "₹38,999",
      category: "Laptop Sales",
      desc: "Lightweight business laptop with Windows 11 and 15.6-inch display. 6-month warranty.",
      location: "Mumbai, India",
      condition: "Like New",
    },
    {
      id: 3,
      title: "2BHK Apartment for Sale",
      seller: "Prime Realty",
      price: "₹45,00,000",
      category: "Real Estate Listings",
      desc: "Spacious 2BHK flat with balcony and parking in Baner, Pune. Loan assistance available.",
      location: "Pune, India",
      condition: "New Property",
    },
    {
      id: 4,
      title: "Wooden Sofa Set (3+2+1)",
      seller: "HomeStyle Furniture",
      price: "₹22,000",
      category: "Furniture",
      desc: "Premium teak wood sofa with washable cushions. Free delivery in local area.",
      location: "Delhi, India",
      condition: "Good",
    },
    {
      id: 5,
      title: "iPhone 13 (128GB)",
      seller: "MobileMart India",
      price: "₹54,999",
      category: "Mobile Phones",
      desc: "Blue color, original charger included, 10-month old, great battery health.",
      location: "Hyderabad, India",
      condition: "Excellent",
    },
    {
      id: 6,
      title: "Tractor — Mahindra 575 DI XP Plus",
      seller: "AgroTraders",
      price: "₹5,90,000",
      category: "Tractors",
      desc: "Powerful 47 HP tractor, ideal for small and medium farms. Easy EMI options available.",
      location: "Nashik, India",
      condition: "Used",
    },
    {
      id: 7,
      title: "Organic Wheat Seeds (25kg pack)",
      seller: "AgriGrow Supplies",
      price: "₹1,200",
      category: "Seeds & Fertilizers",
      desc: "High-yield organic wheat seeds, suitable for dry and irrigated lands.",
      location: "Ahmedabad, India",
      condition: "New",
    },
    {
      id: 8,
      title: "LG Double Door Refrigerator (260L)",
      seller: "HomeAppliance Mart",
      price: "₹18,500",
      category: "Home Appliances",
      desc: "Energy-efficient 4-star rated refrigerator with fast cooling technology.",
      location: "Kolkata, India",
      condition: "Used",
    },
  ];

  // 🔹 Filter Products by Search Query
  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(query.toLowerCase()) ||
      product.seller.toLowerCase().includes(query.toLowerCase()) ||
      product.desc.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 pt-24 pb-10">
      {/* Page Header */}
      <h1 className="text-3xl font-bold mb-3 text-gray-900">Marketplace</h1>
      <p className="text-gray-600 mb-6">
        Buy and sell verified products safely and easily.
      </p>

      {/* Search Bar */}
      <div className="max-w-xl mx-auto mb-10 relative">
        <input
          type="text"
          placeholder="Search cars, laptops, furniture, electronics..."
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
          "Used Car Sales",
          "Laptop Sales",
          "Real Estate Listings",
          "Home Appliances",
          "Furniture",
          "Mobile Phones",
          "Tractors",
          "Seeds & Fertilizers",
          "Electronics",
          "Vehicles",
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

      {/* Product Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                {product.title}
              </h2>
              <p className="text-sm text-gray-600 mb-1">{product.seller}</p>
              <p className="text-gray-500 text-sm mb-3">{product.desc}</p>

              <div className="text-sm text-gray-500 mb-1">
                📍 {product.location}
              </div>

              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-green-600">
                  {product.price}
                </span>
                <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium">
                  {product.condition}
                </span>
              </div>

              <button className="w-full bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-medium py-2 rounded-lg hover:opacity-90 transition">
                View Details
              </button>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No products found for “{query}”.
          </div>
        )}
      </div>
    </div>
  );
}
