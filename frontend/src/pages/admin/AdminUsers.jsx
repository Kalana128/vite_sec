// import React from 'react'
import AdminDrawer from "./components/AdminDrawer";
import React, { useState, useEffect } from "react";
// import ResponsiveDrawer from "../components/ResposiveDrawer";
import AuthService from "../../api/userAPI"
import DeleteIcon from "@mui/icons-material/Delete";

import { ToastContainer, toast } from "react-toastify";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

// import userimage from "../../../assets/user.png";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AdminUsers() {
    const [users, setUsers] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [loader, setLoader] = useState(false);

  const fetchAllUsers = async () => {
    try {
      const res = await AuthService.getAllUsers(); // Call the API to fetch users
      setUsers(res); // Assuming setUsers is your state setter for user data
    } catch (error) {
      alert(error.message);
      console.error("Error fetching garbages: ", error.message);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const handleClickOpen = (id) => {
    console.log(`id => `, id);
    setSelectedUserId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteUser = async () => {
    if (selectedUserId) {
      try {
        await AuthService.deleteUser(selectedUserId);
        setUsers((currentUser) =>
          currentUser.filter((user) => user._id !== selectedUserId)
        );
        handleClose();
        toast.success("User account has been deleted successfully!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } catch (error) {
        alert(error.message);
        console.log("Error deleting user: ", error);
      }
    }
  };


  return (
  
        <AdminDrawer>
        <table className="w-full shadow-xl text-sm text-left rtl:text-right text-gray-500 :text-gray-400">
        <caption className="p-5 shadow-xl  text-lg font-semibold text-left rtl:text-right text-[#48752c]  bg-gray-50 :text-white :bg-gray-800">
          User Account Holders
        </caption>
        <thead className="  text-xs text-gray-700 uppercase bg-gray-50 :bg-gray-700 :text-gray-400">
          <tr>
            <th scope="col" className="px-4 py-3 ">

            </th>
            <th scope="col" className="px-4 py-3 ">
              Username
            </th>
            <th scope="col" className="px-4 py-3 ">
              Firstname
            </th>
            <th scope="col" className="px-4 py-3 ">
              Lastname
            </th>
            {/* <th scope="col" className="px-6 py-3">
                Email
              </th> */}
            <th scope="col" className="px-4 py-3">
              Email
            </th>
            <th scope="col" className="px-4 py-3">
            Authcode
            </th>
            <th scope="col" className="px-4 py-3">
            department
            </th>
            {/* <th scope="col" className="px-4 py-3">
              Address
            </th> */}
            {/* <th scope="col" className="px-4 py-3">
              contact
            </th> */}
            <th scope="col" className="px-4 py-3"></th>
          </tr>
        </thead>
        <tbody className=" shadow-xl ">
          {users.length > 0 ? (
            users.map((user) => (
              <tr
                className="bg-white border-b :bg-gray-800 :border-gray-700 "
                key={user._id}
              >
                <td className="px-3">
                  <img
                    src={user?.profileimage }
                    alt="Profile Picture"
                    className="w-[30px] h-[30px] rounded-full"
                  />
                </td>
                <th
                  scope="row"
                  className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap :text-white"
                >
                  {user.username}
                </th>
                <td className="px-4 py-4">{user.firstname}</td>
                <td className="px-4 py-4">{user.lastname}</td>
                <td className="px-4 py-4">{user.email}</td>
                <td className="px-4 py-4">{user.authcode}</td>
                <td className="px-4 py-4">{user.department}</td>
                {/* <td className="px-4 py-4">{user.address}</td>
                <td className="px-4 py-4">{user.contact}</td> */}
                {/* <td className="px-4 py-4 text-right">
                  <a
                    className={`font-medium ${
                      user.email === "admin@gmail.com"
                        ? "text-gray-300"
                        : "text-gray-400 :text-blue-500 cursor-pointer"
                    }`}
                    style={{
                      pointerEvents:
                        user.email === "admin@gmail.com" ? "none" : "auto",
                    }}
                  >
                    <EditIcon />
                  </a>
                </td> */}
                <td className="px-3 py-4 text-right">
                  <a
                    onClick={() => handleClickOpen(user._id)}
                    className={`font-medium ${
                      user.email === "admin@gmail.com"
                        ? "text-gray-300"
                        : "text-red-600 :text-blue-500 cursor-pointer"
                    }`}
                    style={{
                      pointerEvents:
                        user.email === "admin@gmail.com" ? "none" : "auto",
                    }}
                  >
                    <DeleteIcon />
                  </a>
                </td>
              </tr>
            ))
          ) : (
            <div className="w-full text-md text-gray-600 font-semibold m-10 text-center">
              No registered user found!
            </div>
          )}
        </tbody>
      </table>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            The selected user accout will be deleted and cannot be retrieved.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDeleteUser} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      <ToastContainer />
        </AdminDrawer>
      
  
  )
}
