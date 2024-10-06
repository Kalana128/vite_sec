// import React, {useState, useEffect} from 'react'
import React, { useEffect, useState } from 'react'
import AdminDrawer from './components/AdminDrawer'
import AuthService from "../../api/userAPI";
import { ToastContainer, toast } from "react-toastify";
import { getAllMarks } from '../../api/markApi';


export default function AdminMarks() {
    const [marks, setMarks] = useState([]);
    const [users, setUsers] = useState([]);

//   const [open, setOpen] = React.useState(false);
//   const [selectedUserId, setSelectedUserId] = useState(null);
//   const [loader, setLoader] = useState(false);

  const fetchAllMarks = async () => {
    try {
      const res = await getAllMarks(); 
      setMarks(res); 
    } catch (error) {
      alert(error.message);
      console.error("Error fetching marks: ", error.message);
    }
  };

  const fetchAllUsers = async () => {
    try {
      const res = await AuthService.getAllUsers();
      setUsers(res); 
    } catch (error) {
      alert(error.message);
      console.error("Error fetching garbages: ", error.message);
    }
  };

  useEffect(() => {
    fetchAllMarks();
    fetchAllUsers();
  }, []);

  return (
  
        <AdminDrawer>
        <table className="w-full shadow-xl text-sm text-left rtl:text-right text-gray-500 :text-gray-400">
        <caption className="p-5 shadow-xl  text-lg font-semibold text-left rtl:text-right text-[#48752c]  bg-gray-50 :text-white :bg-gray-800">
          User Marks
        </caption>
        <thead className=" text-xs text-gray-700 uppercase bg-gray-50 :bg-gray-700 :text-gray-400">
          <tr>
            <th scope="col" className="px-4 py-3 ">

            </th>
            <th scope="col" className="px-4 py-3 ">
              Username
            </th>
            <th scope="col" className="px-4 py-3 ">
              Marks
            </th>
            <th scope="col" className="px-4 py-3 ">
              Type
            </th>
            <th scope="col" className="px-4 py-3">
              Date
            </th>
            <th scope="col" className="px-4 py-3">
              Time
            </th>
          </tr>
        </thead>
        <tbody className=" shadow-xl ">
        {marks.length > 0 ? (
            marks.map((mark) => {
                // Find the corresponding user for the mark
                const user = users.find(user => user._id === mark.user);

                return (
                    <tr
                        className="bg-white border-b :bg-gray-800 :border-gray-700"
                        key={mark._id}
                    >
                        <td className="px-3">
                            {user ? (
                                <img
                                    src={user.profileimage}
                                    alt="Profile"
                                    className="w-[30px] h-[30px] rounded-full"
                                />
                            ) : (
                                <div className="w-[30px] h-[30px] rounded-full bg-gray-300"></div> // Placeholder if no user found
                            )}
                        </td>
                        <th
                            scope="row"
                            className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap :text-white"
                        >
                            {user ? user.username : "Unknown User"}
                        </th>
                        <td className="px-4 py-4">{mark.marks}</td>
                        <td className="px-4 py-4">{mark.type}</td>
                        <td className="px-4 py-4">{new Date(mark.date).toLocaleDateString()}</td>
                        <td className="px-4 py-4"> {new Date(mark.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
                    </tr>
                );
            })
        ) : (
            <tr>
                <td colSpan={5} className="w-full text-md text-gray-600 font-semibold m-10 text-center">
                    No registered user found!
                </td>
            </tr>
        )}
        </tbody>
      </table>
        </AdminDrawer>
  )
}
