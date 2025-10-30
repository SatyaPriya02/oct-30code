// import React, { useEffect, useState } from "react";
// import { createPortal } from "react-dom";

// export default function AuthModal({ open, onClose, onLogout }) {
//   const [mode, setMode] = useState("signup");

//   // Lock scroll while modal is open
//   useEffect(() => {
//     if (!open) return;
//     if (typeof document === "undefined") return;
//     const prev = document.body.style.overflow;
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = prev;
//     };
//   }, [open]);

//   if (!open) return null;

//   return createPortal(
//     <div className="fixed inset-0 z-[9999]">
//       <div className="absolute inset-0 bg-black/60" onClick={onClose} />
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92vw] max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
//         <button
//           onClick={onLogout}
//           className="absolute top-3 right-3 text-xs px-3 py-1 rounded-full bg-red-500 text-white hover:bg-red-600"
//         >
//           Logout
//         </button>

//         <div className="hidden md:flex flex-col items-center justify-center p-8 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
//           <h2 className="text-2xl font-semibold mb-2">Welcome Back!</h2>
//           <p className="text-sm opacity-90 mb-6 text-center">Enter your personal details to use all of site features</p>
//           <button
//             onClick={() => setMode("signin")}
//             className="border border-white/80 px-6 py-2 rounded-full hover:bg-white hover:text-indigo-600 transition"
//           >
//             Sign In
//           </button>
//         </div>

//         <div className="p-6 md:p-8">
//           <div className="flex items-center gap-2 mb-6">
//             <button
//               onClick={() => setMode("signup")}
//               className={`text-sm px-3 py-1 rounded-full ${mode === "signup" ? "bg-indigo-600 text-white" : "bg-gray-100"}`}
//             >
//               Sign Up
//             </button>
//             <button
//               onClick={() => setMode("signin")}
//               className={`text-sm px-3 py-1 rounded-full ${mode === "signin" ? "bg-indigo-600 text-white" : "bg-gray-100"}`}
//             >
//               Sign In
//             </button>
//           </div>

//           {mode === "signup" ? (
//             <div>
//               <h3 className="text-xl font-semibold mb-4">Create Account</h3>
//               <div className="grid grid-cols-3 gap-2 mb-4">
//                 <button className="border rounded-md py-2 text-sm">G</button>
//                 <button className="border rounded-md py-2 text-sm">O</button>
//                 <button className="border rounded-md py-2 text-sm">in</button>
//               </div>
//               <p className="text-xs text-gray-500 mb-3">or use your email for registration</p>
//               <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
//                 <input className="w-full border rounded-md px-3 py-2" placeholder="Name" />
//                 <input className="w-full border rounded-md px-3 py-2" placeholder="Email" type="email" />
//                 <input className="w-full border rounded-md px-3 py-2" placeholder="Password" type="password" />
//                 <button className="w-full bg-indigo-600 text-white rounded-md py-2 hover:bg-indigo-700">Sign Up</button>
//               </form>
//             </div>
//           ) : (
//             <div>
//               <h3 className="text-xl font-semibold mb-4">Sign In</h3>
//               <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
//                 <input className="w-full border rounded-md px-3 py-2" placeholder="Email" type="email" />
//                 <input className="w-full border rounded-md px-3 py-2" placeholder="Password" type="password" />
//                 <button className="w-full bg-indigo-600 text-white rounded-md py-2 hover:bg-indigo-700">Sign In</button>
//               </form>
//             </div>
//           )}

//           <button
//             onClick={onClose}
//             className="mt-6 w-full border rounded-md py-2 hover:bg-gray-50"
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     </div>,
//     document.body
//   );
// }





// import React, { useEffect, useState } from "react";
// import { createPortal } from "react-dom";

// export default function AuthModal({ open, onClose, onLogout }) {
//   const [mode, setMode] = useState("signup");

//   // Prevent background scroll
//   useEffect(() => {
//     if (!open) return;
//     const prev = document.body.style.overflow;
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = prev;
//     };
//   }, [open]);

//   if (!open) return null;

//   return createPortal(
//     <div className="fixed inset-0 z-[9999]">
//       <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92vw] max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

//         {/* Logout Button */}
//         <button
//           onClick={onLogout}
//           className="absolute top-3 right-3 text-xs px-3 py-1 rounded-full 
//                      bg-gradient-to-r from-red-500 to-rose-600 text-white 
//                      hover:from-rose-600 hover:to-red-500 shadow-md hover:shadow-lg transition-all duration-300"
//         >
//           Logout
//         </button>

//         {/* Left Panel */}
//         <div className="hidden md:flex flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white">
//           <h2 className="text-2xl font-semibold mb-2">Welcome Back!</h2>
//           <p className="text-sm opacity-90 mb-6 text-center">
//             Enter your personal details and explore all features.
//           </p>
//           <button
//             onClick={() => setMode("signin")}
//             className="px-6 py-2 rounded-full bg-white text-indigo-700 font-medium 
//                        hover:bg-indigo-100 shadow-md hover:shadow-lg transition-all duration-300"
//           >
//             Sign In
//           </button>
//         </div>

//         {/* Right Panel */}
//         <div className="p-6 md:p-8">
//           {/* Toggle Buttons */}
//           <div className="flex items-center gap-3 mb-6">
//             <button
//               onClick={() => setMode("signup")}
//               className={`text-sm px-4 py-1.5 rounded-full font-medium transition-all duration-300 shadow-sm ${
//                 mode === "signup"
//                   ? "bg-gradient-to-r from-indigo-500 to-blue-600 text-white shadow-md"
//                   : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//               }`}
//             >
//               Sign Up
//             </button>
//             <button
//               onClick={() => setMode("signin")}
//               className={`text-sm px-4 py-1.5 rounded-full font-medium transition-all duration-300 shadow-sm ${
//                 mode === "signin"
//                   ? "bg-gradient-to-r from-indigo-500 to-blue-600 text-white shadow-md"
//                   : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//               }`}
//             >
//               Sign In
//             </button>
//           </div>

//           {/* Content */}
//           {mode === "signup" ? (
//             <div>
//               <h3 className="text-xl font-semibold mb-4 text-gray-800">
//                 Create Account
//               </h3>

//               {/* Social Login Buttons */}
//               <div className="grid grid-cols-2 gap-3 mb-4">
//                 {/* Google Login */}
//                 <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 shadow-sm hover:shadow transition-all duration-300">
//                   <img
//                     src="https://www.svgrepo.com/show/355037/google.svg"
//                     alt="Google logo"
//                     className="w-5 h-5"
//                   />
//                  Google
//                 </button>

//                 {/* LinkedIn Login */}
//                 <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 shadow-sm hover:shadow transition-all duration-300">
//                   <img
//                     src="https://www.svgrepo.com/show/448234/linkedin.svg"
//                     alt="LinkedIn logo"
//                     className="w-5 h-5"
//                   />
//                  LinkedIn
//                 </button>
//               </div>

//               <p className="text-xs text-gray-500 mb-3">
//                 or use your email for registration
//               </p>

//               {/* Signup Form */}
//               <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
//                 <input
//                   className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//                   placeholder="Name"
//                 />
//                 <input
//                   className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                   placeholder="Email"
//                   type="email"
//                 />
//                 <input
//                   className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
//                   placeholder="Password"
//                   type="password"
//                 />
//                 <button
//                   className="w-full bg-gradient-to-r from-indigo-500 via-blue-600 to-purple-600 
//                              text-white rounded-md py-2 font-medium 
//                              hover:from-blue-600 hover:to-indigo-500 
//                              shadow-md hover:shadow-lg transform hover:scale-105 
//                              transition-all duration-300"
//                 >
//                   Sign Up
//                 </button>
//               </form>
//             </div>
//           ) : (
//             <div>
//               <h3 className="text-xl font-semibold mb-4 text-gray-800">
//                 Sign In
//               </h3>

//               {/* Social Login Buttons */}
//               <div className="grid grid-cols-2 gap-3 mb-4">
//                 {/* Google Login */}
//                 <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 shadow-sm hover:shadow transition-all duration-300">
//                   <img
//                     src="https://www.svgrepo.com/show/355037/google.svg"
//                     alt="Google logo"
//                     className="w-5 h-5"
//                   />
//                   Google
//                 </button>

//                 {/* LinkedIn Login */}
//                 <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 shadow-sm hover:shadow transition-all duration-300">
//                   <img
//                     src="https://www.svgrepo.com/show/448234/linkedin.svg"
//                     alt="LinkedIn logo"
//                     className="w-5 h-5"
//                   />
//                    LinkedIn
//                 </button>
//               </div>

//               <p className="text-xs text-gray-500 mb-3">
//                 or use your email to login
//               </p>

//               <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
//                 <input
//                   className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                   placeholder="Email"
//                   type="email"
//                 />
//                 <input
//                   className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//                   placeholder="Password"
//                   type="password"
//                 />
//                 <button
//                   className="w-full bg-gradient-to-r from-indigo-500 via-blue-600 to-purple-600 
//                              text-white rounded-md py-2 font-medium 
//                              hover:from-blue-600 hover:to-indigo-500 
//                              shadow-md hover:shadow-lg transform hover:scale-105 
//                              transition-all duration-300"
//                 >
//                   Sign In
//                 </button>
//               </form>
//             </div>
//           )}

//           {/* Close Button */}
//           <button
//             onClick={onClose}
//             className="mt-6 w-full bg-gradient-to-r from-blue-500 to-indigo-600 
//                        text-white rounded-md py-2 font-medium 
//                        hover:from-indigo-600 hover:to-blue-500 
//                        shadow-md hover:shadow-lg transform hover:scale-105 
//                        transition-all duration-300"
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     </div>,
//     document.body
//   );
// }






import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function AuthModal({ open, onClose, onLogout }) {
  const [mode, setMode] = useState("signup");
  const [role, setRole] = useState(""); // employer/employee
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  // Prevent background scroll
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  // handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  // handle signup form submit
  const handleSignup = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    if (!role) {
      setError("Please select a role (Employer or Employee)");
      return;
    }
    console.log("Signup data:", { ...form, role });
    alert("Signup successful ✅ (You can connect this to your backend API)");
  };

  // handle signin form submit
  const handleSignin = (e) => {
    e.preventDefault();
    console.log("Signin data:", { email: form.email, password: form.password });
    alert("Signin successful ✅ (You can connect this to your backend API)");
  };

  return createPortal(
    <div className="fixed inset-0 z-[9999]">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92vw] max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* Logout Button */}
        <button
          onClick={onLogout}
          className="absolute top-3 right-3 text-xs px-3 py-1 rounded-full 
                     bg-gradient-to-r from-red-500 to-rose-600 text-white 
                     hover:from-rose-600 hover:to-red-500 shadow-md hover:shadow-lg transition-all duration-300"
        >
          Logout
        </button>

        {/* Left Panel */}
        <div className="hidden md:flex flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white">
          <h2 className="text-2xl font-semibold mb-2">Welcome Back!</h2>
          <p className="text-sm opacity-90 mb-6 text-center">
            Enter your personal details and explore all features.
          </p>
          <button
            onClick={() => setMode("signin")}
            className="px-6 py-2 rounded-full bg-white text-indigo-700 font-medium 
                       hover:bg-indigo-100 shadow-md hover:shadow-lg transition-all duration-300"
          >
            Sign In
          </button>
        </div>

        {/* Right Panel */}
        <div className="p-6 md:p-8">
          {/* Toggle Buttons */}
          <div className="flex items-center gap-3 mb-6">
            <button
              onClick={() => setMode("signup")}
              className={`text-sm px-4 py-1.5 rounded-full font-medium transition-all duration-300 shadow-sm ${
                mode === "signup"
                  ? "bg-gradient-to-r from-indigo-500 to-blue-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Sign Up
            </button>
            <button
              onClick={() => setMode("signin")}
              className={`text-sm px-4 py-1.5 rounded-full font-medium transition-all duration-300 shadow-sm ${
                mode === "signin"
                  ? "bg-gradient-to-r from-indigo-500 to-blue-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Sign In
            </button>
          </div>

          {/* Content */}
          {mode === "signup" ? (
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Create Account
              </h3>

              {/* ✅ Role Selection */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <button
                  onClick={() => setRole("employer")}
                  className={`flex-1 py-2 rounded-lg font-medium transition-all duration-300 shadow-sm ${
                    role === "employer"
                      ? "bg-gradient-to-r from-indigo-500 to-blue-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Employer
                </button>
                <button
                  onClick={() => setRole("employee")}
                  className={`flex-1 py-2 rounded-lg font-medium transition-all duration-300 shadow-sm ${
                    role === "employee"
                      ? "bg-gradient-to-r from-indigo-500 to-blue-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Employee
                </button>
              </div>

              {/* Social Login Buttons */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 shadow-sm hover:shadow transition-all duration-300">
                  <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google logo" className="w-5 h-5" />
                  Google
                </button>
                <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 shadow-sm hover:shadow transition-all duration-300">
                  <img src="https://www.svgrepo.com/show/448234/linkedin.svg" alt="LinkedIn logo" className="w-5 h-5" />
                  LinkedIn
                </button>
              </div>

              <p className="text-xs text-gray-500 mb-3">
                or use your email for registration
              </p>

              {/* Signup Form */}
              <form className="space-y-3" onSubmit={handleSignup}>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email"
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  type="password"
                  placeholder="Password"
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                {/* ✅ Confirm Password */}
                <input
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />

                {/* Error Message */}
                {error && (
                  <p className="text-red-500 text-sm font-medium text-center">{error}</p>
                )}

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-500 via-blue-600 to-purple-600 
                             text-white rounded-md py-2 font-medium 
                             hover:from-blue-600 hover:to-indigo-500 
                             shadow-md hover:shadow-lg transform hover:scale-105 
                             transition-all duration-300"
                >
                  Sign Up
                </button>
              </form>
            </div>
          ) : (
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Sign In
              </h3>

              <form className="space-y-3" onSubmit={handleSignin}>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email"
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  type="password"
                  placeholder="Password"
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-500 via-blue-600 to-purple-600 
                             text-white rounded-md py-2 font-medium 
                             hover:from-blue-600 hover:to-indigo-500 
                             shadow-md hover:shadow-lg transform hover:scale-105 
                             transition-all duration-300"
                >
                  Sign In
                </button>
              </form>
            </div>
          )}

          {/* Close Button */}
          <button
            onClick={onClose}
            className="mt-6 w-full bg-gradient-to-r from-blue-500 to-indigo-600 
                       text-white rounded-md py-2 font-medium 
                       hover:from-indigo-600 hover:to-blue-500 
                       shadow-md hover:shadow-lg transform hover:scale-105 
                       transition-all duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
