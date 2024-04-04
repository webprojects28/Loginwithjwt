import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import './Login.css'
import user_icon from '../assessts/person.png'
import email_icon from '../assessts/email.png'
import password_icon from '../assessts/password.png'
function ResetPassword() {
  const [password, setpassword] = useState("");
  const { token } = useParams();
  const navigate = useNavigate();
  function SubmitHandler() {
    axios

      .post("http://localhost:8000/resetpassword/" + token, {
        password: password,
      })
      .then((res) => {
        console.log(res.data.message);
        alert("Success");
        navigate(`/login`);
      })
      .catch((err) => {
        console.log(err);
        alert("User does not Exists");
      });
  }
  return (
  
    <div className="conContainer">
    <div className="container">
      <div className="header">
        <div className="text">Reset Password</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password"  onChange={(e) => setpassword(e.target.value)}/>
        </div>
      </div>
      <div className="submit-container">
       
      
        <div className='submit' onClick={()=>SubmitHandler()}>Reset Password</div>
      </div>
    </div>
    </div>
  );
}

export default ResetPassword;
