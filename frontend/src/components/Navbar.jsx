// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'

// export default function Navbar() {
//   const [open, setOpen] = useState(false)
//   const navigate = useNavigate()
//   const logout = () => {
//     localStorage.removeItem('token')
//     navigate('/')
//     window.location.reload()
//   }

//   return (
//     <header className="bg-white shadow">
//       <div className="container mx-auto px-4 py-3 flex items-center justify-between">
//         <div className="flex items-center gap-6">
//           <div className="text-2xl font-bold text-indigo-600">JobPortal</div>
//           <nav className="hidden md:flex gap-4 text-sm">
//             <Link to="/">Home</Link>
//             <Link to="/jobs">Job & Career</Link>
//             <Link to="/freelancer">Freelancer</Link>
//             <Link to="/marketplace">Marketplace</Link>
//             <Link to="/service">Service</Link>
//             <Link to="/govt">Government Jobs</Link>
//             <Link to="/travel">Travel & Booking</Link>
//             <Link to="/agri">Agriculture</Link>
//           </nav>
//         </div>

//         <div className="flex items-center gap-4 relative">
//           <button className="hidden md:inline px-3 py-1 border rounded" onClick={()=>navigate('/employer')}>Post Job</button>
//           <button onClick={() => setOpen(!open)} className="p-2 md:hidden" aria-label="menu">
//             <div className="space-y-1">
//               <span className="block w-6 h-0.5 bg-black"></span>
//               <span className="block w-6 h-0.5 bg-black"></span>
//               <span className="block w-6 h-0.5 bg-black"></span>
//             </div>
//           </button>
//           {open && (
//             <div className="absolute right-0 top-12 bg-white border rounded shadow p-3 w-40 z-50">
//               <Link to="/seeker" className="block py-1">Seeker</Link>
//               <Link to="/employer" className="block py-1">Employer</Link>
//               <Link to="/login" className="block py-1">Login</Link>
//               <button onClick={logout} className="w-full text-left py-1">Logout</button>
//             </div>
//           )}
//         </div>
//       </div>
//     </header>
//   )
// }



// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const navigate = useNavigate();

//   const logout = () => {
//     localStorage.removeItem("token");
//     navigate("/");
//     window.location.reload();
//   };

//   return (
//     <header className="fixed top-0 left-0 w-full h-20 bg-white z-50">
//       <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
//         {/* Left Section - Logo + Nav */}
//         <div className="flex items-center gap-10">
//           {/* Logo */}
//           <div
//             onClick={() => navigate("/")}
//             className="text-3xl font-extrabold text-indigo-600 cursor-pointer tracking-tight"
//           >
//             JobPortal
//           </div>

//           {/* Desktop Nav Links */}
//           <nav className="hidden lg:flex items-center gap-6 text-gray-700 font-medium">
//             <Link
//               to="/"
//               className="hover:text-indigo-600 transition-colors duration-200"
//             >
//               Home
//             </Link>
//             <Link
//               to="/jobs"
//               className="hover:text-indigo-600 transition-colors duration-200"
//             >
//               Job & Career
//             </Link>
//             <Link
//               to="/freelancer"
//               className="hover:text-indigo-600 transition-colors duration-200"
//             >
//               Freelancer
//             </Link>
//             <Link
//               to="/marketplace"
//               className="hover:text-indigo-600 transition-colors duration-200"
//             >
//               Marketplace
//             </Link>
//             <Link
//               to="/service"
//               className="hover:text-indigo-600 transition-colors duration-200"
//             >
//               Service
//             </Link>
//             <Link
//               to="/govt"
//               className="hover:text-indigo-600 transition-colors duration-200"
//             >
//               Government Jobs
//             </Link>
//             <Link
//               to="/travel"
//               className="hover:text-indigo-600 transition-colors duration-200"
//             >
//               Travel & Booking
//             </Link>
//             <Link
//               to="/agri"
//               className="hover:text-indigo-600 transition-colors duration-200"
//             >
//               Agriculture
//             </Link>
//           </nav>
//         </div>

//         {/* Right Section - Buttons */}
//         <div className="flex items-center gap-6 relative">
//           {/* Post Job Button (Desktop Only) */}
//           <button
//             onClick={() => navigate("/employer")}
//             className="hidden md:inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 shadow-sm transition-all duration-200"
//           >
//             Post Job
//           </button>

//           {/* Hamburger (Mobile Only) */}
//           <button
//             onClick={() => setOpen(!open)}
//             className="p-2 lg:hidden border rounded-md hover:bg-gray-100 transition"
//             aria-label="Toggle Menu"
//           >
//             <div className="space-y-1">
//               <span className="block w-6 h-0.5 bg-gray-700"></span>
//               <span className="block w-6 h-0.5 bg-gray-700"></span>
//               <span className="block w-6 h-0.5 bg-gray-700"></span>
//             </div>
//           </button>

//           {/* Dropdown Menu (Mobile) */}
//           {open && (
//             <div className="absolute right-0 top-12 bg-white border rounded-lg shadow-lg w-48 py-2 animate-fadeIn">
//               <Link
//                 to="/seeker"
//                 onClick={() => setOpen(false)}
//                 className="block px-4 py-2 hover:bg-indigo-50 transition"
//               >
//                 Seeker
//               </Link>
//               <Link
//                 to="/employer"
//                 onClick={() => setOpen(false)}
//                 className="block px-4 py-2 hover:bg-indigo-50 transition"
//               >
//                 Employer
//               </Link>
//               <Link
//                 to="/login"
//                 onClick={() => setOpen(false)}
//                 className="block px-4 py-2 hover:bg-indigo-50 transition"
//               >
//                 Login
//               </Link>
//               <button
//                 onClick={logout}
//                 className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 transition"
//               >
//                 Logout
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }






// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const navigate = useNavigate();

//   const logout = () => {
//     localStorage.removeItem("token");
//     navigate("/");
//     window.location.reload();
//   };

//   return (
//     <header className="fixed top-0 left-0 w-full h-20 bg-white/95 backdrop-blur-sm shadow z-50">
//       <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between ">
//         <div className="flex items-center gap-8 ">
//           <div
//           onClick={() => navigate("/")}
//           className="text-2xl md:text-3xl font-extrabold text-indigo-600 cursor-pointer tracking-tight hover:scale-105 transition-transform duration-200 select-none absolute left-0"
//           style={{ paddingLeft: "4px" }}
//         >
//           JobPortal
//         </div>

//           <nav className="hidden md:flex items-center gap-6 text-gray-700 font-medium text-sm sm:text-base">
//             <Link to="/" className="hover:text-indigo-600 transition">Home</Link>
//             <Link to="/jobs" className="hover:text-indigo-600 transition">Job & Career</Link>
//             <Link to="/freelancer" className="hover:text-indigo-600 transition">Freelancer</Link>
//             <Link to="/marketplace" className="hover:text-indigo-600 transition">Marketplace</Link>
//             <Link to="/service" className="hover:text-indigo-600 transition">Service</Link>
//             <Link to="/govt" className="hover:text-indigo-600 transition">Government Jobs</Link>
//             <Link to="/travel" className="hover:text-indigo-600 transition">Travel & Booking</Link>
//             <Link to="/agri" className="hover:text-indigo-600 transition">Agriculture</Link>
//           </nav>
//         </div>

//         <div className="flex items-center gap-4 relative">
//           <button
//             onClick={() => navigate("/employer")}
//             className="hidden md:inline-block bg-gradient-to-r from-indigo-600 to-sky-500 text-white px-5 py-2.5 rounded-lg shadow-md hover:opacity-90 hover:scale-105 transition-all duration-300"
//           >
//             Post Job
//           </button>

//           <div
//             className="relative"
//             onMouseEnter={() => setOpen(true)}
//             onMouseLeave={() => setOpen(false)}
//           >
//             <button
//               className="p-2 border rounded-md hover:bg-gray-100 transition focus:outline-none"
//               aria-label="Menu"
//             >
//               <span className="block w-6 h-0.5 bg-gray-700 mb-1"></span>
//               <span className="block w-6 h-0.5 bg-gray-700 mb-1"></span>
//               <span className="block w-6 h-0.5 bg-gray-700"></span>
//             </button>

//             {open && (
//               <div
//                 className="absolute right-0 top-12 bg-white border rounded-lg shadow-lg w-48 py-2 animate-fadeIn"
//                 onMouseEnter={() => setOpen(true)}
//                 onMouseLeave={() => setOpen(false)}
//               >
//                 <Link to="/seeker" onClick={() => setOpen(false)} className="block px-4 py-2 hover:bg-indigo-50">Seeker</Link>
//                 <Link to="/employer" onClick={() => setOpen(false)} className="block px-4 py-2 hover:bg-indigo-50">Employer</Link>
//                 <Link to="/login" onClick={() => setOpen(false)} className="block px-4 py-2 hover:bg-indigo-50">Login</Link>
//                 <button onClick={logout} className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-50">Logout</button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }






// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const navigate = useNavigate();

//   const logout = () => {
//     localStorage.removeItem("token");
//     navigate("/");
//     window.location.reload();
//   };

//   return (
//     <header className="fixed top-0 left-0 w-full h-20 bg-white/95 backdrop-blur-sm shadow z-50">
//       <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6 sm:px-10">
        
//         {/* ✅ Left Corner — Logo */}
//         <div
//           onClick={() => navigate("/")}
//           className="text-2xl md:text-3xl font-extrabold text-indigo-600 cursor-pointer tracking-tight hover:scale-105 transition-transform duration-200"
//         >
//           JobPortal
//         </div>

//         {/* ✅ Center — All Nav Items in One Horizontal Line */}
//         <nav className="hidden md:flex flex-nowrap items-center justify-center gap-8 text-gray-700 font-medium text-base">
//           <Link to="/" className="hover:text-indigo-600 transition">Home</Link>
//           <Link to="/jobs" className="hover:text-indigo-600 transition">Job & Career</Link>
//           <Link to="/freelancer" className="hover:text-indigo-600 transition">Freelancer</Link>
//           <Link to="/marketplace" className="hover:text-indigo-600 transition">Marketplace</Link>
//           <Link to="/service" className="hover:text-indigo-600 transition">Service</Link>
//           <Link to="/govt" className="hover:text-indigo-600 transition">Government</Link>
//           <Link to="/travel" className="hover:text-indigo-600 transition">Travel</Link>
//           <Link to="/agri" className="hover:text-indigo-600 transition">Agriculture</Link>
//         </nav>

//         {/* ✅ Right Corner — Hamburger Menu */}
//         <div
//           className="relative flex-shrink-0"
//           onMouseEnter={() => setOpen(true)}
//           onMouseLeave={() => setOpen(false)}
//         >
//           <button
//             className="p-2 border rounded-md hover:bg-gray-100 transition focus:outline-none"
//             aria-label="Menu"
//           >
//             <span className="block w-6 h-0.5 bg-gray-700 mb-1"></span>
//             <span className="block w-6 h-0.5 bg-gray-700 mb-1"></span>
//             <span className="block w-6 h-0.5 bg-gray-700"></span>
//           </button>

//           {open && (
//             <div
//               className="absolute right-0 top-12 bg-white border rounded-lg shadow-lg w-48 py-2 animate-fadeIn"
//               onMouseEnter={() => setOpen(true)}
//               onMouseLeave={() => setOpen(false)}
//             >
//               <Link
//                 to="/seeker"
//                 onClick={() => setOpen(false)}
//                 className="block px-4 py-2 hover:bg-indigo-50"
//               >
//                 Seeker
//               </Link>
//               <Link
//                 to="/employer"
//                 onClick={() => setOpen(false)}
//                 className="block px-4 py-2 hover:bg-indigo-50"
//               >
//                 Employer
//               </Link>
//               <Link
//                 to="/login"
//                 onClick={() => setOpen(false)}
//                 className="block px-4 py-2 hover:bg-indigo-50"
//               >
//                 Login
//               </Link>
//               <button
//                 onClick={logout}
//                 className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
//               >
//                 Logout
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }




// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import AuthModal from "./AuthModal";

// export default function Navbar() {
//   const [authOpen, setAuthOpen] = useState(false);
//   const navigate = useNavigate();

//   const logout = () => {
//     localStorage.removeItem("token");
//     navigate("/");
//     window.location.reload();
//   };

//   return (
//     <header className="fixed top-0 left-0 w-full h-20 bg-white/95 backdrop-blur-sm shadow-md z-50">
//       <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6 sm:px-10">
        
//         {/* Logo — placed BEFORE the nav in the DOM */}
//         <div
//           onClick={() => navigate("/")}
//           className="text-2xl md:text-3xl font-extrabold text-indigo-600 cursor-pointer tracking-tight hover:scale-105 transition-transform duration-200"
//         >
//           JobPortal
//         </div>

//         {/* Nav (center) — logo is already before this in the DOM */}
//         <nav className="hidden md:flex flex-nowrap items-center justify-center gap-8 text-gray-700 font-medium text-base">
//           <Link to="/" className="hover:text-indigo-600 transition">Home</Link>
//           <Link to="/jobs" className="hover:text-indigo-600 transition">Job & Career</Link>
//           <Link to="/freelancer" className="hover:text-indigo-600 transition">Freelancer</Link>
//           <Link to="/marketplace" className="hover:text-indigo-600 transition">Marketplace</Link>
//           <Link to="/service" className="hover:text-indigo-600 transition">Service</Link>
//           <Link to="/govt" className="hover:text-indigo-600 transition">Government</Link>
//           <Link to="/travel" className="hover:text-indigo-600 transition">Travel</Link>
//           <Link to="/agri" className="hover:text-indigo-600 transition">Agriculture</Link>
//         </nav>

//         {/* Right — Buttons */}
//         <div className="flex items-center gap-3">
//           <button
//             onClick={() => navigate("/employer")}
//             className="hidden md:inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 shadow-sm transition"
//           >
//             Post Job
//           </button>
//           <button
//             onClick={() => setAuthOpen(true)}
//             className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 shadow-sm transition"
//           >
//             Login
//           </button>
//         </div>
//       </div>
//       <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} onLogout={logout} />
//     </header>
//   );
// }




import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthModal from "./AuthModal";

export default function Navbar() {
  const [authOpen, setAuthOpen] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };

  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6 sm:px-10">
        
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="text-2xl md:text-3xl font-extrabold text-indigo-600 cursor-pointer tracking-tight hover:scale-105 transition-transform duration-200"
        >
          JobPortal
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex flex-nowrap items-center justify-center gap-8 text-gray-700 font-medium text-base">
          <Link to="/" className="hover:text-indigo-600 transition">Home</Link>
          <div className="relative group before:content-[''] before:absolute before:top-full before:left-0 before:right-0 before:h-3">
            <Link
              to="/jobs"
              className="relative inline-flex items-center gap-2 pb-1 -mb-1 border-b-2 border-transparent group-hover:border-red-500 transition-colors"
            >
              Job & Career
            </Link>
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-96 bg-white rounded-2xl shadow-lg-soft ring-1 ring-black/5 p-2 grid grid-cols-2 gap-1 opacity-0 invisible -translate-y-1 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible transition duration-150">
              <Link to="/jobs" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Software Developer</span></Link>
              <Link to="/jobs" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>AI Engineer</span></Link>
              <Link to="/jobs" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>UI/UX Designer</span></Link>
              <Link to="/jobs" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Data Analyst</span></Link>
              <Link to="/jobs" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Cybersecurity Expert</span></Link>
              <Link to="/jobs" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>HR Executive</span></Link>
              <Link to="/jobs" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Finance Analyst</span></Link>
              <Link to="/jobs" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Sales Manager</span></Link>
              <Link to="/jobs" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Marketing Officer</span></Link>
              <Link to="/jobs" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Business Analyst</span></Link>
            </div>
          </div>

          <div className="relative group before:content-[''] before:absolute before:top-full before:left-0 before:right-0 before:h-3">
            <Link
              to="/freelancer"
              className="relative inline-flex items-center gap-2 pb-1 -mb-1 border-b-2 border-transparent group-hover:border-red-500 transition-colors"
            >
              Freelancer
            </Link>
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-96 bg-white rounded-2xl shadow-lg-soft ring-1 ring-black/5 p-2 grid grid-cols-2 gap-1 opacity-0 invisible -translate-y-1 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible transition duration-150">
              <Link to="/freelancer" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Content Writer</span></Link>
              <Link to="/freelancer" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Video Editor</span></Link>
              <Link to="/freelancer" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Graphic Designer</span></Link>
              <Link to="/freelancer" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Web Developer</span></Link>
              <Link to="/freelancer" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Voice-over Artist</span></Link>
              <Link to="/freelancer" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>SEO Expert</span></Link>
              <Link to="/freelancer" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Virtual Assistant</span></Link>
              <Link to="/freelancer" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Consultant</span></Link>
              <Link to="/freelancer" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Tutor</span></Link>
              <Link to="/freelancer" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Translator</span></Link>
            </div>
          </div>
          <div className="relative group before:content-[''] before:absolute before:top-full before:left-0 before:right-0 before:h-3">
            <Link to="/marketplace" className="relative inline-flex items-center gap-2 pb-1 -mb-1 border-b-2 border-transparent group-hover:border-red-500 transition-colors">Marketplace</Link>
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-96 bg-white rounded-2xl shadow-lg-soft ring-1 ring-black/5 p-2 grid grid-cols-2 gap-1 opacity-0 invisible -translate-y-1 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible transition duration-150">
              <Link to="/marketplace" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Used Car Sales</span></Link>
              <Link to="/marketplace" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Laptop Sales</span></Link>
              <Link to="/marketplace" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Real Estate Listings</span></Link>
              <Link to="/marketplace" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Home Appliances</span></Link>
              <Link to="/marketplace" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Furniture</span></Link>
              <Link to="/marketplace" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Mobile Phones</span></Link>
              <Link to="/marketplace" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Tractors</span></Link>
              <Link to="/marketplace" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Seeds & Fertilizers</span></Link>
              <Link to="/marketplace" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Electronics</span></Link>
              <Link to="/marketplace" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Vehicles</span></Link>
            </div>
          </div>

          <div className="relative group before:content-[''] before:absolute before:top-full before:left-0 before:right-0 before:h-3">
            <Link to="/service" className="relative inline-flex items-center gap-2 pb-1 -mb-1 border-b-2 border-transparent group-hover:border-red-500 transition-colors">Service</Link>
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-72 bg-white rounded-2xl shadow-lg-soft ring-1 ring-black/5 p-2 opacity-0 invisible -translate-y-1 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible transition duration-150">
              <Link to="/service" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Home Cleaning</span></Link>
              <Link to="/service" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>AC Repair</span></Link>
              <Link to="/service" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Event Planning</span></Link>
              <Link to="/service" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>IT Consulting</span></Link>
              <Link to="/service" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Tax Consultant</span></Link>
              <Link to="/service" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Career Counseling</span></Link>
              <Link to="/service" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Web Design</span></Link>
              <Link to="/service" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Fitness Trainer</span></Link>
              <Link to="/service" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Digital Marketing</span></Link>
              <Link to="/service" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Photography</span></Link>
            </div>
          </div>

          <div className="relative group before:content-[''] before:absolute before:top-full before:left-0 before:right-0 before:h-3">
            <Link to="/govt" className="relative inline-flex items-center gap-2 pb-1 -mb-1 border-b-2 border-transparent group-hover:border-red-500 transition-colors">Government</Link>
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-72 bg-white rounded-2xl shadow-lg-soft ring-1 ring-black/5 p-2 opacity-0 invisible -translate-y-1 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible transition duration-150">
              <Link to="/govt" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Railways</span></Link>
              <Link to="/govt" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Police</span></Link>
              <Link to="/govt" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Defence</span></Link>
              <Link to="/govt" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Postal</span></Link>
              <Link to="/govt" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>PSUs</span></Link>
              <Link to="/govt" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Civil Services</span></Link>
              <Link to="/govt" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Banking</span></Link>
              <Link to="/govt" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Public Administration</span></Link>
              <Link to="/govt" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Education</span></Link>
              <Link to="/govt" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Healthcare</span></Link>
            </div>
          </div>

          <div className="relative group before:content-[''] before:absolute before:top-full before:left-0 before:right-0 before:h-3">
            <Link to="/travel" className="relative inline-flex items-center gap-2 pb-1 -mb-1 border-b-2 border-transparent group-hover:border-red-500 transition-colors">Travel</Link>
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-72 bg-white rounded-2xl shadow-lg-soft ring-1 ring-black/5 p-2 opacity-0 invisible -translate-y-1 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible transition duration-150">
              <Link to="/travel" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Hotel Booking</span></Link>
              <Link to="/travel" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Bus Tickets</span></Link>
              <Link to="/travel" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Cab Rentals</span></Link>
              <Link to="/travel" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Tour Packages</span></Link>
              <Link to="/travel" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Event Tickets</span></Link>
              <Link to="/travel" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Flight Bookings</span></Link>
              <Link to="/travel" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Holiday Planning</span></Link>
              <Link to="/travel" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Restaurant Reservations</span></Link>
              <Link to="/travel" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Local Tours</span></Link>
              <Link to="/travel" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Conference Bookings</span></Link>
            </div>
          </div>

          <div className="relative group before:content-[''] before:absolute before:top-full before:left-0 before:right-0 before:h-3">
            <Link to="/agri" className="relative inline-flex items-center gap-2 pb-1 -mb-1 border-b-2 border-transparent group-hover:border-red-500 transition-colors">Agriculture</Link>
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-72 bg-white rounded-2xl shadow-lg-soft ring-1 ring-black/5 p-2 opacity-0 invisible -translate-y-1 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible transition duration-150">
              <Link to="/agri" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Crop Sales</span></Link>
              <Link to="/agri" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Farm Jobs</span></Link>
              <Link to="/agri" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Agri Tools Rental</span></Link>
              <Link to="/agri" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Seed Distribution</span></Link>
              <Link to="/agri" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Organic Farming</span></Link>
              <Link to="/agri" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Agri Equipment Sales</span></Link>
              <Link to="/agri" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Irrigation Services</span></Link>
              <Link to="/agri" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Fertilizer Supply</span></Link>
              <Link to="/agri" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Food Processing</span></Link>
              <Link to="/agri" className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl hover:bg-gray-100"><span>Rural Jobs</span></Link>
            </div>
          </div>
        </nav>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-3">
          

          {/* Colorful Login Button */}
          <button
            onClick={() => setAuthOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white font-medium 
                       bg-gradient-to-r from-indigo-500 via-blue-500 to-blue-500
                       hover:from-purple-500 hover:via-orange-500 hover:to-indigo-500
                       shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Login
          </button>
        </div>
      </div>

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} onLogout={logout} />
    </header>
  );
}
