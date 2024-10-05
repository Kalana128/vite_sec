import React from 'react'

const Login = () => {
  return (
    <div>
      <div className="fixed left-0 top-0 w-full h-[100vh] flex justify-center items-center">
          <div className="bg-gray-100 p-6 rounded-md w-[30%]">
            {/* <img
            //   onClick={() => setIsLoggedInPopup(false)}
              width="20"
              height="20"
              src="https://img.icons8.com/material-rounded/24/1A1A1A/close-window.png"
              alt="close-window"
              className="float-right mt-2 "
            /> */}

            <h2 className="text-2xl font-bold mb-4">Sign In</h2>

            <form>
              <div className=" mb-5">
                <lable className="block text-gray-700 text-sm font-bold mb-2">
                  User Name
                </lable>
                <input
                  id="username"
                  type="text"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Enter your Username"
                  required
                />
              </div>

              <div className="mb-5">
                <lable className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </lable>
                <input
                  id="password"
                  type="text"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Enter your Password"
                  required
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
    </div>
  )
}

export default Login
