import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../api/userAPI";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
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

  return (
    <div>
      <div className="fixed left-0 top-0 w-full h-[100vh] flex justify-center items-center">
        <div className="bg-gray-100 p-6 rounded-md w-[30%]">
          <h2 className="text-2xl font-bold mb-4">Sign In</h2>

          <form onSubmit={handleLogin}>
            <div className=" mb-5">
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

            <div className="mb-5">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                value={password}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter your Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex justify-between items-center mb-4">
              <button
                type="submit"
                className="bg-blue-600 py-2 px-4 rounded-full text-white font-semibold"
              >
                Sign In
              </button>
              <a href="#" className="text-blue-600 text-sm hover:underline">
                Forgot Password?{" "}
              </a>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
