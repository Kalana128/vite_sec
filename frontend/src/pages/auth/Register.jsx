import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [userEntryData, setUserEntryData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const {
    username,
    email,
    password,
    confirmPassword,
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

      const newUserEntry = {
        username,
        email,
        password,
        //confrime epa
      };

      try {
        console.log(newUserEntry);
        // await AuthService.register(newUserEntry);

        navigate("/login");
      } catch (error) {
        console.error("Error creating account:", error);
        toast.error("Failed to create account. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }
  };
  return (
    <div>
      <div className="fixed left-0 top-0 w-full h-[100vh] flex justify-center items-center ">
        <div className="bg-gray-100 p-6 rounded-md w-[60%]">
          {/* <img
              onClick={() => setIsSigUpPopup(false)}
              width="22"
              height="22"
              src="https://img.icons8.com/material-rounded/24/1A1A1A/close-window.png"
              alt="close-window"
              className="float-right mt-2 "
            /> */}

          <h2 className="text-2xl font-bold mb-4">Sign Up</h2>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-3">
              <div className=" mb-5">
                <lable className="block text-gray-700 text-sm font-bold mb-2">
                  First Name
                </lable>
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
                <lable className="block text-gray-700 text-sm font-bold mb-2">
                  Last Name
                </lable>
                <input
                  id="lastName"
                  type="text"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Enter your Last Name"
                  required
                />
              </div>

              <div className="mb-5">
                <lable className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </lable>
                <input
                  id="email"
                  type="text"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Enter your Email"
                  required
                />
              </div>

              <div className="mb-5">
                <lable className="block text-gray-700 text-sm font-bold mb-2">
                  Department
                </lable>
                <input
                  id="lastName"
                  type="text"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Enter your Last department"
                  required
                />
              </div>
              <div className="mb-5">
                <lable className="block text-gray-700 text-sm font-bold mb-2">
                  Auth Code
                </lable>
                <input
                  id="authCode"
                  type="text"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Enter provided authentication code"
                  required
                />
              </div>

              <div className="mb-5">
                <lable className="block text-gray-700 text-sm font-bold mb-2">
                  User Name
                </lable>
                <input
                  id="userName"
                  type="text"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Enter your User Name"
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

              <div className="mb-5">
                <lable className="block text-gray-700 text-sm font-bold mb-2">
                  Confirm Password
                </lable>
                <input
                  id="confirmPassword"
                  type="text"
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
    </div>
  );
};

export default Register;
