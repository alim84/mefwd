import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import PersonelInfo from "./PersonelInfo";
import Desipline from "./Desipline";


const Root = () => {
  return (
    <>
   <Dashboard/>
     
      <PersonelInfo/>
      <Desipline/>
      
    </>
  );
};

export default Root;
