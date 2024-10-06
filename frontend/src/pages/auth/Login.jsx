//Ara deepu eka

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import AuthService from "../../api/userAPI";
// import { toast, ToastContainer } from "react-toastify";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await AuthService.login({ email, password });
//       console.log("Login successful", response);

//       toast.success("Logged in successfully!", {
//         position: "bottom-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "colored",
//       });
//       // Redirect to dashboard or home page
//       setTimeout(() => {
//         if (response.isAdmin) {
//           navigate("/admin");
//         } else {
//           navigate("/dashboard");
//         }
//       }, 3000);
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <div>
//       <div className="fixed left-0 top-0 w-full h-[100vh] flex justify-center items-center">
//         <div className="bg-gray-100 p-6 rounded-md w-[30%]">
//           <h2 className="text-2xl font-bold mb-4">Sign In</h2>

//           <form onSubmit={handleLogin}>
//             <div className=" mb-5">
//               <label className="block text-gray-700 text-sm font-bold mb-2">
//                 Email{" "}
//               </label>
//               <input
//                 id="email"
//                 type="email"
//                 name="email"
//                 value={email}
//                 className="w-full px-3 py-2 border rounded-md"
//                 placeholder="Enter your email"
//                 required
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>

//             <div className="mb-5">
//               <label className="block text-gray-700 text-sm font-bold mb-2">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 type="password"
//                 name="password"
//                 value={password}
//                 className="w-full px-3 py-2 border rounded-md"
//                 placeholder="Enter your Password"
//                 required
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>

//             <div className="flex justify-between items-center mb-4">
//               <button
//                 type="submit"
//                 className="bg-blue-600 py-2 px-4 rounded-full text-white font-semibold"
//               >
//                 Sign In
//               </button>
//               <a href="#" className="text-blue-600 text-sm hover:underline">
//                 Forgot Password?{" "}
//               </a>
//             </div>
//           </form>
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../api/userAPI";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isMaliciousInput, setIsMaliciousInput] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      setError("Invalid email address");
      return;
    }
    if (email.includes("<") || email.includes(">") || password.includes("<") || password.includes(">")) {
      setIsMaliciousInput(true);
      setError("Malicious input detected. Please try again.");
      return;
    }
    try {
      const response = await AuthService.login({ email, password });
      console.log("Login successful", response);

      toast.success("Logged in successfully!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      // Redirect to dashboard or home page
      setTimeout(() => {
        if (response.isAdmin) {
          navigate("/admin");
        } else {
          navigate("/dashboard");
        }
      }, 3000);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="fixed left-0 top-0 w-full h-[100vh] flex justify-center items-center">
        <div className="bg-gray-100 p-6 rounded-md w-[30%]">
          <h2 className="text-2xl font-bold mb-4">Sign In</h2>

          <form onSubmit={handleLogin}>
            <div className="mb-5">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email{" "}
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={email}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter your email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-5 relative">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter your Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="absolute right-3 top-9 cursor-pointer"
                onClick={handleShowPassword}
              >
                {showPassword ? (
                  <i className="fas fa-eye-slash"></i>
                ) : (
                  <i className="fas fa-eye"></i>
                )}
                <span className="ml-2 text-sm py-5">Show</span>
              </span>
            </div>

            {isMaliciousInput && (
              <div className="text-red-600 text-sm mb-4">
                Warning: Malicious input detected. Please try again.
              </div>
            )}
            {error && (
              <div className="text-red-600 text-sm mb-4">{error}</div>
            )}

            <div className="flex justify-between items-center mb-4">
              <button
                type="submit"
                className="bg-blue-600 py-2 px-4 rounded-full text-white font-semibold"
              >
                Sign In
              </button>
              <Link to='/sign-up' className="text-black text-sm hover:underline">
                Create new account <span className=" text-blue-600">Sign-Up</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
