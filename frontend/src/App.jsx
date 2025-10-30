// import React from 'react'
// import { Routes, Route } from 'react-router-dom'
// import Navbar from './components/Navbar'
// import Home from './pages/Home'
// import Login from './pages/Login'
// import EmployerDashboard from './pages/EmployerDashboard'
// import AdminDashboard from './pages/AdminDashboard'

// export default function App() {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navbar />
//       <main className="flex-1 pt-24">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/employer" element={<EmployerDashboard />} />
//           <Route path="/admin" element={<AdminDashboard />} />
//         </Routes>
//       </main>
//       <footer className="bg-white border-t p-4 text-center">© {new Date().getFullYear()} Job Portal</footer>
//     </div>
//   )
// }





import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import EmployerDashboard from "./pages/EmployerDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Jobs from "./pages/Jobs";
import Freelancer from "./pages/Freelancer";
import Marketplace from "./pages/Marketplace";
import Service from "./pages/Service";
import GovernmentJobs from "./pages/GovernmentJobs";
import Traveling from "./pages/Traveling";
import Agriculture from "./pages/Agriculture";
import Apply from "./pages/Apply";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      {/* ✅ Fixed Navbar */}
      <Navbar />

      {/* ✅ Main content area with top padding to avoid overlap with fixed Navbar */}
      <main className="flex-1 pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/employer" element={<EmployerDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/freelancer" element={<Freelancer />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/service" element={<Service />} />
          <Route path="/govt" element={<GovernmentJobs />} />
          <Route path="/travel" element={<Traveling />} />
          <Route path="/agri" element={<Agriculture />} />
          <Route path="/apply/:jobId" element={<Apply />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
