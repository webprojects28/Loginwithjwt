import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Login.css'
import user_icon from '../assessts/person.png'
import email_icon from '../assessts/email.png'
import password_icon from '../assessts/password.png'
function Login() {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  function submitHandler() {
    console.log("hello world")
    axios({
      url: "http://localhost:8000/authenticate",
      method: "POST",
      data: { username: username, password: password },
    })
      .then((res) => {
        console.log(res.data.message);
        navigate(`/dashboard`);
      })
      .catch((err) => {
        console.log(err);
        alert("User does not Exists");
      });
  }
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  return (
    <div className="conContainer">
      <div className="container">
        <div className="header">
          <div className="text">Login</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Name" onChange={(e) => setusername(e.target.value)}/>
          </div>
          
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Password"  onChange={(e) => setpassword(e.target.value)}/>
          </div>
        </div>
       
        <div className="forgot-password" onClick={()=>{navigate('/forgotpassword')}}>Forgot Password ? <span>Click here!</span></div>
        <div className="submit-container">
         
          <div className='submit gray' onClick={()=>{navigate('/signup')}} >SignUp</div>
          <div className='submit' onClick={()=>submitHandler()}>Login</div>
        </div>
      </div>
      </div>

      
  );
}

export default Login;
