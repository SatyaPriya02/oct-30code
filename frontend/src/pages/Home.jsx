// import React, { useState } from 'react'
// import SearchBar from '../components/SearchBar'
// import VoiceAssist from '../components/VoiceAssist'
// import JobCard from '../components/JobCard'
// import Chatbot from '../components/Chatbot'
// import { api } from '../api/api'

// export default function Home() {
//   const [query, setQuery] = useState('')
//   const [jobs, setJobs] = useState([{
//     id:1,
//     title: 'Frontend Developer',
//     description: 'Build UIs using React and Tailwind.',
//     location: 'Remote',
//     salary: '₹30,000 - ₹50,000',
//     type: 'Full-time'
//   }])

//   const onSearch = async () => {
//     try {
//       const r = await api.get('/jobs', { params: { search: query } })
//       if (r.data?.length) setJobs(r.data)
//     } catch {
//       setJobs(j => j.filter(job => job.title.toLowerCase().includes(query.toLowerCase()) || !query))
//     }
//   }

//   return (
//     <div
//   className="flex flex-col items-center justify-center text-center bg-gradient-to-b from-white via-sky-50 to-white px-4 px-150"
//   style={{ height: "calc(100vh - 5rem)" }} // full height minus fixed navbar (h-20 = 5rem)
// >
//   {/* Search Section */}
//   <div className="flex items-center justify-center gap-4 mb-8">
//     <VoiceAssist onResult={(text) => setQuery(text)} />
//     <SearchBar query={query} setQuery={setQuery} onSearch={onSearch} />
//   </div>

//   {/* Job Card Section */}
//   <div className="w-full max-w-3xl">
//     <JobCard job={jobs[0]} />
//   </div>

//   {/* Floating Chatbot (bottom-right corner) */}
//   <div className="fixed bottom-6 right-6 z-50">
//     <Chatbot />
//   </div>
// </div>

//   )
// }



// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { api } from "../api/api";
// import Chatbot from "../components/Chatbot";
// import VoiceAssist from "../components/VoiceAssist";
// import JobCard from "../components/JobCard";

// export default function Home() {
//   const [query, setQuery] = useState("");
//   const [jobs, setJobs] = useState([
//     {
//       id: 1,
//       title: "Frontend Developer",
//       description: "Build responsive UIs using React and Tailwind CSS.",
//       location: "Remote",
//       salary: "₹30,000 - ₹50,000",
//       type: "Full-time",
//     },
//   ]);

//   const onSearch = async () => {
//     try {
//       const r = await api.get("/jobs", { params: { search: query } });
//       if (Array.isArray(r.data) && r.data.length) setJobs(r.data);
//     } catch {
//       setJobs((prev) =>
//         prev.filter(
//           (job) =>
//             !query ||
//             job.title.toLowerCase().includes(query.toLowerCase()) ||
//             job.description.toLowerCase().includes(query.toLowerCase())
//         )
//       );
//     }
//   };

//   const phrases = [
//     "Find Your Dream Job",
//     "Hire Top Talent",
//     "Buy & Sell Products",
//     "Book Services",
//     "Plan Your Travel",
//     "Grow Your Farm",
//     "Secure Government Jobs",
//   ];
//   const [text, setText] = useState("");
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [loopNum, setLoopNum] = useState(0);
//   const [typingSpeed, setTypingSpeed] = useState(150);

//   useEffect(() => {
//     let mounted = true;

//     const handleTyping = () => {
//       const current = loopNum % phrases.length;
//       const fullText = phrases[current];

//       setText((prev) =>
//         !isDeleting ? fullText.substring(0, prev.length + 1) : fullText.substring(0, Math.max(0, prev.length - 1))
//       );

//       setTypingSpeed(isDeleting ? 50 : 150);

//       if (!isDeleting && text === fullText) {
//         setTimeout(() => { if (mounted) setIsDeleting(true); }, 1200);
//         return;
//       }

//       if (isDeleting && text === "") {
//         setIsDeleting(false);
//         setLoopNum((n) => n + 1);
//         return;
//       }
//     };

//     const t = setTimeout(handleTyping, typingSpeed);
//     return () => { mounted = false; clearTimeout(t); };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [text, isDeleting, loopNum, typingSpeed]);

//   const navigate = useNavigate();

//   // category cards data
//   const categories = [
//     {
//       key: "jobs",
//       title: "Jobs & Careers",
//       desc: "Find your dream job or hire top talent",
//       color: "from-blue-500 to-cyan-500",
//       pills: ["Software Developer", "AI Engineer", "UI/UX Designer"],
//       to: "/jobs",
//       icon: (
//         <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
//           <path d="M7 7V6a3 3 0 013-3h4a3 3 0 013 3v1h2a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2h2zm2-1a1 1 0 001-1h4a1 1 0 001 1v1H9V6z" />
//         </svg>
//       ),
//     },
//     {
//       key: "freelancer",
//       title: "Freelance",
//       desc: "Connect with skilled freelancers worldwide",
//       color: "from-green-500 to-emerald-500",
//       pills: ["Content Writer", "Video Editor", "Graphic Designer"],
//       to: "/freelancer",
//       icon: (
//         <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
//           <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm-7 9a7 7 0 0114 0H5z" />
//         </svg>
//       ),
//     },
//     {
//       key: "marketplace",
//       title: "Marketplace",
//       desc: "Buy and sell products with ease",
//       color: "from-orange-500 to-red-500",
//       pills: ["Used Car Sales", "Laptop Sales", "Real Estate"],
//       to: "/marketplace",
//       icon: (
//         <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
//           <path d="M3 9l1-5h16l1 5H3zm0 2h18l-2 9H5l-2-9z" />
//         </svg>
//       ),
//     },
//     {
//       key: "service",
//       title: "Services",
//       desc: "Professional services at your fingertips",
//       color: "from-fuchsia-500 to-pink-500",
//       pills: ["Home Cleaning", "AC Repair", "Event Planning"],
//       to: "/service",
//       icon: (
//         <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
//           <path d="M4 4h16v4H4zM7 8h10l1 12H6L7 8z" />
//         </svg>
//       ),
//     },
//     {
//       key: "travel",
//       title: "Travel & Bookings",
//       desc: "Plan your perfect journey",
//       color: "from-sky-500 to-indigo-500",
//       pills: ["Hotel Booking", "Bus Tickets", "Cab Rentals"],
//       to: "/travel",
//       icon: (
//         <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
//           <path d="M2 16l20-5-8 8-2-5-8 2z" />
//         </svg>
//       ),
//     },
//     {
//       key: "agri",
//       title: "Agriculture",
//       desc: "Empowering farmers and agribusiness",
//       color: "from-lime-500 to-green-600",
//       pills: ["Crop Sales", "Farm Jobs", "Agri Tools Rental"],
//       to: "/agri",
//       icon: (
//         <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
//           <path d="M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7z" />
//         </svg>
//       ),
//     },
//   ];

//   return (
//     <div className="w-full">
//       {/* HERO — exact viewport height so it looks full-screen */}
//       <section className="w-full h-screen flex items-center bg-gray-50">
//         <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6 justify-center">
//             <svg className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
//               <path d="M13 2L3 14h7l-1 8 11-14h-8l1-6z" />
//             </svg>
//             <span className="text-sm font-semibold text-blue-600">AI-Powered Platform</span>
//           </div>

//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
//             <span className="block mb-2">Welcome to</span>
//             <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent">
//               WorkVerse
//             </span>
//           </h1>

//           <div className="h-20 mb-6">
//             <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700">
//               {text}
//               <span className="animate-blink">|</span>
//             </p>
//           </div>

//           <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
//             Your unified platform for Jobs, Freelance, Marketplace, Services, Travel, Agriculture, and Government opportunities.
//             <span className="block mt-2 font-semibold text-blue-600">Search with your voice or chat!</span>
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
//             <div className="relative flex-1 w-full">
//               <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
//                 <circle cx="11" cy="11" r="7" />
//                 <path d="M20 20l-3.5-3.5" />
//               </svg>
//               <input
//                 type="text"
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 onKeyDown={(e) => e.key === "Enter" && onSearch()}
//                 placeholder="Search jobs, products, services..."
//                 className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-300 text-lg"
//               />
//             </div>

//             <button
//               onClick={onSearch}
//               className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:shadow-md transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
//             >
//               <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
//                 <path d="M3 17l6-6 4 4 7-7" />
//                 <path d="M14 7h7v7" />
//               </svg>
//               Get Started
//             </button>
//           </div>

//           <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
//             {[
//               { label: "Active Jobs", value: "50K+" },
//               { label: "Freelancers", value: "100K+" },
//               { label: "Products", value: "500K+" },
//               { label: "Services", value: "10K+" },
//             ].map((stat, idx) => (
//               <div key={idx}>
//                 <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
//                   {stat.value}
//                 </div>
//                 <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* BELOW HERO CONTENT (visible after scroll) */}
//       <main className="w-full bg-white">
//         <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-12">
//           <div className="mt-6 w-full max-w-3xl mx-auto">
//             <JobCard job={jobs[0]} />
//           </div>

//           <div className="mt-10">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {categories.map((c) => (
//                 <div
//                   key={c.key}
//                   className="group bg-white rounded-2xl shadow hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:-translate-y-1"
//                 >
//                   <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl text-white bg-gradient-to-br ${c.color} mb-4`}>
//                     {c.icon}
//                   </div>
//                   <h3 className="text-xl font-semibold mb-1">{c.title}</h3>
//                   <p className="text-gray-600 mb-4">{c.desc}</p>

//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {c.pills.map((p) => (
//                       <span key={p} className="px-3 py-1 rounded-full text-xs bg-gray-100 text-gray-700">{p}</span>
//                     ))}
//                     <span className="px-3 py-1 rounded-full text-xs bg-gray-100 text-gray-700">+7 more</span>
//                   </div>

//                   <div className="flex items-center justify-between">
//                     <button
//                       onClick={() => navigate(c.to)}
//                       className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium group-hover:shadow-lg transition"
//                     >
//                       Explore
//                       <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
//                         <path d="M5 12h14M13 5l7 7-7 7" />
//                       </svg>
//                     </button>

//                     <div className="text-sm text-gray-500">Explore more</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </main>

      {/* Application form is now a dedicated page at /apply/:jobId */}

//       {/* Floating Buttons */}
//       <div className="fixed bottom-6 left-6 z-50">
//         <div className="bg-green-500 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center">
//           <Chatbot />
//         </div>
//       </div>

//       <div className="fixed bottom-6 right-6 z-50">
//         <button type="button" aria-label="Voice assist" className="bg-gradient-to-br from-indigo-600 to-sky-500 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center">
//           <VoiceAssist onResult={(t) => setQuery(t)} />
//         </button>
//       </div>
//     </div>
//   );
// }







// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { api } from "../api/api";
// import Chatbot from "../components/Chatbot";
// import VoiceAssist from "../components/VoiceAssist";
// import JobCard from "../components/JobCard";

// export default function Home() {
//   const [query, setQuery] = useState("");
//   const [jobs, setJobs] = useState([
//     {
//       id: 1,
//       title: "Frontend Developer",
//       description: "Build responsive UIs using React and Tailwind CSS.",
//       location: "Remote",
//       salary: "₹30,000 - ₹50,000",
//       type: "Full-time",
//     },
//   ]);

//   const onSearch = async () => {
//     try {
//       const r = await api.get("/jobs", { params: { search: query } });
//       if (Array.isArray(r.data) && r.data.length) setJobs(r.data);
//     } catch {
//       setJobs((prev) =>
//         prev.filter(
//           (job) =>
//             !query ||
//             job.title.toLowerCase().includes(query.toLowerCase()) ||
//             job.description.toLowerCase().includes(query.toLowerCase())
//         )
//       );
//     }
//   };

//   const phrases = [
//     "Find Your Dream Job",
//     "Hire Top Talent",
//     "Buy & Sell Products",
//     "Book Services",
//     "Plan Your Travel",
//     "Grow Your Farm",
//     "Secure Government Jobs",
//   ];
//   const [text, setText] = useState("");
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [loopNum, setLoopNum] = useState(0);
//   const [typingSpeed, setTypingSpeed] = useState(150);

//   useEffect(() => {
//     let mounted = true;

//     const handleTyping = () => {
//       const current = loopNum % phrases.length;
//       const fullText = phrases[current];

//       setText((prev) =>
//         !isDeleting ? fullText.substring(0, prev.length + 1) : fullText.substring(0, Math.max(0, prev.length - 1))
//       );

//       setTypingSpeed(isDeleting ? 50 : 150);

//       if (!isDeleting && text === fullText) {
//         setTimeout(() => { if (mounted) setIsDeleting(true); }, 1200);
//         return;
//       }

//       if (isDeleting && text === "") {
//         setIsDeleting(false);
//         setLoopNum((n) => n + 1);
//         return;
//       }
//     };

//     const t = setTimeout(handleTyping, typingSpeed);
//     return () => { mounted = false; clearTimeout(t); };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [text, isDeleting, loopNum, typingSpeed]);

//   const navigate = useNavigate();

//   // category cards data
//   const categories = [
//     {
//       key: "jobs",
//       title: "Jobs & Careers",
//       desc: "Find your dream job or hire top talent",
//       color: "from-blue-500 to-cyan-500",
//       pills: ["Software Developer", "AI Engineer", "UI/UX Designer"],
//       to: "/jobs",
//       icon: (
//         <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
//           <path d="M7 7V6a3 3 0 013-3h4a3 3 0 013 3v1h2a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2h2zm2-1a1 1 0 001-1h4a1 1 0 001 1v1H9V6z" />
//         </svg>
//       ),
//     },
//     {
//       key: "freelancer",
//       title: "Freelance",
//       desc: "Connect with skilled freelancers worldwide",
//       color: "from-green-500 to-emerald-500",
//       pills: ["Content Writer", "Video Editor", "Graphic Designer"],
//       to: "/freelancer",
//       icon: (
//         <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
//           <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm-7 9a7 7 0 0114 0H5z" />
//         </svg>
//       ),
//     },
//     {
//       key: "marketplace",
//       title: "Marketplace",
//       desc: "Buy and sell products with ease",
//       color: "from-orange-500 to-red-500",
//       pills: ["Used Car Sales", "Laptop Sales", "Real Estate"],
//       to: "/marketplace",
//       icon: (
//         <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
//           <path d="M3 9l1-5h16l1 5H3zm0 2h18l-2 9H5l-2-9z" />
//         </svg>
//       ),
//     },
//     {
//       key: "service",
//       title: "Services",
//       desc: "Professional services at your fingertips",
//       color: "from-fuchsia-500 to-pink-500",
//       pills: ["Home Cleaning", "AC Repair", "Event Planning"],
//       to: "/service",
//       icon: (
//         <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
//           <path d="M4 4h16v4H4zM7 8h10l1 12H6L7 8z" />
//         </svg>
//       ),
//     },
//     {
//       key: "travel",
//       title: "Travel & Bookings",
//       desc: "Plan your perfect journey",
//       color: "from-sky-500 to-indigo-500",
//       pills: ["Hotel Booking", "Bus Tickets", "Cab Rentals"],
//       to: "/travel",
//       icon: (
//         <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
//           <path d="M2 16l20-5-8 8-2-5-8 2z" />
//         </svg>
//       ),
//     },
//     {
//       key: "agri",
//       title: "Agriculture",
//       desc: "Empowering farmers and agribusiness",
//       color: "from-lime-500 to-green-600",
//       pills: ["Crop Sales", "Farm Jobs", "Agri Tools Rental"],
//       to: "/agri",
//       icon: (
//         <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
//           <path d="M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7z" />
//         </svg>
//       ),
//     },
//   ];

//   return (
//     <div className="w-full">
//       {/* HERO — exact viewport height so it looks full-screen */}
//       <section className="w-full h-screen flex items-center bg-gray-50">
//         <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6 justify-center">
//             <svg className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
//               <path d="M13 2L3 14h7l-1 8 11-14h-8l1-6z" />
//             </svg>
//             <span className="text-sm font-semibold text-blue-600">AI-Powered Platform</span>
//           </div>

//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
//             <span className="block mb-2">Welcome to</span>
//             <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent">
//               WorkVerse
//             </span>
//           </h1>

//           <div className="h-20 mb-6">
//             <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700">
//               {text}
//               <span className="animate-blink">|</span>
//             </p>
//           </div>

//           <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
//             Your unified platform for Jobs, Freelance, Marketplace, Services, Travel, Agriculture, and Government opportunities.
//             <span className="block mt-2 font-semibold text-blue-600">Search with your voice or chat!</span>
//           </p>

//           {/* Search + Voice area */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
//             <div className="relative flex-1 w-full">
//               {/* search icon */}
//               <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
//                 <circle cx="11" cy="11" r="7" />
//                 <path d="M20 20l-3.5-3.5" />
//               </svg>

//               {/* input */}
//               <input
//                 type="text"
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 onKeyDown={(e) => e.key === "Enter" && onSearch()}
//                 placeholder="Search jobs, products, services..."
//                 className="w-full pl-12 pr-36 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-300 text-lg"
//                 aria-label="Search jobs"
//               />

//               {/* VoiceAssist button positioned inside input (right side) */}
//               <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
//                 <button
//                   type="button"
//                   aria-label="Start voice input"
//                   className="w-12 h-12 rounded-lg flex items-center justify-center bg-white border shadow-sm hover:shadow-md transition"
//                 >
//                   {/* VoiceAssist component triggers and returns text via setQuery */}
//                   <VoiceAssist onResult={(t) => setQuery(t)} />
//                 </button>

//                 {/* Search button next to voice inside same block for compact look */}
//                 <button
//                   onClick={onSearch}
//                   className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:shadow-md transition"
//                 >
//                   Search
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
//             {[
//               { label: "Active Jobs", value: "50K+" },
//               { label: "Freelancers", value: "100K+" },
//               { label: "Products", value: "500K+" },
//               { label: "Services", value: "10K+" },
//             ].map((stat, idx) => (
//               <div key={idx}>
//                 <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
//                   {stat.value}
//                 </div>
//                 <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* BELOW HERO CONTENT (visible after scroll) */}
//       <main className="w-full bg-white">
//         <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-12">
//           <div className="mt-6 w-full max-w-3xl mx-auto">
//             <JobCard job={jobs[0]} />
//           </div>

//           <div className="mt-10">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {categories.map((c) => (
//                 <div
//                   key={c.key}
//                   className="group bg-white rounded-2xl shadow hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:-translate-y-1"
//                 >
//                   <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl text-white bg-gradient-to-br ${c.color} mb-4`}>
//                     {c.icon}
//                   </div>
//                   <h3 className="text-xl font-semibold mb-1">{c.title}</h3>
//                   <p className="text-gray-600 mb-4">{c.desc}</p>

//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {c.pills.map((p) => (
//                       <span key={p} className="px-3 py-1 rounded-full text-xs bg-gray-100 text-gray-700">{p}</span>
//                     ))}
//                     <span className="px-3 py-1 rounded-full text-xs bg-gray-100 text-gray-700">+7 more</span>
//                   </div>

//                   <div className="flex items-center justify-between">
//                     <button
//                       onClick={() => navigate(c.to)}
//                       className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium group-hover:shadow-lg transition"
//                     >
//                       Explore
//                       <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
//                         <path d="M5 12h14M13 5l7 7-7 7" />
//                       </svg>
//                     </button>

//                     <div className="text-sm text-gray-500">Explore more</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Chatbot button — moved to right bottom corner */}
//      {/* Floating Chatbot button — colorful & opens your existing Chatbot */}
// <div className="fixed bottom-6 right-6 z-50">
//   <button
//     className="relative w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 
//                text-white shadow-2xl flex items-center justify-center transition-transform transform 
//                hover:scale-110 hover:shadow-[0_0_25px_rgba(255,105,180,0.7)] focus:outline-none"
//     aria-label="Chatbot"
//   >
//     <span className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-orange-400 opacity-75 animate-ping"></span>

//     {/* Chat icon */}
//     <svg
//       className="w-7 h-7 relative z-10"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="white"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.5 8.5 0 018.5 8.5z" />
//     </svg>
//   </button>

//   {/* Render Chatbot normally so it's visible when active */}
//   <Chatbot />
// </div>

//     </div>
//   );
// }





import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";
import Chatbot from "../components/Chatbot";
import VoiceAssist from "../components/VoiceAssist";
import JobCard from "../components/JobCard";

export default function Home() {
  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Frontend Developer",
      description: "Build responsive UIs using React and Tailwind CSS.",
      location: "Remote",
      salary: "₹30,000 - ₹50,000",
      type: "Full-time",
    },
  ]);

  const [chatOpen, setChatOpen] = useState(false);
  // apply flow via route navigation now

  const onSearch = async () => {
    try {
      const r = await api.get("/jobs", { params: { search: query } });
      if (Array.isArray(r.data) && r.data.length) setJobs(r.data);
    } catch {
      setJobs((prev) =>
        prev.filter(
          (job) =>
            !query ||
            job.title.toLowerCase().includes(query.toLowerCase()) ||
            job.description.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  };

  const phrases = [
    "Find Your Dream Job",
    "Hire Top Talent",
    "Buy & Sell Products",
    "Book Services",
    "Plan Your Travel",
    "Grow Your Farm",
    "Secure Government Jobs",
  ];
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let mounted = true;

    const handleTyping = () => {
      const current = loopNum % phrases.length;
      const fullText = phrases[current];

      setText((prev) =>
        !isDeleting ? fullText.substring(0, prev.length + 1) : fullText.substring(0, Math.max(0, prev.length - 1))
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => { if (mounted) setIsDeleting(true); }, 1200);
        return;
      }

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum((n) => n + 1);
        return;
      }
    };

    const t = setTimeout(handleTyping, typingSpeed);
    return () => { mounted = false; clearTimeout(t); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, isDeleting, loopNum, typingSpeed]);

  // toggle body class when chat panel opens so we can hide any duplicate floating widget
  useEffect(() => {
    if (chatOpen) {
      document.body.classList.add("chat-open");
    } else {
      document.body.classList.remove("chat-open");
    }
    return () => {
      document.body.classList.remove("chat-open");
    };
  }, [chatOpen]);

  const navigate = useNavigate();

  // category cards data
  const categories = [
    {
      key: "jobs",
      title: "Jobs & Careers",
      desc: "Find your dream job or hire top talent",
      color: "from-blue-500 to-cyan-500",
      pills: ["Software Developer", "AI Engineer", "UI/UX Designer"],
      to: "/jobs",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M7 7V6a3 3 0 013-3h4a3 3 0 013 3v1h2a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2h2zm2-1a1 1 0 001-1h4a1 1 0 001 1v1H9V6z" />
        </svg>
      ),
    },
    {
      key: "freelancer",
      title: "Freelance",
      desc: "Connect with skilled freelancers worldwide",
      color: "from-green-500 to-emerald-500",
      pills: ["Content Writer", "Video Editor", "Graphic Designer"],
      to: "/freelancer",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm-7 9a7 7 0 0114 0H5z" />
        </svg>
      ),
    },
    {
      key: "marketplace",
      title: "Marketplace",
      desc: "Buy and sell products with ease",
      color: "from-orange-500 to-red-500",
      pills: ["Used Car Sales", "Laptop Sales", "Real Estate"],
      to: "/marketplace",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M3 9l1-5h16l1 5H3zm0 2h18l-2 9H5l-2-9z" />
        </svg>
      ),
    },
    {
      key: "service",
      title: "Services",
      desc: "Professional services at your fingertips",
      color: "from-fuchsia-500 to-pink-500",
      pills: ["Home Cleaning", "AC Repair", "Event Planning"],
      to: "/service",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M4 4h16v4H4zM7 8h10l1 12H6L7 8z" />
        </svg>
      ),
    },
    {
      key: "travel",
      title: "Travel & Bookings",
      desc: "Plan your perfect journey",
      color: "from-sky-500 to-indigo-500",
      pills: ["Hotel Booking", "Bus Tickets", "Cab Rentals"],
      to: "/travel",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M2 16l20-5-8 8-2-5-8 2z" />
        </svg>
      ),
    },
    {
      key: "agri",
      title: "Agriculture",
      desc: "Empowering farmers and agribusiness",
      color: "from-lime-500 to-green-600",
      pills: ["Crop Sales", "Farm Jobs", "Agri Tools Rental"],
      to: "/agri",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full">
      {/* HERO — exact viewport height so it looks full-screen */}
      <section className="w-full flex items-start bg-gradient-to-b from-indigo-50 via-cyan-50 to-white py-6 md:py-10">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6 justify-center">
            <svg className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M13 2L3 14h7l-1 8 11-14h-8l1-6z" />
            </svg>
            <span className="text-sm font-semibold text-blue-600">AI-Powered Platform</span>
          </div> */}

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 mb-4 leading-tight">
            <span>Welcome to </span>
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent">WorkVerse</span>
          </h1>

          <div className="h-12 mb-4">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700">
              {text}
              <span className="animate-blink">|</span>
            </p>
          </div>

         

          {/* Search + Voice area */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            <div className="relative flex-1 w-full">
              {/* search icon */}
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>

              {/* input */}
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && onSearch()}
                placeholder="Search jobs, products, services..."
                className="w-full pl-12 pr-36 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-300 text-lg"
                aria-label="Search jobs"
              />

              {/* VoiceAssist button positioned inside input (right side) */}
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
                {/* VoiceAssist component triggers and returns text via setQuery */}
                <VoiceAssist onResult={(t) => setQuery(t)} />

                {/* Search button next to voice inside same block for compact look */}
                <button
                  onClick={onSearch}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:shadow-md transition"
                >
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { label: "Active Jobs", value: "50K+" },
              { label: "Freelancers", value: "100K+" },
              { label: "Products", value: "500K+" },
              { label: "Services", value: "10K+" },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BELOW HERO CONTENT (visible after scroll) */}
      <main className="w-full bg-white">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-12">
          <div className="mt-6 w-full max-w-3xl mx-auto">
            <JobCard
              job={jobs[0]}
              onApply={(job) => navigate(`/apply/${job.id}`, { state: { jobTitle: job.title } })}
            />
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((c) => (
                <div
                  key={c.key}
                  className="group bg-white rounded-2xl shadow hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:-translate-y-1"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl text-white bg-gradient-to-br ${c.color} mb-4`}>
                    {c.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{c.title}</h3>
                  <p className="text-gray-600 mb-4">{c.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {c.pills.map((p) => (
                      <span key={p} className="px-3 py-1 rounded-full text-xs bg-gray-100 text-gray-700">{p}</span>
                    ))}
                    <span className="px-3 py-1 rounded-full text-xs bg-gray-100 text-gray-700">+7 more</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => navigate(c.to)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium group-hover:shadow-lg transition"
                    >
                      Explore
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </button>

                    <div className="text-sm text-gray-500">Explore more</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Chatbot button + panel (WhatsApp-like green button) */}
      <div className="fixed bottom-6 right-6 z-50 flex items-end justify-end">
        {chatOpen && (
          <div className="mb-4 mr-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden" style={{ transformOrigin: "right bottom" }}>
            <div className="flex items-center justify-between px-4 py-3 bg-green-600 text-white">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.5 8.5 0 018.5 8.5z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">WorkVerse Support</div>
                  <div className="text-xs opacity-90">How can we help you?</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button onClick={() => setChatOpen(false)} aria-label="Close chat" className="p-1 rounded-md hover:bg-white/20 transition">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="h-80 sm:h-96 bg-white">
              <Chatbot />
            </div>
          </div>
        )}

        <button
          onClick={() => setChatOpen((s) => !s)}
          aria-label={chatOpen ? "Close chat" : "Open chat"}
          className="relative w-16 h-16 rounded-full bg-gradient-to-br from-green-600 to-green-500 text-white shadow-2xl flex items-center justify-center hover:scale-105 transform transition focus:outline-none"
        >
          <span className={`absolute inset-0 rounded-full ring-4 ring-green-300/20 ${chatOpen ? "animate-pulse" : ""}`}></span>

          <svg className="w-7 h-7 relative z-10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.5 8.5 0 018.5 8.5z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
