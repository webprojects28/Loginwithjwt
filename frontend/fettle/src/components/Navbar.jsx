import "./Navbar.css";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
function Navbar() {
  const navigate=useNavigate()
  axios.defaults.withCredentials=true;
  const handleLogout = () => {
    axios({
      url: "http://localhost:8000/logout",
      method: "GET",
    }).then((res) => {
      if (res.data.status) {
        navigate('/login')
      }
    }).catch(err=>{
      console.log(err)
    })
  };
  return (
    <div>
        <header className="headernav" >
        <Link className="logo" to="/dashboard">Fettle</Link>
        <nav className="navbar">
            <Link to="/dashboard">Home</Link>
            <Link to="/caloriecalculator">Calorie Calculator</Link>
            <Link to="/dietplanner">Diet Planner</Link>
            <Link to="/aboutus">About Us</Link>
            <Link to="/contactus">Contact</Link>
            <a onClick={handleLogout}>Logout</a>
        </nav>
        </header>
    </div>
  )
}

export default Navbar;