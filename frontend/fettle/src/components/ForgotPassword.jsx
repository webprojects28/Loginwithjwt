import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import './Login.css'
import user_icon from '../assessts/person.png'
import email_icon from '../assessts/email.png'
import password_icon from '../assessts/password.png'
function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  function SubmitHandler() {
    axios({
      url: "http://localhost:8000/forgotpassword",
      method: "POST",
      data: { email: email },
    })
      .then((res) => {
        if (res.data.status) {
          console.log(res.data.message);
          alert("check your email for reset password link");
          navigate(`/login`);
        }
        console.log(res.data);
      })
      .catch((err) => {
        alert("Error");
      });
  }
  return (

    <div className="conContainer">
    <div className="container">
      <div className="header">
        <div className="text">Forgot Password</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder="Email Id" onChange={(e) => setemail(e.target.value)}/>
          </div>
      </div>
      <div className="submit-container">
       
        <div className='submit' onClick={()=>SubmitHandler()}>Submit</div>
      </div>
    </div>
    </div>
  );
}

export default ForgotPassword;
