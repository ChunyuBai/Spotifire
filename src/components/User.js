import React from "react";
import Body from "./Body";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import './User.css';

function User({spotify}) {
  
  return (
    <div className="user">
      <div className="playerBody">
        <Sidebar/>
        <Body />
      </div>
        <Footer />
    </div>
  )
}

export default User