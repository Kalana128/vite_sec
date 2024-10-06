import React, { useState, useEffect } from "react";
import Button from "./Button";
import Logo from "../assets/Header/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../api/userAPI";
import { toast } from "react-toastify"; // Import toast if you're using it

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userProfile = await AuthService.getCurrentUserDetails();
        setProfile(userProfile);
        setIsLoggedIn(!!userProfile); 
      } catch (err) {
        console.error(err.message);
        setIsLoggedIn(false);
      }
    };

    fetchProfile(); 
  }, []); 


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
                src={profile.profileimage}
                alt="user-male-circle"
                className=" rounded-full h-[50px] w-[50px]"
              />
            </Link>
            <Link to="/profile" className="cursor-pointer ml-3" >
              <span>Hello,</span><br/>
              <span className=" text-blue-600 font-semibold text-lg">{profile.username}</span>
            </Link>
          </>
        ) : (
          // Show Login and Signup when the user is not logged in
          <div className="flex items-center gap-2">
            <Link to={"/sign-in"} className="cursor-pointer">
              <Button value="Sign-In" />
            </Link>
            <Link to={'/sign-up'}>
              <Button value="Sign-Up" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
