import React from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { useState } from "react";
function SignUp() {
  const [email, setemail] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  function submitHandler() {
    axios({
      url: "http://localhost:8000/",
      method: "POST",
      data: { username: username, email: email, password: password },
    })
      .then((res) => {
        if (res.data.username) {
          alert("Success");
          navigate(`/login`);
        } else {
          if (res.data.message.keyPattern.username)
            alert("Select Different Username");
          else alert("Select Different Email");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("There is some problem in API REQUEST OR BACKEND");
      });
  }
  return (
    <div>
      <div>
        <label htmlFor="email">Email : </label>
        <input
          id="email"
          onChange={(e) => {
            setemail(e.target.value);
          }}
        ></input>
      </div>
      <div>
        <label htmlFor="username">UserName : </label>
        <input
          id="username"
          onChange={(e) => {
            setusername(e.target.value);
          }}
        ></input>
      </div>
      <div>
        <label htmlFor="password">Password : </label>
        <input
          id="password"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        ></input>
      </div>
      <button onClick={submitHandler}>Submit</button>
    </div>
  );
}

export default SignUp;
