import React from "react";
import Sidebar from "./Sidebar";
//import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import Header from "./Header";
//import ProjectTable from "./ProjectTable";
//import Employee from "./Employee";
//import Attendance from "./Attendance";
//import HourlyRate from "./HourlyRate";
const Dashboard = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get("name");
  return (
 <div className="">
      
        
        <div className="sidebar ">
          <Sidebar />
          
        </div>
        <div className="main-content   mt-15 p-20 lg:px-10 ">
            <Header/>
         {/* {name === "projects" && <ProjectTable />}
          {name === "employee" && <Employee />}
          {name === "attendance" && <Attendance />}
          {name === "hourlyrate" && <HourlyRate />}*/}
        </div>
      </div>


  );
};
export default Dashboard;
