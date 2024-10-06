import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../api/userAPI";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const [userEntryData, setUserEntryData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    authcode: "",
    department: "",
    firstname: "",
    lastname: "",
  });

  const {
    username,
    email,
    password,
    confirmPassword,
    authcode,
    department,
    firstname,
    lastname,
  } = userEntryData;
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setUserEntryData({
      ...userEntryData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
      setIsLoading(false);
      return;
    }

    const newUserEntry = {
      firstname,
      lastname,
      username,
      authcode,
      department,
      email,
      password,
    };

    try {
      console.log(newUserEntry);
      await AuthService.register(newUserEntry);
      toast.success("Your Account has been created successfully!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setTimeout(() => {
        navigate("/sign-in");
      }, 3000);
    } catch (error) {
      console.error("Error creating account:", error);
      toast.error("Failed to create account. Please try again.", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="fixed left-0 top-0 w-full h-[100vh] flex justify-center items-center ">
        <div className="bg-gray-100 p-6 rounded-md w-[60%]">
          <h2 className="text-2xl font-bold mb-4">Sign Up</h2>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-3">
              <div className=" mb-5">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  First Name
                </label>
                <input
                  id="firstname"
                  name="firstname"
                  type="text"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Enter your First Name"
                  value={firstname}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-5">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastname"
                  type="text"
                  value={lastname}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Enter your Last Name"
                  required
                />
              </div>

              <div className="mb-5">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Enter your Email"
                  required
                />
              </div>

              <div className="mb-5">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Department
                </label>
                <input
                  id="department"
                  type="text"
                  name="department"
                  value={department}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Enter your Last department"
                  required
                />
              </div>

              <div className="mb-5">

                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Auth Code
                </label>
                <input
                  id="authCode"
                  type="text"
                  name="authcode"
                  value={authcode}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Enter provided authentication code"
                  required
                />
              </div>

              <div className="mb-5">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  User Name
                </label>
                <input
                  id="username"
                  type="text"
                  name="username"
                  value={username}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Enter your User Name"
                  required
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
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Enter your Password"
                  required
                />
              </div>

              <div className="mb-5">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Retype Password"
                  required
                />
              </div>
            </div>

            <div className="flex justify-between   gap-4 items-center mb-4">
              <p className="text-[15px">
                Already have account{" "}
                <a href="#" className="text-blue-600 text-sm hover:underline">
                  Login here{" "}
                </a>
              </p>
              <button
                type="submit"
                className="bg-blue-600 py-3 px-10 rounded-full text-white font-semibold"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
export default Register;


