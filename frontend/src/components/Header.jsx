import React, { useState, useEffect } from "react";
import Button from "./Button";
import Logo from "../assets/Header/Logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Retrieve the value from localStorage when the component mounts
  useEffect(() => {
    const storedValue = localStorage.getItem("isLoggedIn");
    if (storedValue === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLoginClick = () => {
    // try {
    //   localStorage.setItem('isLoggedIn', 'true');
    //   setIsLoggedIn(true); // Update the state after login
    //   console.log('Login status saved in local storage');
    // } catch (error) {
    //   console.error('Error setting item in local storage', error);
    // }
  };

  const handleLogoutClick = () => {
    try {
      localStorage.setItem("isLoggedIn", "false");
      setIsLoggedIn(false); // Update the state after logout
      console.log("Logout status saved in local storage");
    } catch (error) {
      console.error("Error setting item in local storage", error);
    }
  };

  return (
    <div className="w-full z-40 h-[5rem] bg-slate-300 flex justify-between items-center">
      <div className="w-1/3 text-4xl text-center pl-10">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="w-1/3 flex justify-center items-center text-lg">
        <ul className="inline-flex space-x-20 font-semibold">
          <Link to="/">
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
          </Link>
          <Link to="/dashboard">
            <li className="hover:text-blue-500 cursor-pointer">Resources</li>
          </Link>
          <Link to="/support">
            <li className="hover:text-blue-500 cursor-pointer">Support</li>
          </Link>
        </ul>
      </div>
      <div className="w-1/3 flex justify-end items-center pr-5">
        {isLoggedIn ? (
          // Show Logout when the user is logged in
          <>
            <Link to="/profile">
              <img
                width="60"
                height="60"
                src="https://img.icons8.com/ios-filled/50/228BE6/user-male-circle.png"
                alt="user-male-circle"
              />
            </Link>
            <p className="cursor-pointer" onClick={handleLogoutClick}>
              Logout
            </p>
          </>
        ) : (
          // Show Login and Signup when the user is not logged in
          <div className="flex items-center gap-2">
            <Link to={"/sign-in"} className="cursor-pointer">
                <Button value="Login" />
            </Link>
            <Link to={'/sign-up'}>
                <Button value="Signup" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
