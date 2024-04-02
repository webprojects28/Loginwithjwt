import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  function SubmitHandler() {
    axios({
      url: "http://localhost:8000/authenticate",
      method: "POST",
      data: { username: username, password: password },
    })
      .then((res) => {
        console.log(res.data.message);
        alert("Success");
        navigate(`/user/${res.data.user.username}`);
      })
      .catch((err) => {
        alert("User does not Exists");
      });
  }
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  return (
    <div>
      <div>
        <label htmlFor="username">UserName : </label>
        <input
          id="username"
          onChange={(e) => setusername(e.target.value)}
        ></input>
      </div>
      <div>
        <label htmlFor="password">Password : </label>
        <input
          id="password"
          onChange={(e) => setpassword(e.target.value)}
        ></input>
      </div>
      <div>
        <button onClick={SubmitHandler}>Log In</button>
      </div>
    </div>
  );
}

export default Login;
