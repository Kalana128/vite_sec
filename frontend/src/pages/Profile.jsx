import React, { useState, useEffect } from 'react';
import UpdateButton from '../components/UpdateButton';
import Button from '../components/Button';
import profileImage from '../assets/Profile/profile.jpeg';
import AuthService from "../api/userAPI";
import { ToastContainer, toast } from "react-toastify";
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
// import AuthService from "../api/userAPI";


export default function Profile() {
  const [profile, setProfile] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [imageSelected, setImageSelected] = useState("");
  const [isImageInputPopup, setIsImageInputPopup] = useState(false);
  const navigate = useNavigate();
  // const [isToggleDropdownforInformation, setToggleDropdownforInformation] = useState(false);
  const [updateProfile, setUpdateProfile] = useState({
    username: "",
    email: "",
    firstname: "",
    lastname: "",
    authcode: "",
    department: "",
    profileimage: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userProfile = await AuthService.getCurrentUserDetails();
        console.log(userProfile);
        setProfile(userProfile);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProfile();
  }, []);

  useEffect(() => {
    if (profile && Object.keys(profile).length > 0) {
      setUpdateProfile({
        username: profile.username || "",
        firstname: profile.firstname || "",
        lastname: profile.lastname || "",
        email: profile.email || "", // Make sure to include email here
        authcode: profile.authcode || "",
        department: profile.department || "",
        profileimage: profile.profileimage || "",
      });
    }
  }, [profile]);

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setUpdateProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const uploadImage = async () => {
    const data = new FormData();
    data.append("file", imageSelected);
    data.append("upload_preset", "GarboGoUser_Preset");
    data.append("cloud_name", "dg8cpnx1m");

    console.log("reached uploadimage");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dg8cpnx1m/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    console.log("completed uploadimage");
    const imageUrl = await res.json();
    return imageUrl.url;
  };

  const handleUpdate = async () => {
    // console.log("Profile to update:", updateProfile);
    setIsLoading(true);

    try {
      

      const updatedProfileData = {
        ...updateProfile,
        // profileimage:  || updateProfile.profileimage, 
      };

      const response = await AuthService.updateUser(updatedProfileData);
      toast.success("Your Profile Updated successfully!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      // setToggleDropdownforInformation(false);

      // setProfile((prevProfile) => ({
      //   ...prevProfile,
      //   ...updatedProfileData,
      // }));

      setIsLoading(false);
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Please try again.");
      setIsLoading(false);
    }
    window.location.reload();
  };

  const imageUpdate = async () => {
    try {
      let profileImageUrl = updateProfile.profileimage;

      if (imageSelected) {
        profileImageUrl = await uploadImage();
      }
      console.log(profileImageUrl);
      const updatedProfileData = {
        ...updateProfile,
        profileimage: profileImageUrl || updateProfile.profileimage, // Keep old image if no new image is uploaded
      };
      console.log(updatedProfileData);

      const response = await AuthService.updateUser(updatedProfileData);
        toast.success("Your Profile Updated successfully!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
    
      setIsLoading(false);
    } catch (error) {
      console.error("Error updating profile:", error);
      // alert("Failed to update profile. Please try again.");
      setIsLoading(false);
    }
    setIsImageInputPopup(false);
    window.location.reload();
  }

  const handleLogout = async () => {
    try {
      await AuthService.logoutCurrentUser();
      toast.success("Logout successful", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
      });
      setProfile({}); // Clear the profile data
      // Redirect to home page
      setTimeout(() => {
        navigate("/");
      }, 4000);
    } catch (error) {
      console.error("Logout failed", error);
    }
  };



  // if (error) return <div>Error: {error}</div>;
  // if (!profile) return <div>Loading...</div>;
  return (
    <div>
      <Header/>
    <div className='w-[60%] mx-auto'>
      
      {/* Profile photo */}
      <div className='p-10'>
        <div className='mx-auto w-[40%] flex justify-center'>
          <div className='aspect-square h-[200px] rounded-full relative'>
            <img src={profile.profileimage} className=' absolute border-blue-600 border-[8px] right-4 bottom-0  bg-opacity-100 aspect-square p-1 h-[200px] rounded-full'/>
              <div className=' absolute p-1 bottom-0 right-14 bg-blue-600' onClick={() => setIsImageInputPopup(true)}>
                <UpdateButton value="Edit" /> 
              </div>
              {isImageInputPopup && (<div className='fixed z-50 h-[100vh] w-full top-0 left-0 bg-black bg-opacity-80 flex flex-col justify-center items-center'>
                <input
                  type='file'
                  onChange={(e) => setImageSelected(e.target.files[0])}
                  name='profileimage'
                  className='hidden' 
                  id='file-input' 
                />
                <label 
                  htmlFor='file-input' 
                  className='flex items-center justify-center h-[400px] w-[400px] border-2 text-white border-blue-600 border-dotted bg-blue-200/5 rounded-lg cursor-pointer hover:bg-slate-300 transition duration-200'
                >
                  Select File
                </label>
                <div className=' flex justify-between w-[400px]'>
                <div className='mt-4'>
                  <button
                    className= ' bg-slate-300 w-[175px] text-black py-2 px-8 rounded-lg hover:bg-slate-50 transition duration-200'
                    onClick={() => setIsImageInputPopup(false)}
                  >
                    Cancel
                  </button>
                </div>
                <div className='mt-4'>
                  <button
                    className='bg-blue-600 w-[175px] text-white py-2 px-8 rounded-lg hover:bg-blue-700 transition duration-200'
                    onClick={imageUpdate}
                  >
                    Update
                  </button>
                </div>
                </div>
              </div>

            )}
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-center text-[30px] mt-4">Welcome <span className='text-blue-600'>{profile.username}!</span></h1>
        </div>
      </div>

      {/* Personal info */}
      <div>
        <div className='mb-5 border p-4 rounded-lg'>
          <h2 className='text-xl font-semibold mb-3'>Personal Information</h2>

          <div className="mb-4 flex justify-between items-center">
            <div className='w-[48%]'>
              <label className="block text-gray-700">First Name</label>
              <input type="text" name="firstname" value={updateProfile.firstname} onChange={onHandleChange} placeholder="Enter your first name" className="border border-gray-300 p-2 w-full rounded-md" />
            </div>
            <div className='w-[48%]'>
              <label className="block text-gray-700">Last Name</label>
              <input type="text" name="lastname" value={updateProfile.lastname} onChange={onHandleChange} placeholder="Enter your last name" className="border border-gray-300 p-2 w-full rounded-md" />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="text" name="email" value={updateProfile.email} readOnly className="border bg-blue-600/5 border-gray-300 p-2 w-full rounded-md" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">AuthCode</label>
            <input type="text" name="authcode" value={updateProfile.authcode} readOnly className="border bg-blue-600/5 border-gray-300 p-2 w-full rounded-md" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Department</label>
            <input type="text" name="department" value={updateProfile.department} onChange={onHandleChange} className="border border-gray-300 p-2 w-full rounded-md" />
          </div>

          <div onClick={handleUpdate}>
            <Button value="Update" />
          </div>

        </div>
      </div>

        <div onClick={handleLogout} className=' float-right mt-9'>
          <Button value="Logout" />
        </div>
        
      <ToastContainer />
      </div>
    </div>
  );
}
