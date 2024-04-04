import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import './Home.css'
import axios from "axios";
function Home() {
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
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/signup">
        <button>SignUp</button>
      </Link>
      <Link to="/dashboard">
        <button>Dashboard</button>
      </Link>
      
      <button onClick={handleLogout}>Logout</button>
     
    </div>
  );
}

export default Home;
