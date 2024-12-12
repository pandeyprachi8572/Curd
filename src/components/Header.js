import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchUser } from "../features/userDetailSlice";
const Header = () => {
  const allusers = useSelector((state) => state.app.users);
  const dispatch =useDispatch()
  const [searchData , setSearchData] = useState("");
  useEffect(()=>{
    dispatch(searchUser(searchData));
  }, [searchData]);
  return (
    <div>
      <nav className="navbar navbar-expand-lg w-[70%] mx-auto  ">
        <div className="container-fluid">
          <h4 className="navbar-brand" href="#">
          
          </h4>
          
            <ul className="navbar-nav mr-auto ">
              <button className="bg-gray-700 text-white pl-4 pr-4 ">
                <Link to="read" className="dropdown-item">
                  Create Post{" "}
                </Link>
              </button>
              <li className="nav-item">
                <Link to="/" className="nav-link ">
                  All Post ({allusers.length}){" "}
                </Link>
              </li>
            </ul>
            <input
              className="form-control mr-2 w-60"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e)=> dispatch(searchUser(setSearchData(e.target.value)))}
            
            />
          </div>
        
      </nav>
    </div>
  );
};
export default Header;