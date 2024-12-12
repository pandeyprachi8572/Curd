import React from "react";
//mport { logout } from "../utils/auth";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
const navigate = useNavigate();
const handleLogout = () => {
//logout();
navigate("/login");
};
   return (
    <div className="bg-gray-700 text-white p-10  flex justify-between min-w-full  position: fixed  items-center ">
      
      <button
        onClick={handleLogout}
        className="bg-red-800 text-white px-4 mr-4 mt-3 rounded-md text-white rounded  absolute right-0 top-0 h-10 w-30"
      >
        Logout
      </button>
    </div>
  );
};
export default Navbar;
